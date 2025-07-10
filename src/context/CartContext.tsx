import { useState, createContext, useContext } from 'react';
import type { TCartItem } from '../types/cart-item';

type CartContextType = {
  cartItems: TCartItem[];
  addToCart: (newItem: TCartItem) => void;
  removeFromCart: (itemName: string) => void;
  getTotalItems: () => number;
};

const DefaultCartContext = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalItems: () => 0,
};

const CartContext = createContext<CartContextType>(DefaultCartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  const addToCart = (newItem: TCartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.name === newItem.name);

      if (itemExists) {
        return prevItems.map((item) =>
          item.name === newItem.name
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemName: string) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.name !== itemName);
    });
  };

  const getTotalItems = (): number => {
    return cartItems.reduce((total, current) => total + current.quantity, 0);
  };

  return (
    <CartContext
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
      }}
    >
      {children}
    </CartContext>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
