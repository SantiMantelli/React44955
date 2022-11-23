import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
    <div className="text-center d-inline-flex">
    <div className="card" class="CardStock">
        <img src={product.img}  className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li className="list-group-item">{product.ano}</li>
        <li className="list-group-item">{product.version}</li>
        <li className="list-group-item">{product.kms}</li>
        <li className="list-group-item">{product.motor}</li>
    </ul>
        <button className="btn btn-secondary">
            <Link exact path to={`/item/${product.id}`}>
                Ver detalles.
            </Link>
        </button>
    </div>
    </div>
    );
};

export default Item;
