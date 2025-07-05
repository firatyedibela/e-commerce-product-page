import previousIcon from '../assets/images/icon-previous.svg';

export const PrevButton = () => {
  return (
    <button className="w-14 h-14 bg-white rounded-full relative cursor-pointer">
      <img
        className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2"
        src={previousIcon}
        alt="Next icon"
      />
    </button>
  );
};
