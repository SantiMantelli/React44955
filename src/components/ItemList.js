import Item from "./Item";

const ItemList = ({ products }) => {
return (
    <div className="container">
        <div className="row mt-4">
            {products.map((product) => (
                <Item product={product} key={product.id} />
            ))}
        </div>
    </div>
);
};

export default ItemList;