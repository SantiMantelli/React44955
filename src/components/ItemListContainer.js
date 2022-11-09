function ItemListContainer ({name, contacto}){
    return(

        <div className="alert alert-info" role="alert">
            <h2>{`Hola, ${name}! Contactate al: ${contacto}`}</h2>
        </div>

);
}

export default ItemListContainer;