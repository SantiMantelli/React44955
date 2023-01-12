import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { ItemCount } from "./ItemCount";
import { Loading } from "./Loading";

const ItemDetail = ({ item }) => {
const { addItem, isInCart } = useContext(CartContext);
const navigate = useNavigate();
const [count, setCount] = useState(1);
const [currentStock, setCurrentStock] = useState(item.stock);
const maxQuantity = currentStock;
const img = useGetItemImg(item.img);
const img2 = useGetItemImg(item.img2);

function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
}

function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
    setCurrentStock(currentStock - count);
    addItem(item, count);
    }
}

function handleCheckout() {
    navigate("/ver-carrito");
}

return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    {!img ? <Loading /> : <img className="imgSize" src={img} alt={item.name} />}
                    </div>
                    <div className="carousel-item">
                    {!img ? <Loading /> : <img className="imgSize" src={img2} alt={item.name} />}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="card text-bg-dark mb-3">
                <h2 className="text-center">{item.name}</h2>
                <h6 className="card-text text-center">{item.description}</h6>
                <div className="card-header text-center">Version {item.version}</div>
                <div className="card-body text-center">
                    <div className="card-title text-center">{item.kms} KMS</div>
                    <div className="text-center">Año {item.year}</div>
                    <div className="text-center">Motor {item.motor}</div>
                    <h3 className="card-title text-center">$ {item.price}</h3>
                    {currentStock > 0 && <p>En Stock: {currentStock}</p>}

<div>
  {/* Count */}
{currentStock > 0 ? (
    <ItemCount count={count} handleCount={handleCount} />
) : (
    <span>Sin stock</span>
)}
<div>
    <button
    onClick={handleAdd}
    className="btn btn-warning"
    disabled={currentStock === 0}
    >
    Agregar al carrito
    </button>
    <button
    disabled={!isInCart(item.id)}
    onClick={handleCheckout}
    className="btn btn-success"
    >
    Finalizar Compra
    </button>
</div>
</div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;



