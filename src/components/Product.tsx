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
      <div className="px-6 xs:px-0 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-preset-6 uppercase text-grey-500">
            {product.manufacturer}{' '}
          </p>
          <h1 className="text-preset-2 capitalize">{product.name} </h1>
          <p className="text-preset-4 text-grey-500">{product.description} </p>
        </div>

        {/* Pricing Details Section */}
        <div className="flex justify-between items-center">
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
        <div className="flex flex-col gap-4">
          <QuantityBox />
          <button
            type="button"
            className="w-full py-4 flex items-center justify-center gap-4 button-primary shadow-2xl shadow-orange-500/50"
          >
            <img
              className="filter-grey-950"
              src={cartIcon}
              alt="Shopping cart icon"
            />
            <span className="text-grey-950 leading-[26px]">Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
