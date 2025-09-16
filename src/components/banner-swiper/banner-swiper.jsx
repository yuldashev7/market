import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getSwiper } from './query/getSwiper';
import SwiperRightArrow from '../../assets/icons/swiper-right-arrow';
import SwiperLeftArrow from '../../assets/icons/swiper-left-arrwow';

const BannerSwiper = () => {
  const { data } = getSwiper();

  return (
    <div className="relative sm:mt-[10px]">
      <button className="custom-prev absolute top-1/2 left-2 z-50 -translate-y-1/2 bg-white p-2 rounded-[50%] shadow text-black">
        <SwiperLeftArrow className="sm:w-[10px] md:w-[12px] lg:w-[18px]" />
      </button>
      <button className="custom-next absolute top-1/2 sm:right-2 lg:right-6 z-50 -translate-y-1/2 bg-white p-2 rounded-[50%] shadow text-black">
        <SwiperRightArrow className="sm:w-[10px] md:w-[12px] lg:w-[18px]" />
      </button>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: `inline-block w-3 h-3 sm:w-[6px] sm:h-[6px] md:w-[8px] md:h-[8px] bg-gray-400 rounded-full opacity-50 mx-1 `,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
      >
        {data?.length > 0
          ? data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.img} alt={`img-${item.id}`} />
              </SwiperSlide>
            ))
          : ''}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
