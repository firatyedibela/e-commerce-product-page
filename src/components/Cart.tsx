import { useState } from 'react';
import { CartItem } from './CartItem';
import { useCart } from '../context/CartContext';
import cart from '../assets/images/icon-cart.svg';
import { useClickAway } from '@uidotdev/usehooks';
import { AnimatePresence, motion } from 'motion/react';

export const Cart = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { cartItems, getTotalItems } = useCart();

  const ref = useClickAway<HTMLDivElement>(() => {
    setOpen(false);
  });

  const handleCartClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div ref={ref} className="flex">
      <button
        type="button"
        onClick={handleCartClick}
        className="cursor-pointer relative"
      >
        <img className="cart-icon" src={cart} alt="Shopping cart icon" />
        {cartItems.length > 0 && (
          <div className="w-[19px] h-[13px] rounded-[6.5px] bg-orange-500 flex items-center justify-center absolute -top-1 -right-1">
            <span className="font-bold text-[10px] text-white">
              {getTotalItems()}
            </span>
          </div>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.5, y: -70, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.5, y: -70, opacity: 0 }}
            className="w-[360px] h-[256px] bg-white rounded-[10px] py-6 shadow-2xl absolute top-[57px] left-2 md:top-[66px] md:-translate-x-1/2 flex flex-col gap-6"
          >
            <div className="px-3">
              <span className="text-preset-3 text-grey-950">Cart</span>
            </div>
            <div className="h-[1px] w-full bg-grey-100"></div>
            <div className="relative h-full">
              {cartItems.length > 0 ? (
                <div className="flex flex-col gap-6 items-center">
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.name}>
                        <CartItem item={item} />
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-[312px] button-primary py-[15px] hover:bg-orange-300 transition-all duration-150"
                  >
                    Checkout
                  </button>
                </div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-preset-3 text-grey-500"
                >
                  Your cart is empty.
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
