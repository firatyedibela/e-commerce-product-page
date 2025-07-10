import { useState, createContext, useContext } from 'react';
import type { TCartItem } from '../types/cart-item';

type CartContextType = {
  cartItems: TCartItem[];
  addToCart: (newItem: TCartItem) => void;
  removeFromCart: (itemName: string) => void;
};

const DefaultCartContext = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<CartContextType>(DefaultCartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  const addToCart = (newItem: TCartItem) => {
    const itemIdx = cartItems.findIndex((item) => item.name === newItem.name);

    if (itemIdx !== -1) {
      cartItems[itemIdx].quantity += newItem.quantity;
    } else {
      setCartItems((prev) => [...prev, newItem]);
    }
  };

  const removeFromCart = (itemName: string) => {
    console.log('Removing from cart: ' + itemName);
  };

  return (
    <CartContext value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
