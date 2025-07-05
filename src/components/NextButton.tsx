import nextIcon from '../assets/images/icon-next.svg';

export const NextButton = () => {
  return (
    <button className="w-14 h-14 bg-white rounded-full relative cursor-pointer">
      <img
        className="absolute top-1/2 right-1/2 translate-x-2/3 -translate-y-1/2"
        src={nextIcon}
        alt="Next icon"
      />
    </button>
  );
};
