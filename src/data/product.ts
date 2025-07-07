import type { TProduct } from '../types/product';

import product1Thumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import product1 from '../assets/images/image-product-1.jpg';
import product2Thumbnail from '../assets/images/image-product-2-thumbnail.jpg';
import product2 from '../assets/images/image-product-2.jpg';
import product3Thumbnail from '../assets/images/image-product-3-thumbnail.jpg';
import product3 from '../assets/images/image-product-3.jpg';
import product4Thumbnail from '../assets/images/image-product-4-thumbnail.jpg';
import product4 from '../assets/images/image-product-4.jpg';

export const product: TProduct = {
  images: [
    {
      original: product1,
      thumbnail: product1Thumbnail,
    },
    {
      original: product2,
      thumbnail: product2Thumbnail,
    },
    {
      original: product3,
      thumbnail: product3Thumbnail,
    },
    {
      original: product4,
      thumbnail: product4Thumbnail,
    },
  ],
  manufacturer: 'sneaker company',
  name: 'fall limited edition sneakers',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  price: 250,
  discount: 0.5,
};
