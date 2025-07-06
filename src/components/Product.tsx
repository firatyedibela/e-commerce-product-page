import { MobileSwiper } from './MobileSwiper';
import type { TProduct } from '../types/product';
import { getDiscountedPrice } from '../utils/getDiscountedPrice';
import { QuantityBox } from './QuantityBox';
import cartIcon from '../assets/images/icon-cart.svg';

type ProductProps = {
  product: TProduct;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Image Swiper */}
      <MobileSwiper images={product.images.map((image) => image.original)} />

      {/* Product Details Section */}
      <div className="px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p>{product.manufacturer} </p>
          <h1>{product.name} </h1>
          <p>{product.description} </p>
        </div>

        {/* Pricing Details Section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <span>
              ${getDiscountedPrice(product.price, product.discount).toFixed(2)}
            </span>
            <span>{product.discount * 100}%</span>
          </div>
          <span>${product.price.toFixed(2)}</span>
        </div>

        {/* Cart Control Section */}
        <div className="flex flex-col gap-4">
          <QuantityBox />
          <button
            type="button"
            className="w-full py-4 flex items-center justify-center gap-4 button-primary "
          >
            <img src={cartIcon} alt="Shopping cart icon" />
            <span className="leading-[26px]">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
