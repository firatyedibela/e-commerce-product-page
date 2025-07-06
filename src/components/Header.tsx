import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import { routes } from '../data/routes';
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import cart from '../assets/images/icon-cart.svg';

export const Header = () => {
  return (
    <header className="px-6 xs:px-0 xl:max-w-full flex justify-between items-center md:pb-8 md:border-b md:border-grey-100">
      <div className="flex flex-row-reverse xl:flex-row items-start gap-4 xl:gap-16 justify-end">
        <img className="xl:self-end" src={logo} alt="Sneakers website logo" />
        <nav>
          <MenuDesktop routes={routes} />
          <MenuMobile routes={routes} />
        </nav>
      </div>
      <div className="flex gap-6 md:gap-12">
        <button className="cursor-pointer">
          <img src={cart} alt="Shopping cart icon" />
        </button>
        <button className="cursor-pointer">
          <img
            className="w-6 h-6 md:w-[50px] md:h-[50px]"
            src={avatar}
            alt="Avatar icon"
          />
        </button>
      </div>
    </header>
  );
};
