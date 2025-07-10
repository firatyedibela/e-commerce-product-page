import { useState, createContext, useContext } from 'react';
import type { CartItem } from '../types/cart-item';

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCart: (itemName: string) => void;
};

const DefaultCartContext = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<CartContextType>(DefaultCartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    console.log('New item: ' + newItem);
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
