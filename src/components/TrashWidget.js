
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const TrashWidget = ({ itemId }) => {
const { removeItem } = useContext(CartContext);
return (
    <button
    onClick={() => removeItem(itemId)}
    className="d-flex justify-content-center align-items-stretch btn btn-danger"
    >
    Vaciar carrito
    </button>
);
};