"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useForm, SubmitHandler } from "react-hook-form";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/16/solid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IFormSlider } from "@/interface/form-slider";
import TmInput from "./hook-form/input";
import TmSelect from "./hook-form/select";

// import required modules

export const Slider = () => {
  return (
    <div
      id="slider"
      className="relative bg-[url('/imgs/bg-slider.png')] bg-no-repeat	bg-cover pb-6"
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
        <div className="px-48">
          <SliderForm />
        </div>
      </div>
    </div>
  );
};

export const SliderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSlider>();
  const onSubmit: SubmitHandler<IFormSlider> = (data) => console.log(data);
  const optionsLocation = [
    "Địa điểm làm việc",
    "Bình Định",
    "TP.HCM",
    "Hà Nội",
  ];
  const optionsType = ["Ngành nghề", "IT", "Marketing"];
  return (
    <div className="w-full mt-4 relative ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-stretch bg-white rounded-xl shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	"
      >
        <div className="flex-1 ">
          <TmInput
            className="py-2 "
            register={register}
            name="work"
            icon={<MagnifyingGlassIcon className="mr-2 w-6" />}
            placeholder="Tìm kiếm việc làm"
          />
        </div>
        <div className="flex-1">
          <TmSelect
            className="py-2"
            icon={<MapPinIcon className="w-6 mr-2" />}
            register={register}
            name="location"
            placeholder="Địa điểm làm việc"
            children={optionsLocation.map((value, idx) => {
              return <option key={value}>{value}</option>;
            })}
          />
        </div>

        <div className="flex-1">
          <TmSelect
            className="py-2"
            register={register}
            name="type"
            placeholder="Ngành nghề"
            children={optionsType.map((value, idx) => {
              return <option key={value}>{value}</option>;
            })}
          />
        </div>
        <div className="bg-[#F37A20] text-white grid text-center rounded-tr-lg rounded-br-lg">
          <button type="submit" className="px-2 ">
            Tìm kiếm
          </button>
        </div>
      </form>
    </div>
  );
};
