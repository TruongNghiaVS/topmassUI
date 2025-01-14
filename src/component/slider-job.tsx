"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IAllJobsProps, IJob } from "@/interface/job";
import { InfomationJobLike } from "./infomation-job/infomation-job-like";

export const SliderJob = ({ jobs, mutate }: IAllJobsProps) => {
  const arrMap = converArray(jobs, 9);
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
            "text-colorBase bg-white cursor-pointer mx-1 text-colorBase",
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
            <SwiperSlide key={index} className="bg-primary w-full border-r">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
                {values.map((value, idx) => {
                  return (
                    <InfomationJobLike key={idx} item={value} mutate={mutate} />
                  );
                })}
              </div>
            </SwiperSlide>
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

const converArray = (allJobs: IJob[], size: number) => {
  let tempArray: IJob[][] = [];
  for (let index = 0; index < allJobs?.length; index = index += size) {
    const myChunk = allJobs.slice(index, index + size);
    tempArray.push(myChunk);
  }
  return tempArray;
};
