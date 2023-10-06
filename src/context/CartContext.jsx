import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const enCart = (id) => {
    return cart.find (productos => productos.id === id) ? true : false
  }

  const quitarDelCart = (id) => setCart(cart.filter(productos => productos.id !== id))

  const agregarAlCart = (item, quantity) => {
    if(enCart(item.id)){
      setCart(cart.map(productos => {return productos.id === item.id ? {...productos, quantity: productos.quantity + quantity} : productos}))
    }else{
        setCart([...cart, {...item, quantity}])
    }
  }

const precioTotal = () => {
  return cart.reduce ((prev, act) => prev + act.quantity * act.precio, 0)
}

const productosTotales = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)


  return (
    <CartContext.Provider value={{clearCart, enCart, quitarDelCart, agregarAlCart, precioTotal, productosTotales, cart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;