import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";

export const Item = ({ product, quantityAdded }) => {
    const navigate = useNavigate();
    const img = useGetItemImg(product.img);

    const name = product.name.slice(0, 20);
    const year = product.year;
    const version = product.version;
    const kms = product.kms;
    const motor = product.motor;
    const price = product.price;
    const stock = product.stock;

    function handleNavigate() {
    navigate(`/item/${product.id}`);
    }

    if (!img) {
    return <Loading />;
    }

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch">
            <div className="card w-100">
                <div style={{ maxHeight: '250px' }} className="d-flex align-items-center">
                    <img src={img} className="w-100 h-100" alt="" />
                </div>
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title text-center">{name}</h5>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">Año {year}</li>
                    <li className="list-group-item">Version {version}</li>
                    <li className="list-group-item">{kms} KMS</li>
                    <li className="list-group-item">Motor {motor}</li>
                    <li className="list-group-item"><b>$ {price}</b></li>
                </ul>
                <div className="d-flex justify-content-evenly p-2">
                        <button onClick={handleNavigate} className="btn btn-primary btn-sm">
                            Ver detalles
                        </button>
                        <p className={stock === 0 ? "text-xs text-red-500" : "text-xs"}>
                            {stock === 0
                            ? "Sin Stock"
                            : quantityAdded
                            ? `Agregados: ${quantityAdded}`
                            : `En Stock: ${stock}`}
                        </p>
                    {/* <button className="btn btn-success btn-sm" onClick={() => addItem(product)}>
                        Agregar al carrito
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Item;
