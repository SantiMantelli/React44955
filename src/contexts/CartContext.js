import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

const initialState = {
  addItem: item => {},
  clearCart: () => {},
  isInCart: id => {},
  productsInCart: [],
  totalAmount: 0,
  removeItem: id => {},
  confirmCheckout: () => {},
  decreaseQuantity: id => {},
  increaseQuantity: id => {},
  isFinished: false,
}

const position = toast.POSITION.BOTTOM_LEFT

const CartContext = createContext({ ...initialState });
const CartContextProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const amount = productsInCart
      .map(item => parseInt(item.price) * item.quantity)
      .reduce((partial, acum) => partial + acum, 0);
    
    setTotalAmount(amount)
  }, [productsInCart]);

  function addItem(item) {
    const isAlreadyAdded = isInCart(item.id);
    if (isAlreadyAdded) {
      toast.warning("El producto ya existe en el carrito", { position });
      return;
    }

    setProductsInCart(prev => {
      toast.success("Producto agregado", { position });
      return prev.concat({
        ...item,
        quantity: 1,
        subtotal: item.price,
      });
    });
  }

  function clearCart() {
    setProductsInCart([]);
    setTotalAmount(0);
  }

  function removeItem(id) {
    toast.info("Producto eliminado", { position });
    setProductsInCart(prev => prev.filter(p => p.id !== id));
  }

  function isInCart(id) {
    return Boolean(productsInCart.find(p => p.id === id));
  }

  function confirmCheckout() {
    clearCart();
    setIsFinished(true);
    setTimeout(() => {
      setIsFinished(false)
    }, 5000);
    toast.success("Gracias por su compra", { position });
  }

  function decreaseQuantity(itemId) {
    const product = productsInCart.find(p => p.id === itemId);
    if (product.quantity === 1) return;

    setProductsInCart(prev => prev.map(p => p.id === itemId
      ? {
        ...p,
        quantity: p.quantity - 1,
        subtotal: (p.quantity - 1) * p.price,
      }
      : p 
    ));
  }

  function increaseQuantity(itemId) {
    setProductsInCart(prev => prev.map(p => p.id === itemId
      ? {
        ...p,
        quantity: p.quantity + 1,
        subtotal: (p.quantity + 1) * p.price,
      }
      : p
    ));
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        clearCart,
        isInCart,
        productsInCart,
        totalAmount,
        removeItem,
        confirmCheckout,
        decreaseQuantity,
        increaseQuantity,
        isFinished,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export {
  CartContext,
  CartContextProvider
}