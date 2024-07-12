"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderJob = () => {
  const jobSlider = {
    title: "Nhân viên tư vấn Telesale",
    company: "Công ty cổ phần tập đoàn VietStar",
    price: "10 - 15 triệu (VNĐ)",
    city: "Hồ Chí Minh",
    type: "Toàn thời gian",
  };

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

  console.log(arrMap);

  return (
    <div id="slider" className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        cssMode={true}
        navigation
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="p-[7px] ${className}  rounded-full" ></span>`;
          },
        }}
        className="mySwiper"
      >
        {arrMap.map((values, index) => {
          const count = 0;
          return (
            <SwiperSlide key={index} className="bg-primary w-full ">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 ">
                {values.map((value, index) => {
                  return (
                    <div
                      key={`${index + value}`}
                      className="border-[1px] border-[#d9dbe9] p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]"
                    >
                      <div className="flex justify-between">
                        <div className="flex items-center whitespace-nowrap ">
                          <span className="rounded-[100px] px-[7px] py-[3px] text-white text-uppercase font-normal bg-[#d9534f] text-sm  leading-normal">
                            HOT
                          </span>
                          <div className="ml-2.5 text-[13px] font-bold text-[#0d6efd] ">
                            {jobSlider.title}
                          </div>
                        </div>
                        <Link className="" href="#">
                          <EmojiFlagsIcon />
                        </Link>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-20 mr-10">
                          <img
                            src="/img/logo-job.png"
                            alt=""
                            className="w-full"
                          />
                        </div>

                        <div>
                          <div className="text-xs	leading-[18px] text-[#696974] font-bold">
                            {jobSlider.company}
                          </div>
                          <div className="text-sm font-normal text-default">
                            Lên tới: {jobSlider.price}
                          </div>
                          <div className="flex mt-4">
                            <div className="rounded-[50px] text-default text-[11px] bg-company inline-block py-[0.35em] px-[0.65em] mr-2">
                              {jobSlider.city}
                            </div>
                            <div className="rounded-[50px] text-[#8082f1] text-[11px] bg-type inline-block py-[0.35em] px-[0.65em]">
                              {jobSlider.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
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
