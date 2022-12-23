import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Own components
import ItemList from "./ItemList";

// Mock
import { item } from "../data/item.data";

const ItemListContainer = () => {
const { category } = useParams();
const [products, setProducts] = useState([]);

useEffect(() => {
    if (category) {
        const categories = item.filter(product => product.category === category);
        setProducts(categories);
    } else {
        setProducts(item);
    }
}, [category]);

if (products.length === 0) {
    return <p>Loading...</p>;
}

return (
    <div className="h-full">
        <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;
