import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';
import { Cart } from './Cart';
import { routes } from '../data/routes';
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';

export const Header = () => {
  return (
    <header className="px-6 xs:px-0 xl:max-w-full flex justify-between items-center md:pb-8 md:border-b md:border-grey-100 relative z-10">
      <div className="flex flex-row-reverse xl:flex-row items-start gap-4 xl:gap-16 justify-end">
        <img className="xl:self-end" src={logo} alt="Sneakers website logo" />
        <nav>
          <MenuDesktop routes={routes} />
          <MenuMobile routes={routes} />
        </nav>
      </div>
      <div className="flex gap-6 md:gap-12 items-center md:relative">
        <Cart />
        <button type="button" className="cursor-pointer">
          <img
            className="w-6 h-6 md:w-[50px] md:h-[50px] border-2 rounded-full border-transparent hover:border-orange-500 transition-all duration-150"
            src={avatar}
            alt="Avatar icon"
          />
        </button>
      </div>
    </header>
  );
};
