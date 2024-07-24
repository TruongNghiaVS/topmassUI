"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Button, Card, CardContent } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const HotCompany = () => {
  const lst = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="bg-[#F9E8C0] mt-[60px]">
        <div className="container mx-auto">
          <div className="text-2xl font-bold text-center text-[#D14B00] py-5">
            Top công ty nổi bật
          </div>
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
              {lst.map((value) => {
                return (
                  <SwiperSlide key={value.toString() + "test"}>
                    <Card>
                      <CardContent>
                        <div className="flex justify-center">
                          <img
                            src="/img/logo-work.png"
                            alt=""
                            className="w-auto"
                          />
                        </div>
                        <div className=" uppercase text-center my-5">
                          Công ty cổ phần tập đoàn VietStar
                        </div>
                        <div className="flex items-center justify-center">
                          <WorkOutlineIcon className="mr-2" /> 5 vị trí đang
                          tuyển
                        </div>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                );
              })}

              <Button
                id="prev-hot-job"
                size="small"
                className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] absolute bottom-2 left-[47%]"
              >
                <KeyboardArrowLeftIcon className="text-[#F37A20]" />
              </Button>
              <Button
                id="next-hot-job"
                size="small"
                className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] absolute bottom-2 right-[47%]"
              >
                <KeyboardArrowRightIcon className="text-[#F37A20]" />
              </Button>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
