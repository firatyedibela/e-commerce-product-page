import { useState } from 'react';
import cart from '../assets/images/icon-cart.svg';
import { product } from '../data/product';
import deleteIcon from '../assets/images/icon-delete.svg';

export const Cart = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleCartClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <button onClick={handleCartClick} className="cursor-pointer">
        <img src={cart} alt="Shopping cart icon" />
      </button>
      {isOpen && (
        <div className="w-[360px] bg-white rounded-[10px] shadow-2xl absolute top-[57px] left-2 md:top-[66px] md:-translate-x-1/2 py-6 flex flex-col gap-6">
          <div className="px-3">
            <span className="text-preset-3 text-grey-950">Cart</span>
          </div>
          <div className="h-[1px] w-full bg-grey-100"></div>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-4 py-[1.5px]">
              <div className="flex gap-4">
                <img
                  className="w-[50px] h-[50px] rounded-[4px]"
                  src={product.images[0].thumbnail}
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="capitalize text-grey-500">
                    {product.name}
                  </span>
                  <div className="flex gap-2">
                    <span className="text-preset-3 font-normal text-grey-500 self-start">
                      ${product.price.toFixed(2)} x 3
                    </span>
                    <span className="font-[16px] font-bold leading-[21px]  self-end">
                      ${(product.price * 3).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button type="button" className="cursor-pointer">
                  <img src={deleteIcon} alt="Remove from cart icon" />
                </button>
              </div>
            </div>
            <button className="w-[312px] button-primary py-[15px]">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
