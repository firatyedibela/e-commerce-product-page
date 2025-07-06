import type { TRoutes } from '../types/routes';

type MenuDesktopProps = {
  routes: TRoutes;
};

export const MenuDesktop = ({ routes }: MenuDesktopProps) => {
  return (
    <ul className="hidden lg:flex items-center gap-8">
      {routes.map((route) => (
        <li key={route.name}>
          <a href={route.href}>{route.name}</a>
        </li>
      ))}
    </ul>
  );
};
