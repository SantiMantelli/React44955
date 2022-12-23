import { Layout } from './Layout';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
  const {
    productsInCart,
    totalAmount,
    removeItem,
    confirmCheckout,
    decreaseQuantity,
    increaseQuantity,
    isFinished,
  } = useContext(CartContext)

  return ( 
    <Layout>
      <div className='container'>
        {productsInCart.length ? (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map(p => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => decreaseQuantity(p.id)}>-</button>
                    <span>{p.quantity}</span>
                    <button onClick={() => increaseQuantity(p.id)}>+</button>
                  </td>
                  <td>{p.price}</td>
                  <td>{p.subtotal}</td>
                  <td>
                    <button className='btn btn-sm btn-danger' onClick={() => removeItem(p.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} style={{ textAlign: 'right'}}>Total</td>
                <td style={{ fontWeight: 'bold' }}>{totalAmount}</td>
                <td>
                <button className='btn btn-sm btn-success' onClick={() => confirmCheckout()}>Confirmar Compra</button>
                </td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div className="alert alert-info mt-4" role="alert">
            Carrito vacio
          </div>
        )}

        {isFinished && (
          <div className="alert alert-success mt-4" role="alert">
            Gracias por su compra
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;