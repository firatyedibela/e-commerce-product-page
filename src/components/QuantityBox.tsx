import iconMinus from '../assets/images/icon-minus.svg';
import iconPlus from '../assets/images/icon-plus.svg';

export const QuantityBox = () => {
  return (
    <div className="bg-grey-50 px-3 py-[14px] rounded-[10px] flex justify-between items-center">
      <button type="button" className="cursor-pointer px-2 py-2">
        <img src={iconMinus} alt="Minus icon" />
      </button>
      <span className="text-preset-3 text-grey-950">0</span>
      <button type="button" className="cursor-pointer px-2 py-2">
        <img src={iconPlus} alt="Plus icon" />
      </button>
    </div>
  );
};
