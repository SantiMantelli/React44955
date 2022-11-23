import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

function NavBar (){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    
    <Link className="navbar-brand" to="/">La Curtiembre</Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav m-3">
        
        <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
        
        <Link className="nav-link" to="/category/camionetas">Camionetas</Link>
        
        <Link className="nav-link" to="/category/autos">Autos</Link>

        <Link className="nav-link" to="/category/motos">Motos</Link>
        
        <CartWidget />
        </div>
    </div>
    </div>
  
</nav>
    );
}

export default NavBar;