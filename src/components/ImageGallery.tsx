import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { clsx } from 'clsx';
import type { TImage } from '../types/product';
import { Thumbnail } from './Thumbnail';
import { Lightbox } from './Lightbox';

type ImageGalleryProps = {
  className: string;
  images: TImage[];
  originalImageAltText: string;
  thumbnailAltText: string;
};

export const ImageGallery = ({
  className,
  images,
  originalImageAltText,
  thumbnailAltText,
}: ImageGalleryProps) => {
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
      <AnimatePresence>
        {isLightbox && (
          <Lightbox
            images={images}
            currentImageIndex={activeImageIndex}
            onClose={handleLightboxClose}
          />
        )}
      </AnimatePresence>

      <div>
        <img
          className="rounded-[15px] cursor-pointer hover:shadow-xl transition-all duration-300"
          src={images[activeImageIndex].original}
          alt={originalImageAltText}
          onClick={() => setLightbox(true)}
        />
      </div>
      <div>
        <ul className="flex justify-between">
          {images.map((img, idx) => (
            <li key={img.original}>
              <Thumbnail
                image={img.thumbnail}
                altText={thumbnailAltText}
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
