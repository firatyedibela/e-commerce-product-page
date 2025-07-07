import { clsx } from 'clsx';

type NavButtonProps = {
  direction: string;
  customStyles?: string;
};

export const NavButton = ({ direction, customStyles }: NavButtonProps) => {
  const next = direction === 'next';
  const baseStyles =
    'nav-btn w-10 h-10 bg-white rounded-full absolute top-1/2 -translate-y-3/4 z-5 cursor-pointer';
  const directionalStyles = next ? 'next right-4' : 'prev left-4';

  return (
    <button
      className={clsx(baseStyles, directionalStyles, customStyles)}
      type="button"
    >
      <NavSvg next={next} />
    </button>
  );
};

type NavSvgProps = {
  next: boolean;
};

const NavSvg = ({ next }: NavSvgProps) => {
  return next ? (
    <svg
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.28571L7.71429 6.99999L2 12.7143"
        stroke="#1D2026"
        strokeWidth="3"
      />
    </svg>
  ) : (
    <svg
      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.85718 1.28571L2.14289 6.99999L7.85718 12.7143"
        stroke="#1D2026"
        strokeWidth="3"
      />
    </svg>
  );
};
