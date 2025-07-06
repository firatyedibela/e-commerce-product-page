import { Product } from './Product';
import { product } from '../data/product';

export const Main = () => {
  return (
    <main className="pb-20">
      <Product product={product} />
    </main>
  );
};
