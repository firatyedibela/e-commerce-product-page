import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import { routes } from '../routes';
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import cart from '../assets/images/icon-cart.svg';

export const Header = () => {
  return (
    <header className="m-auto max-w-[327px] lg:max-w-full mt-5 mb-6 flex justify-between">
      <div className="flex flex-row-reverse lg:flex-row items-start gap-4 justify-end">
        <img src={logo} alt="Sneakers website logo" />
        <nav>
          <MenuDesktop routes={routes} />
          <MenuMobile routes={routes} />
        </nav>
      </div>
      <div className="flex gap-6">
        <button className="cursor-pointer">
          <img src={cart} alt="Shopping cart icon" />
        </button>
        <button className="cursor-pointer">
          <img className="w-6 h-6" src={avatar} alt="Avatar icon" />
        </button>
      </div>
    </header>
  );
};
