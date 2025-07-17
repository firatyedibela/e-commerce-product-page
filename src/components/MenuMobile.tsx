import { useState } from 'react';
import type { TRoutes } from '../types/routes';
import hamburgerIcon from '../assets/images/icon-menu.svg';
import closeIcon from '../assets/images/icon-close.svg';
import { AnimatePresence, motion, spring } from 'motion/react';

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

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              {...backdropAnimation}
              className="fixed inset-0 bg-black opacity-50 z-20"
              onClick={() => setOpen(false)}
            ></motion.div>

            {/* MENU */}
            <motion.div
              {...menuAnimation}
              className="fixed left-0 top-0 bottom-0 w-[250px] pl-6 bg-white z-20"
            >
              <ul className="flex flex-col gap-6 mt-[90px]">
                {routes.map((route, idx) => {
                  const delay = 0.1 + idx / 20;
                  const animationProps = {
                    ...listItemAnimation,
                    transition: { ...listItemAnimation.transition, delay },
                  };

                  return (
                    <motion.li {...animationProps} key={route.name}>
                      <a
                        className="capitalize text-grey-950 text-xl font-bold leading-[26px]"
                        onClick={() => setOpen(false)}
                        href={route.href}
                      >
                        {route.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const backdropAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 0.5 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

const menuAnimation = {
  initial: { opacity: 0, left: '-60%' },
  animate: { opacity: 1, left: 0 },
  exit: { opacity: 0, left: '-60%' },
  transition: { duration: 0.2 },
};

const listItemAnimation = {
  initial: { scale: 0, opacity: 0, x: '-150px' },
  animate: { scale: 1, opacity: 1, x: '0' },
  transition: {
    type: spring,
    stiffness: 260,
    damping: 22,
  },
};
