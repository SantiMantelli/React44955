export const ItemCount = ({ count, handleCount }) => {
    return (
    <div>
        <button
        onClick={() => handleCount("minus")}
        className="p-3 mb-2 bg-primary text-white"
        >
        -
        </button>
        <span id="counter" className="p-3 mb-2">
        {count}
        </span>
        <button
        onClick={() => handleCount("plus")}
        className="p-3 mb-2 bg-primary text-white"
        >
        +
        </button>
    </div>
    );
};