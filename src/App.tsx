import { Header } from './components/Header';
import { Main } from './components/Main';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="max-w-[375px] md:max-w-[608px] xl:max-w-[1110px] m-auto pt-5 md:pt-7 md:gap-12 xl:gap-24 flex flex-col gap-6 font-main">
        <Header />
        <Main />
      </div>
    </CartProvider>
  );
}

export default App;
