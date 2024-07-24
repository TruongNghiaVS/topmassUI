"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import WorkIcon from "@mui/icons-material/Work";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";

// import required modules

export const Slider = () => {
  return (
    <div
      id="slider"
      className="relative bg-[url('/img/bg-slider.png')] bg-no-repeat	bg-cover pb-6"
    >
      <div className="container mx-auto">
        <div className="px-52">
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
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
                  alt=""
                  className="w-full h-full border border-[#FFB600] border-2 rounded-[40px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-primary">
              <div className="w-full object-cover">
                <img
                  src="/img/slider.png"
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
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="w-full mt-4 relative ">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="flex bg-white whitespace-nowrap shadow-[0px_-8px_0_rgb(248,158,27)]"
        sx={{
          borderRadius: "10px",
        }}
      >
        <FormControl fullWidth className="col-span mt-2" size="small">
          <TextField
            label="Tìm kiếm việc làm"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": {
                padding: "8px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth className="col-span my-2" size="small">
          <InputLabel id="demo-small-select-label">
            Địa điểm làm việc
          </InputLabel>
          <Select
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderRadius: 0,
                padding: "8px",
              },
            }}
            labelId="demo-small-select-label"
            name="province2"
            variant="outlined"
            startAdornment={
              <InputAdornment position="start">
                <FmdGoodIcon />
              </InputAdornment>
            }
          ></Select>
        </FormControl>
        <FormControl fullWidth className="col-span my-2" size="small">
          <InputLabel id="demo-small-select-label">Ngành nghề</InputLabel>
          <Select
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderRadius: 0,
                padding: "8px",
              },
            }}
            labelId="demo-small-select-label"
            name="province1"
            variant="outlined"
            startAdornment={
              <InputAdornment position="start">
                <WorkIcon />
              </InputAdornment>
            }
          ></Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="px-4 min-w-20 shadow-none text-black text-normal capitalize bg-[#F37A20] text-white border border-[2px] "
        >
          Tìm kiếm
        </Button>
      </Box>
    </div>
  );
};
