import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import Itemlistcontainer from './components/ItemListContainer';

const name = 'Gabriela'
const contacto = 'lacurtiembreautos@hotmail.com'

function App() {
  return (
    <div className="App">
      <NavBar className="App-header">
        <CartWidget/>
      </NavBar>
      <Itemlistcontainer name={name} contacto={contacto} />
    </div>
  );
}

export default App;
