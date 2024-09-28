"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { TitleCustom } from "./custom-title";
import { IHotCompanyProps } from "@/interface/interface";

export const HotCompany = ({ companys }: IHotCompanyProps) => {
  return (
    <>
      <div className=" mt-[30px] max-1280:px-2 bg-white">
        <div className="container mx-auto">
          <TitleCustom title="Đối tác tiềm năng của Topmass" className="" />
          <div>
            <Swiper
              cssMode={true}
              spaceBetween={20}
              slidesPerView={6}
              autoplay={{
                delay: 5000,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              navigation={{
                prevEl: "#prev-hot-job",
                nextEl: "#next-hot-job",
              }}
              modules={[Navigation]}
              className="mySwiper !pt-5 !pb-16"
            >
              {companys?.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="p-2">
                    <div className="hover:outline outline-[#F37A20] p-4 rounded-lg">
                      <div className="flex justify-center">
                        <Link href={`/cong-ty/${item.slug}`}>
                          <img
                            src={
                              item.logoFullLink
                                ? item.logoFullLink
                                : "/imgs/logo-work.png"
                            }
                            alt=""
                            className="w-auto"
                          />
                        </Link>
                      </div>
                      <Link href={`/cong-ty/${item.slug}`}>
                        <div className=" uppercase text-center my-5">
                          {item.fullName}
                        </div>
                      </Link>
                      <Link href="/viec-lam">
                        <div className="flex items-center justify-center">
                          <img
                            src="/imgs/bag.png"
                            alt=""
                            className="w-4 mr-2"
                          />
                          5 vị trí đang tuyển
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}

              <button
                id="prev-hot-job"
                className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] absolute bottom-2 lg:left-[47%] md:left-[45%] left-[40%]"
              >
                <ChevronLeftIcon className="text-[#F37A20] w-4" />
              </button>
              <button
                id="next-hot-job"
                className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] absolute bottom-2 lg:right-[47%] md:right-[45%] right-[40%]"
              >
                <ChevronRightIcon className="text-[#F37A20] w-4" />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
