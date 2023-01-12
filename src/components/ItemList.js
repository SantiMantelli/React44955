import Item from "./Item";

export const ItemList = ({ products }) => {
return (
    <div className="container">
        <div className="row mt-4">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    </div>
);
};

export default ItemList;