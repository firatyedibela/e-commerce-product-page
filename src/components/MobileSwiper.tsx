import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type MobileSwiperProps = {
  images: string[];
};

export const MobileSwiper = ({ images }: MobileSwiperProps) => {
  return (
    <div className="relative">
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
              className="w-full h-[300px] object-cover md:h-[290px] md:object-[50%_65%]"
              src={img}
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
