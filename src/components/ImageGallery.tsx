import { useState } from 'react';
import { clsx } from 'clsx';
import type { TImage } from '../types/product';
import { Thumbnail } from './Thumbnail';
import { Lightbox } from './Lightbox';

type ImageGalleryProps = {
  className: string;
  images: TImage[];
};

export const ImageGallery = ({ className, images }: ImageGalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightbox, setLightbox] = useState<boolean>(false);

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleLightboxClose = () => {
    setLightbox(false);
  };

  return (
    <div className={clsx(className, 'flex-col gap-8')}>
      {isLightbox && (
        <Lightbox
          images={images}
          currentImageIndex={activeImageIndex}
          onClose={handleLightboxClose}
        />
      )}
      <div>
        <img
          className="rounded-[15px]"
          src={images[activeImageIndex].original}
          alt=""
          onClick={() => setLightbox(true)}
        />
      </div>
      <div>
        <ul className="flex justify-between">
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
