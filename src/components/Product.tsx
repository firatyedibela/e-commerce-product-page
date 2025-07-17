import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MobileSwiper } from './MobileSwiper';
import { ImageGallery } from './ImageGallery';
import type { TProduct } from '../types/product';
import { getDiscountedPrice } from '../utils/getDiscountedPrice';
import { QuantityBox } from './QuantityBox';
import cartIcon from '../assets/images/icon-cart.svg';
import { MoonLoader } from 'react-spinners';
import clsx from 'clsx';

type ProductProps = {
  product: TProduct;
};

export const Product = ({ product }: ProductProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isAdding, setAdding] = useState<boolean>(false);
  const { cartItems, addToCart } = useCart();

  console.log(cartItems);

  const handleAddToCart = async () => {
    if (quantity <= 0) {
      return;
    }

    setAdding(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setAdding(false);

    addToCart({
      name: product.name,
      image: product.images[0].thumbnail,
      finalPrice: getDiscountedPrice(product.price, product.discount),
      quantity: quantity,
    });
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-col gap-6 md:gap-12 xl:flex-row xl:gap-[128px] xl:justify-center">
      {/* Mobile Image Swiper */}
      <MobileSwiper className="xl:hidden" images={product.images} />

      {/* Desktop Image Gallery */}
      <ImageGallery
        className="hidden xl:flex xl:w-[448px]"
        images={product.images}
        originalImageAltText={`Original image of ${product.name}`}
        thumbnailAltText={`Thumbnail of ${product.name}`}
      />

      {/* Product Details Section */}
      <div className="px-6 xs:px-0 flex flex-col gap-8 md:gap-6 xl:justify-center xl:w-[445px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-preset-6 uppercase text-grey-500 md:text-[13px] md:leading-auto">
            {product.manufacturer}{' '}
          </p>
          <h1 className="text-preset-2 capitalize md:text-[44px] md:leading-[48px] xl:mb-2">
            {product.name}{' '}
          </h1>
          <p className="text-preset-4 text-grey-500 md:text-[16px] xl:mb-2">
            {product.description}{' '}
          </p>
        </div>

        {/* Pricing Details Section */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:gap-2 xl:mb-2">
          <div className="flex gap-4">
            <span className="text-preset-2">
              ${getDiscountedPrice(product.price, product.discount).toFixed(2)}
            </span>
            <span className="text-preset-3 text-white bg-grey-950 self-start px-[9.5px] rounded-md">
              {product.discount * 100}%
            </span>
          </div>
          <span className="text-preset-3 text-grey-500 line-through">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Cart Control Section */}
        <div className="flex flex-col gap-4 md:gap-2 xl:gap-4 md:flex-row md:justify-between">
          <QuantityBox
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdding}
            className={clsx(
              'w-full xl:w-[272px] py-4 flex items-center justify-center gap-4 button-primary shadow-2xl shadow-orange-500/50 hover:bg-orange-300 transition-all duration-150',
              isAdding && 'cursor-default'
            )}
          >
            {isAdding ? (
              <MoonLoader speedMultiplier={0.8} size={20} />
            ) : (
              <>
                <img
                  className="filter-grey-950"
                  src={cartIcon}
                  alt="Shopping cart icon"
                />
                <span className="text-grey-950 leading-[26px]">
                  Add to cart
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
