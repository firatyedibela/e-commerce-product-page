import { useState } from 'react';
import type { TRoutes } from '../types/routes';
import { AnimatePresence, motion } from 'motion/react';

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
            <AnimatePresence>
              {route.name === activeRoute && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="w-full h-[4px] top-16 bg-orange-500 absolute"
                ></motion.div>
              )}
            </AnimatePresence>
          </a>
        </li>
      ))}
    </ul>
  );
};
