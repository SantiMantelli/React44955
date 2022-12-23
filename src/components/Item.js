import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import { Link } from "react-router-dom";

const Item = ({ product }) => {
    const { addItem } = useContext(CartContext)
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch">
            <div className="card w-100">
                <div style={{ maxHeight: '250px' }} className="d-flex align-items-center">
                    <img src={product.img} className="w-100 h-100" alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title text-center">{product.name}</h5>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">{product.ano}</li>
                    <li className="list-group-item">{product.version}</li>
                    <li className="list-group-item">{product.kms}</li>
                    <li className="list-group-item">{product.motor}</li>
                </ul>
                <div className="d-flex justify-content-evenly p-2">
                    <Link exact="true" path="true" to={`/item/${product.id}`}>
                        <button className="btn btn-primary btn-sm">
                            Ver detalles
                        </button>
                    </Link>
                    <button className="btn btn-success btn-sm" onClick={() => addItem(product)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
