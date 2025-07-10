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
