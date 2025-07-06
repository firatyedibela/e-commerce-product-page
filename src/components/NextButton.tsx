import nextIcon from '../assets/images/icon-next.svg';

export const NextButton = () => {
  return (
    <button
      role="button"
      className="cursor-pointer absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2"
    >
      <svg
        width="11"
        height="14"
        viewBox="0 0 11 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_6102_4)">
          <path
            d="M2.5 1.28571L8.21429 6.99999L2.5 12.7143"
            stroke="#1D2026"
            stroke-width="3"
          />
        </g>
        <defs>
          <clipPath id="clip0_6102_4">
            <rect
              width="10"
              height="14"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};
