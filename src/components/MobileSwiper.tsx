import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { NavButton } from './NavButton';
import type { TImage } from '../types/product';

type MobileSwiperProps = {
  images: TImage[];
  className?: string;
};

export const MobileSwiper = ({ images, className }: MobileSwiperProps) => {
  return (
    <div className="relative xs:rounded-[15px] xs:overflow-hidden">
      <Swiper
        navigation={{
          nextEl: '.next',
          prevEl: '.prev',
        }}
        modules={[Navigation, A11y]}
        slidesPerView={1}
      >
        {images.map((img) => (
          <SwiperSlide>
            <img
              className={`w-full h-[300px] object-cover object-top md:h-[290px] md:object-${img.tabletPosition} ${className}`}
              src={img.original}
            ></img>
          </SwiperSlide>
        ))}
        <NavButton direction="prev" />
        <NavButton direction="next" />
      </Swiper>
    </div>
  );
};
