"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchIcon from "@mui/icons-material/Search";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { IDistrict } from "@/type/form-slider";

// import required modules

export const Slider = () => {
  return (
    <div id="slider" className="relative">
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
            return `<span class="p-[7px] ${className}  rounded-full" ></span>`;
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider-1.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider-2.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider-3.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider-1.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider-2.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider-3.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary">
          <div className="w-full object-cover">
            <img src="/img/slider.png" alt="" className="w-full h-full" />
          </div>
        </SwiperSlide>
      </Swiper>
      <FormSlider />
    </div>
  );
};

const FormSlider = () => {
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    province: "",
  });
  const [data, setData] = useState<Array<IDistrict>>([]);

  const getDistrict = async () => {
    const res = await axios.get(
      "https://open.oapi.vn/location/provinces?page=0&size=63"
    );
    setData(res.data.data);
  };
  useEffect(() => {
    getDistrict();
  }, []);

  const ChangeActive = () => {
    setActive(!active);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="container xl:absolute left-0 top-0 right-0 grid grid-cols-12 items-center z-[2] w-full m-auto">
      <div className="xl:col-span-5 col-span-12 shadow-[0 .5rem 1rem rgba(0, 0, 0, .15) !important] p-6 bg-white rounded-lg	 ">
        <div className="text-2xl font-bold text-defaultText ">
          Tìm Kiếm Cơ Hội Việc Làm
        </div>
        <div className="form-slider grid items-center">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <FormControl fullWidth>
              <TextField
                onFocus={() => setActive(true)}
                inputProps={{ sx: { borderRadius: 0.5 } }}
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-md"
              />
            </FormControl>

            <div
              className={`overflow-hidden transition-all ease-in-out duration-500 transform grid grid-cols-2 gap-x-6 gap-y-2 my-2 ${
                active ? "max-h-96 " : "max-h-0 "
              }`}
            >
              <FormControl fullWidth className="col-span my-2">
                <InputLabel id="demo-simple-select-label">
                  Tỉnh thành
                </InputLabel>
                <Select
                  inputProps={{ sx: { borderRadius: 0.5 } }}
                  labelId="demo-simple-select-label"
                  name="province"
                  label="Tỉnh thành"
                >
                  {data.map((item) => (
                    <MenuItem key={item.name} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="col-span my-2">
                <InputLabel id="demo-simple-select-label">
                  Tỉnh thành
                </InputLabel>
                <Select
                  inputProps={{ sx: { borderRadius: 0.5 } }}
                  labelId="demo-simple-select-label"
                  name="province"
                  label="Tỉnh thành"
                >
                  {data.map((item) => (
                    <MenuItem key={item.name} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="col-span my-2">
                <InputLabel id="demo-simple-select-label">
                  Tỉnh thành
                </InputLabel>
                <Select
                  inputProps={{ sx: { borderRadius: 0.5 } }}
                  labelId="demo-simple-select-label"
                  name="province"
                  label="Tỉnh thành"
                >
                  {data.map((item) => (
                    <MenuItem key={item.name} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth className="col-span my-2">
                <InputLabel id="demo-simple-select-label">
                  Tỉnh thành
                </InputLabel>
                <Select
                  inputProps={{ sx: { borderRadius: 0.5 } }}
                  labelId="demo-simple-select-label"
                  name="province"
                  label="Tỉnh thành"
                >
                  {data.map((item) => (
                    <MenuItem key={item.name} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="mt-2 flex justify-between	w-full font-medium px-5 py-[5px]">
              <div className="hover:underline cursor-pointer">Đặt lại</div>
              <div
                className="hover:underline cursor-pointer"
                onClick={ChangeActive}
              >
                <SearchIcon className="" />
                Tìm kiếm nâng cao
              </div>
            </div>
            <FormControl fullWidth>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="text-white normal-case bg-default py-3 text-base font-semibold rounded-[10px] hover:bg-default hover:opacity-[0.8]"
              >
                Tìm Kiếm
              </Button>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
};
