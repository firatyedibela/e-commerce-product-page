import type { TRoutes } from '../types/routes';

type MenuDesktopProps = {
  routes: TRoutes;
};

export const MenuDesktop = ({ routes }: MenuDesktopProps) => {
  return (
    <ul className="hidden xl:flex items-center gap-8 text-preset-4 text-grey-500">
      {routes.map((route) => (
        <li key={route.name}>
          <a href={route.href}>{route.name}</a>
        </li>
      ))}
    </ul>
  );
};
