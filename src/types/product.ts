export type TImage = {
  original: string;
  thumbnail: string;
};

export type TProduct = {
  images: TImage[];
  manufacturer: string;
  name: string;
  description: string;
  price: number;
  discount: number;
};
