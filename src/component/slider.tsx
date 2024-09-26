"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SliderForm } from "./form-search-slider";

// import required modules

export const Slider = () => {
  return (
    <div
      id="slider"
      className="relative bg-[url('/imgs/bg-slider.png')] bg-no-repeat	bg-cover pb-6 max-xl:px-2"
    >
      <div className="container mx-auto">
        <div className="lg:px-52 md:px-20">
          <Swiper
            cssMode={true}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class=" ${className}  !rounded-full !bg-white" ></span>`;
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper !pt-5 !pb-6"
          >
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/imgs/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <SliderForm allProvinces={[]} allRealms={[]} />
      </div>
    </div>
  );
};
