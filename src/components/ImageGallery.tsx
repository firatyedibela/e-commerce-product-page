import { useState } from 'react';
import { clsx } from 'clsx';
import type { TImage } from '../types/product';
import { Thumbnail } from './Thumbnail';

type ImageGalleryProps = {
  className: string;
  images: TImage[];
};

export const ImageGallery = ({ className, images }: ImageGalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  return (
    <div className={clsx(className, '')}>
      <div>
        <img src={images[activeImageIndex].original} alt="" />
      </div>
      <div>
        <ul className="flex gap-8">
          {images.map((img, idx) => (
            <li key={img.original}>
              <Thumbnail
                image={img.thumbnail}
                altText=""
                index={idx}
                isSelected={idx === activeImageIndex}
                onClick={handleThumbnailClick}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
