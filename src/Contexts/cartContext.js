import { createContext, useState, useContext } from "react";

//Creacion del context Carrito
export const CartContext = createContext([]);

// Custom Hook para reemplazar el UseContext
export const useCart = () => useContext(CartContext);

// Decalaracion del Custom Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Funcion para agregar Q items al carrito
  const addItem = (item, quantity) => {
    const existe = cart.filter((x) => x.id === item.id).length > 0;

    if (existe === false) {
      const ItemCart = { ...item, quantity };
      setCart([...cart, ItemCart]);
    }
  };

  // Funcion para remover todos los incorporados de un item al carrito
  const removeItem = (itemId) => {
    setCart(cart.filter((x) => x.id !== itemId));
  };

  //Funcion para modificar la cantidad de un item del carrito
  const itemUpdate = (item, Q) => {
    const indexItem = cart.findIndex((x) => x.id === item.id);
    cart[indexItem].quantity = Q;
    setCart(cart);

    console.log(cart);
  };

  //Funcion para vaciar el carrito
  const clear = () => {
    setCart([]);
  };
  // Funcion para verificar si un item ya fue agregado al carrito
  const isInCart = (item) => {
    const existe = cart.filter((x) => x.id === item.id).length > 0;

    return existe ? true : false;
  };

  // if Cart.some(CartItem => )};

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, itemUpdate }}
    >
      {children}
    </CartContext.Provider>
  );
};
