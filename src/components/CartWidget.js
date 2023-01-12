import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    console.log(productsAdded);
    const count = productsAdded.length;

    return (
        <div className='d-flex gap-2'>
        <Link to="/ver-carrito">
            <button className="nav-link btn btn-success btn-sm" id="open" href="#">
                <i className="bi bi-cart" style={{ margin: '0 10px' }}></i>
                Ver Carrito
            <span id="contador-carrito" style={{ marginLeft: '10px' }}>{count}</span>
        </button>
        </Link>
    </div>
    );
};

export default CartWidget;