"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderDetail = () => {
  const list = [1, 2, 3, 4];
  return (
    <div id="slider" className="relative bg-white rounded-lg p-8 mb-8">
      <Swiper
        modules={[Pagination, Navigation]}
        cssMode={true}
        spaceBetween={1}
        // navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "text-swiperPagin bg-white cursor-pointer mx-1 text-swiperPagin",
          bulletActiveClass: "!text-white !bg-[#FF6633]",
          renderBullet: (index, className) => {
            return `<span class="!p-1.5 !inline-block !text-xs !opacity-100 !border !border-1 !border-solid !border-[#F3F5F7] !rounded-full  ${className} " ></span>`;
          },
        }}
        className="mySwiper !pb-10"
      >
        <SwiperSlide className="bg-primary">
          <img src="/imgs/banner-1.png" alt="" className="w-full rounded-lg" />
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <img src="/imgs/banner-2.png" alt="" className="w-full rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
