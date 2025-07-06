export type TProduct = {
  images: {
    original: string;
    thumbnail: string;
  }[];
  manufacturer: string;
  name: string;
  description: string;
  price: number;
  discount: number;
};
