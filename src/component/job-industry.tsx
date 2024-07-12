"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const JobIndustry = () => {
  const employee = [
    {
      title: "Bán Hàng / Kinh Doanh",
      img: "job-1.jpg",
      view: "4772",
    },
    {
      title: "Xây dựng",
      img: "job-2.jpg",
      view: "4772",
    },
    {
      title: "Tài chính ngân hàng",
      img: "job-3.jpg",
      view: "4772",
    },
    {
      title: "Bảo hiểm",
      img: "job-4.jpg",
      view: "4772",
    },
    {
      title: "Du lịch",
      img: "job-5.jpg",
      view: "4772",
    },
    {
      title: "Việc làm khác",
      img: "job-6.jpg",
      view: "4772",
    },
    {
      title: "Việc làm khác 1",
      img: "job-7.jpg",
    },
  ];
  return (
    <div>
      <div className="container mx-auto mt-4">
        <div className="text-default font-bold text-[1.6rem] text-center uppercase">
          Nhà tuyển dụng hàng đầu
        </div>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={6}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="p-[7px] ${className}  rounded-full" ></span>`;
              },
            }}
            navigation
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            modules={[Autoplay, Pagination, Navigation]}
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
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="mySwiper !pt-2.5 !pb-5"
          >
            {employee.map((item: any, index: number) => {
              return (
                <div className="p-2">
                  <SwiperSlide key={index}>
                    <div className="w-full object-cover p-2.5 rounded-[3px]	text-center bg-white transition duration-300 hover:border-[1px] hover:border-[#9c1b1e]">
                      <img
                        src={`/img/${item.img}`}
                        alt=""
                        className="w-32 h-32 m-auto mb-[15px] rounded-full p-1 border-[3px] border-[#287AB9] mb-4"
                      />
                      <div className=" text-center text-[#9c1b1e] my-2.5 font-semibold text-lg line-clamp-2	min-h-14">
                        {item.title}
                      </div>
                      <div className=" text-center font-medium text-[15px] text-[#8E9094] ">
                        ({item.view} việc làm)
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
