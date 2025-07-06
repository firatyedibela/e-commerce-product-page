import { useState } from 'react';
import type { TRoutes } from '../types/routes';
import hamburgerIcon from '../assets/images/icon-menu.svg';
import closeIcon from '../assets/images/icon-close.svg';

type MenuMobileProps = {
  routes: TRoutes;
};

export const MenuMobile = ({ routes }: MenuMobileProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="xl:hidden flex items-end h-[20px]">
      <button className="cursor-pointer z-21" onClick={() => setOpen(!isOpen)}>
        <img src={!isOpen ? hamburgerIcon : closeIcon} alt="Menu icon" />
      </button>

      {isOpen && (
        <>
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black opacity-50 z-20"
            onClick={() => setOpen(false)}
          ></div>

          {/* MENU */}
          <div className="absolute left-0 top-0 bottom-0 w-[250px] pl-6 bg-white z-20">
            <ul className="flex flex-col gap-6 mt-[90px]">
              {routes.map((route) => (
                <li key={route.name}>
                  <a
                    className="capitalize text-grey-950 text-xl font-bold leading-[26px]"
                    onClick={() => setOpen(false)}
                    href={route.href}
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
