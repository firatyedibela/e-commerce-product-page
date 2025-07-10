import iconMinus from '../assets/images/icon-minus.svg';
import iconPlus from '../assets/images/icon-plus.svg';

type QuantityBoxProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const QuantityBox = ({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityBoxProps) => {
  return (
    <div className="w-full bg-grey-50 px-3 py-[14px] rounded-[10px] flex justify-between items-center xl:flex-1">
      <button
        type="button"
        aria-label="Decrease item quantity by 1"
        className="quantity-btn cursor-pointer px-2 py-2"
        onClick={onDecrease}
      >
        <img src={iconMinus} alt="Minus icon" />
      </button>
      <span
        aria-live="polite"
        aria-label="Item quantity"
        className="text-preset-3 text-grey-950"
      >
        {quantity}
      </span>
      <button
        type="button"
        aria-label="Increase item quantity by 1"
        className="quantity-btn cursor-pointer px-2 py-2"
        onClick={onIncrease}
      >
        <img src={iconPlus} alt="Plus icon" />
      </button>
    </div>
  );
};
