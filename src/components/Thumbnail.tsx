import clsx from 'clsx';

type ThumbnailProps = {
  image: string;
  altText: string;
  isSelected: boolean;
  onClick: (index: number) => void;
  index: number;
};

export const Thumbnail = ({
  image,
  altText,
  isSelected,
  onClick,
  index,
}: ThumbnailProps) => {
  const baseStyles =
    'w-22 h-22 cursor-pointer rounded-[10px] overflow-hidden box-content border-2';

  const handleClick = () => {
    onClick(index);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        baseStyles,
        isSelected ? 'border-orange-500' : 'border-transparent'
      )}
    >
      <span className="block bg-white">
        <img
          className={clsx(
            'transition-all duration-150',
            isSelected ? 'opacity-35' : 'hover:opacity-50'
          )}
          src={image}
          alt={altText}
        />
      </span>
    </button>
  );
};
