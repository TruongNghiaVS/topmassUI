"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Employee = () => {
  const employee = [
    {
      title: "Trung tâm Anh ngữ Apollo English",
      img: "employee-1.png",
    },
    {
      title: "Công ty cổ phần tài chính Smartbank",
      img: "employee-2.png",
    },
    {
      title: "Công Ty Cổ Phần Tập Đoàn Vietstar",
      img: "employee-3.png",
    },
    {
      title: "CÔNG TY TNHH TRANSCOSMOS VIỆT NAM",
      img: "employee-3.png",
    },
    {
      title: "Công ty TNHH Concentrix Service Vietnam",
      img: "employee-5.png",
    },
    {
      title: "Công ty TNHH Concentrix Service Vietnam",
      img: "employee-1.png",
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
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="mySwiper pt-2.5 pb-5"
          >
            {employee.map((item: any, index: number) => {
              return (
                <div key={index} className="p-2">
                  <SwiperSlide>
                    <div className="w-full object-cover p-4 rounded-2xl	text-center bg-white transition duration-300 hover:border-[1px] hover:border-[#9c1b1e] hover:shadow-hoverShadow">
                      <img
                        src={`/img/${item.img}`}
                        alt=""
                        className="w-32 h-32 m-auto"
                      />
                      <div className=" text-center font-semibold text-base mt-6 line-clamp-2  ">
                        {" "}
                        {item.title}
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
