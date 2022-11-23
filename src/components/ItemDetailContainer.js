import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { item as itemData } from "../data/item.data";

const ItemDetailContainer = () => {
    const { id } = useParams ();
const [item, setItem] = useState(null);

useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemData), 2000)).then(
    (data) => {
        if (id) {
        const ids = data.find((product) => product.id === id);
        setItem(ids);
        } else {
        setItem(data);
        }
    }
    );
}, [id]);

if (!item) {
    return <p>Loading...</p>;
}

return <ItemDetail item={item} />;
};

export default ItemDetailContainer;