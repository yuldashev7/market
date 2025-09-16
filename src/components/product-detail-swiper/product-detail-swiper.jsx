import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const ProductDetailSwiper = () => {
  return (
    <div className="w-full">
      <div className="lg:hidden sm:pt-2 sm:pb-[20px] md:pt-[10px] md:pb-[20px]">
        <Swiper
          spaceBetween={10}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2 },
            580: { slidesPerView: 4 },
            960: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide>
            <NavLink className="block text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Смартфоны и планшеты
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink className="block text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Ноутбуки, планшеты и компьютеры
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink className="block text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Техника для дома
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink className="block text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Игры и развлечения
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink className="block text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Телевизоры, Аудио-видео, Hi-Fi
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetailSwiper;
