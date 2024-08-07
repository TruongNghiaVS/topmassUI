"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { InfomationJob } from "./infomation-job/infomation-job";
import { jobSlider } from "@/mockup-data/data";

export const SliderJob = () => {
  const arrIndex = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  const arrMap = converArray(arrIndex, 9);
  return (
    <div id="slider" className="relative max-xl:px-2">
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
            return `<span class="!p-[2.5px] !inline-block !text-xs !opacity-100 !w-6 !h-6 !border !border-1 !border-solid !border-[#F3F5F7] !rounded-full  ${className} " >${
              index + 1
            }</span>`;
          },
        }}
        className="mySwiper !pb-10"
      >
        {arrMap.map((values, index) => {
          return (
            <div key={index.toString()}>
              <SwiperSlide className="bg-primary w-full border-r">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                  {values.map((value, index) => {
                    return (
                      <InfomationJob
                        key={value.toString() + jobSlider.title}
                        item={jobSlider}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            </div>
          );
        })}
        {/* <div className="swiper-nav-btns">
          <Button id="swiper-back" className="mt-6">
            Prev
          </Button>
          <Button id="swiper-forward" className="mt-6">
            Next
          </Button>
        </div> */}
      </Swiper>
    </div>
  );
};

const converArray = (arr: number[], size: number) => {
  let tempArray: number[][] = [];
  for (let index = 0; index < arr.length; index = index += size) {
    const myChunk = arr.slice(index, index + size);
    tempArray.push(myChunk);
  }
  return tempArray;
};
