import { useState } from 'react';
import type { TRoutes } from '../types/routes';

type MenuDesktopProps = {
  routes: TRoutes;
};

export const MenuDesktop = ({ routes }: MenuDesktopProps) => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  return (
    <ul className="hidden xl:flex items-center gap-8 text-preset-4 text-grey-500">
      {routes.map((route) => (
        <li key={route.name}>
          <a
            onClick={() => setActiveRoute(route.name)}
            className={`${
              route.name === activeRoute && 'text-grey-950'
            } capitalize relative hover:text-grey-950`}
            href={route.href}
          >
            {route.name}
            <div
              className={`${
                route.name === activeRoute ? 'flex' : 'hidden'
              } w-full h-[4px] top-16 bg-orange-500 absolute`}
            ></div>
          </a>
        </li>
      ))}
    </ul>
  );
};
