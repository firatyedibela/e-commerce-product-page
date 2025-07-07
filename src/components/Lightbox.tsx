/* 
  1- Import Swiper and SwiperSlider from react/swiper
      - We're gonna need two separate Swipers (one for main and one for thumbnails)
  3- Render main swiper
  4- Render thumbnail swiper
  5- Connect them together
  6- Create a state to store the thumbnail swiper instance (Type Swiper)
  7- Intialize the state with onSwiper={setThumbnailSwiper}
  8- Pass the thumbnail swiper instance to main swiper via thumbs={{swiper: thumbsSwiper}}
  9- Import and register Thumbs module to main swiper via modules prop for all of that to work
*/

import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Thumbnail } from './Thumbnail';
import type { TImage } from '../types/product';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';

import { NavButton } from './NavButton';

type LightboxProps = {
  images: TImage[]; // Array of images to display
  currentImageIndex: number; // Index of initially selected image from parent
  onClose: () => void; // Callback to close the lightbox
};

export const Lightbox = ({
  images,
  currentImageIndex,
  onClose,
}: LightboxProps) => {
  // Holds the thumbnail Swiper instance, needed for syncing 2 swipers
  const [thumbnailSwiper, setThumbnailSwiper] = useState<SwiperType | null>(
    null
  );

  // Local state to track the currently selected image index inside lightbox
  // Initialized from prop to reflect clicked image from ImageGallery(Parent Component)
  const [selectedImageIndex, setSelectedImageIndex] =
    useState<number>(currentImageIndex);

  // Reference to the dom node in which we render our Lightbox using portal
  const lightboxRoot = document.getElementById('lightbox-root');

  // Handler when a thumbnail is clicked, we only need this for thumbnail's isSelected prop so we can apply active styles
  const onThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return createPortal(
    // Overlay covers the entire screen, clicking it (outside the lightbox) closes the lightbox
    <div
      className="overlay fixed inset-0 bg-lightbox-overlay"
      onClick={onClose}
    >
      {/* Lightbox container, stop propagation otherwise clicks close lightbox */}
      <div className="w-[550px] relative" onClick={(e) => e.stopPropagation()}>
        {/* This is main swiper, displaying large(original) images */}
        <Swiper
          // When swiper is initialized, jump immediately to the selected image we get from parent, set speed to 0 to prevent animation
          onSwiper={(swiper) => {
            swiper.slideTo(currentImageIndex, 0);
          }}
          // Updating selectedImageIndex when slides change to keep Thumbnail styles synced even when we use navigation buttons
          onSlideChange={(swiper) => {
            setSelectedImageIndex(swiper.activeIndex);
          }}
          navigation={{
            nextEl: '.lightboxNext',
            prevEl: '.lightboxPrev',
          }}
          slidesPerView={1}
          modules={[Navigation, Thumbs]} // Register necessary swiper modules
          thumbs={{ swiper: thumbnailSwiper }} // Connect thumbnail swiper
        >
          {images.map((img) => (
            <SwiperSlide>
              <img src={img.original} alt=""></img>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail swiper to display all thumbnails in a row */}
        <Swiper onSwiper={setThumbnailSwiper} slidesPerView={images.length}>
          {images.map((img, idx) => (
            <SwiperSlide>
              <Thumbnail
                image={img.thumbnail}
                altText=""
                index={idx}
                isSelected={idx === selectedImageIndex} // For highlighting active thumbnail
                onClick={onThumbnailClick} // Again not for control, since control is handled by Swiper connection, but for highlighting
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <NavButton direction="prev" className="lightboxPrev" />
        <NavButton direction="next" className="lightboxNext" />
      </div>
    </div>,
    lightboxRoot as Element
  );
};
