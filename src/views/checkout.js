import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../contexts/CartContext";

// firebase
import {
addDoc,
collection,
doc,
getFirestore,
updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
const [isLoading, setIsLoading] = useState(false);
const [updatingProducts, setUpdatingProducts] = useState(false);
const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
const navigate = useNavigate();

const getTotalByProduct = (quantity, price) => {
    return quantity * price;
};

const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = items
        .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
    )
    .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
    buyer: { name, phone, email },
    items,
    total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
    .then(() => {
        setUpdatingProducts(true);
    })
    .catch((err) => console.error({ err }))
    .finally(() => {});
};

useEffect(() => {
    if (updatingProducts) {
    const db = getFirestore();

    items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
        stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
        .then(() => {
            clear();
            setIsLoading(false);
            alert("Compra finalizada");
            navigate("/");
        })
        .catch((err) => console.error(err));
    });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [updatingProducts]);

return (
    <Layout>
    <form onSubmit={handleFinalizePurchase}>
        <div className="form-group">
            <label>Nombre completo</label>
            <input
                className="form-control"
                placeholder="Nombre Completo"
                required
            />
        </div>
        <div className="form-group">
            <label>Numero de telefono</label>
            <input 
                className="form-control"
                placeholder="Numero de Telefono"
                type="number"
                required
            />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
                className="form-control"
                placeholder="Email"
                type={"email"}
                required
            />
        </div>
        <div className="form-group">
            Total a pagar: <strong>${totalAmount}</strong>
        </div>
        <button
        type="submit"
        className="btn btn-success"
        disabled={isLoading}
        >
        Finalizar
        </button>
    </form>
    </Layout>
);
};

export default CheckoutView;