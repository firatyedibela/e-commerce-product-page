type ThumbnailProps = {
  image: string;
  altText: string;
};

export const Thumbnail = ({ image, altText }: ThumbnailProps) => {
  return (
    <div className="w-25 h-25 flex items-center justify-center">
      <button className="w-22 h-22 cursor-pointer rounded-[10px] overflow-hidden box-content border-2 border-transparent transition-all duration-150">
        <img
          className="hover:opacity-50 transition-all duration-150 "
          src={image}
          alt={altText}
        />
      </button>
    </div>
  );
};
