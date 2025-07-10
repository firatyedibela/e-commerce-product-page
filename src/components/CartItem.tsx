import { useCart } from '../context/CartContext';
import type { TCartItem } from '../types/cart-item';
import deleteIcon from '../assets/images/icon-delete.svg';

type CartItemProps = {
  item: TCartItem;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, getTotalItems } = useCart();

  return (
    <div className="flex gap-4 py-[1.5px]">
      <div className="flex gap-4">
        <img
          className="w-[50px] h-[50px] rounded-[4px]"
          src={item.image}
          alt={`Thumbnail image of product ${item.name}`}
        />
        <div className="flex flex-col">
          <span className="capitalize text-grey-500">{item.name}</span>
          <div className="flex gap-2">
            <span className="text-preset-3 font-normal text-grey-500 self-start">
              ${item.finalPrice.toFixed(2)} x {getTotalItems()}
            </span>
            <span className="font-[16px] font-bold leading-[21px]  self-end">
              ${(item.finalPrice * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => removeFromCart(item.name)}
          className="cursor-pointer"
        >
          <img src={deleteIcon} alt="Remove from cart icon" />
        </button>
      </div>
    </div>
  );
};
