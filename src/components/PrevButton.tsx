import previousIcon from '../assets/images/icon-previous.svg';

export const PrevButton = () => {
  return (
    <button
      role="button"
      className="cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.85718 1.28571L2.14289 6.99999L7.85718 12.7143"
          stroke="#1D2026"
          stroke-width="3"
        />
      </svg>
    </button>
  );
};
