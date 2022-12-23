import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

function CartWidget () {
    const { productsInCart, clearCart } = useContext(CartContext)

    return (    
        <div className='d-flex gap-2'>
            <Link to="/ver-carrito">
                <button className="nav-link btn btn-success btn-sm" id="open" href="#">
                    <i className="bi bi-cart" style={{ margin: '0 10px' }}></i>
                    Ver Carrito
                    <span id="contador-carrito" style={{ marginLeft: '10px' }}>{productsInCart.length}</span>
                </button>      
            </Link>      
            <button className="nav-link btn btn-danger btn-sm" onClick={() => clearCart()}>
                Vaciar carrito
            </button>
        </div>
    )
}

export default CartWidget;