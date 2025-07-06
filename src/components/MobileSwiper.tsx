import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import type { TImage } from '../types/product';

type MobileSwiperProps = {
  images: TImage[];
};

export const MobileSwiper = ({ images }: MobileSwiperProps) => {
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
              className={`w-full h-[300px] object-cover object-top md:h-[290px] md:object-${img.tabletPosition}`}
              src={img.original}
            ></img>
          </SwiperSlide>
        ))}
        <div className="w-10 h-10 bg-white rounded-full prev absolute top-1/2 -translate-y-3/4 left-4 z-5">
          <PrevButton />
        </div>
        <div className="w-10 h-10 bg-white rounded-full next absolute top-1/2 -translate-y-3/4 right-4 z-5">
          <NextButton />
        </div>
      </Swiper>
    </div>
  );
};
