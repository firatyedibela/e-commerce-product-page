import clsx from 'clsx';

type ThumbnailProps = {
  image: string;
  altText: string;
  isSelected: boolean;
};

export const Thumbnail = ({ image, altText, isSelected }: ThumbnailProps) => {
  const baseStyles =
    'w-22 h-22 cursor-pointer rounded-[10px] overflow-hidden box-content border-2  ';

  return (
    <button
      className={clsx(
        baseStyles,
        isSelected ? 'border-orange-500' : 'border-transparent'
      )}
    >
      <img
        className={clsx(
          'transition-all duration-150',
          isSelected ? 'opacity-25' : 'hover:opacity-50'
        )}
        src={image}
        alt={altText}
      />
    </button>
  );
};
