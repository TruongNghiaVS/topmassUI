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
import { BagBootstrapIcon } from "@/theme/icons/bagBootstrapIcon";

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
        <SliderForm />
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
    <div className="xl:px-48 lg:px-40 px-2">
      <div className="w-full mt-4 relative ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	"
        >
          <div className="flex-1 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[1px] after:h-[70%] after:bg-black after:my-auto">
            <TmInput
              register={register}
              name="work"
              error={errors.work}
              className="border-0"
              placeholder="Tìm kiếm việc làm"
            />
          </div>
          <div className="flex-1">
            <TmSelect
              icon={<MapPinIcon className="w-6 mr-2" />}
              register={register}
              error={errors.location}
              name="location"
              className="border-0"
              placeholder="Địa điểm làm việc"
              children={optionsLocation.map((value) => {
                return <option key={value}>{value}</option>;
              })}
            />
          </div>

          <div className="flex-1 mr-2">
            <TmSelect
              register={register}
              error={errors.type}
              icon={<BagBootstrapIcon className="w-4 mr-2" />}
              className="border-0"
              name="type"
              placeholder="Ngành nghề"
              children={optionsType.map((value) => {
                return <option key={value}>{value}</option>;
              })}
            />
          </div>
          <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
            <button type="submit" className="px-4 py-2 flex">
              <MagnifyingGlassIcon className="mr-2 w-6" />
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
