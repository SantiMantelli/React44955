const ItemDetail = ({ item }) => {
    return (
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
        <img src={item.img} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
        <img src={item.img1} className="d-block w-100" alt="..."/>
    </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
    </div>


    <div className="card text-bg-dark mb-3">
    <h2 className="text-center">{item.name}</h2>
    <div className="card-header text-center">{item.version}</div>
    <div className="card-body">
    <div className="card-title text-center">{item.kms}</div>
    <div className="text-center">{item.ano}</div>
    <div className="text-center">Motor {item.motor}</div>
        <h6 className="card-text text-center">{item.description}</h6>
        <h3 className="card-title text-center">{item.price}</h3>
    </div>
    </div>
    </div>
    );
};

export default ItemDetail;



