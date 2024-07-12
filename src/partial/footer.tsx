import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const Footer = () => {
  const candidate = [
    "Việc Làm Mới Nhất",
    "Giới Thiệu Ứng Viên",
    "Tin Tức Tuyển Dụng",
  ];

  const aboutUs = ["Về Chúng Tôi", "Liên Hệ"];
  const help = [
    "Điều Khoản Sử Dụng Cho UV",
    "Điều Khoản Sử Dụng Cho NTD",
    "Quy Định Bảo Mật",
  ];

  const icon = [
    <FacebookIcon />,
    <TwitterIcon />,
    <InstagramIcon />,
    <LinkedInIcon />,
    <YouTubeIcon />,
  ];

  const jobProvince = [
    ["Việc Làm Bình Dương", "Việc Làm Đồng Nai", "Việc Làm Vũng Tàu"],
    ["Việc Làm Đà Nẵng", "Việc Làm Hải Phòng", "Việc Làm Đà Lạt"],
    ["Việc Làm IT", "Việc Làm Marketing", "Việc Làm Chăm Sóc Khách Hàng"],
    ["Thiết Kế CV", "Bí Quyết Tìm Việc", "Kỹ Năng Phỏng Vấn"],
  ];

  return (
    <>
      <div className=" bg-white">
        <div className="container mx-auto pt-[60px] pb-[30px] ">
          <div className="grid grid-cols-4 lg:px-0 px-6">
            <div className="lg:col-span-1 col-span-4">
              <Link href="#">
                <Image
                  src="img/logo-new.svg"
                  width={100}
                  height={100}
                  alt=""
                  className="w-[180px] mb-6"
                ></Image>
              </Link>
            </div>
            <div className="lg:col-span-3 col-span-4">
              <div className="grid grid-cols-12">
                <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 mb-1">
                  <div className="font-bold text-xl text-[#170f49] mb-5">
                    Dành Cho Ứng Viên
                  </div>
                  {candidate.map((item: string) => {
                    return (
                      <div key={item}>
                        <Link
                          href="#"
                          className="font-normal text-[15px] leading-10	not-italic hover:text-default	"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:col-span-2 md:col-span-6 col-span-12 xl:mb-0 mb-1">
                  <div className="font-bold text-xl text-[#170f49] mb-5">
                    Về chúng tôi
                  </div>
                  {aboutUs.map((item: string) => {
                    return (
                      <div key={item}>
                        <Link
                          href="#"
                          className="font-normal text-[15px] leading-10	not-italic hover:text-default	"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:col-span-3 md:col-span-6 col-span-12 xl:mb-0 mb-1">
                  <div className="font-bold text-xl text-[#170f49] mb-5">
                    Trung Tâm Trợ Giúp
                  </div>
                  {help.map((item: string) => {
                    return (
                      <div key={item}>
                        <Link
                          href="#"
                          className="font-normal text-[15px] leading-10	not-italic hover:text-default	"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="xl:col-span-4 md:col-span-6 col-span-12 xl:mb-0 mb-1 ">
                  <div className="font-bold text-xl text-[#170f49] mb-5">
                    Kết Nối Với Jobvieclam
                  </div>
                  <div>
                    {icon.map((item: any, idx: number) => {
                      return (
                        <Link
                          key={idx}
                          href="#"
                          className="font-normal text-[15px] leading-10	not-italic hover:text-default	mr-4"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#961b1e] p-4 lg:px-0 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            {jobProvince.map((items: string[], idx: number) => {
              return (
                <div
                  key={`${idx} + ${items[0]}`}
                  className="lg:col-span-1 md:col-span-2 col-span-4"
                >
                  {items.map((item: string) => {
                    return (
                      <div className=" py-2">
                        <Link
                          href="#"
                          key={item}
                          className="text-lg text-white leading-[22px] font-normal"
                        >
                          {item}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto my-5 lg:px-0 px-6 ">
          <div className="text-xl font-bold leading-6 mb-2">
            CÔNG TY CỔ PHẦN TẬP ĐOÀN VIETSTAR
          </div>
          <div className="font-normal text-sm mb-3 ">
            54/31 Đ. Phổ Quang, Phường 2, Tân Bình, Thành phố Hồ Chí Minh, Việt
            Nam
          </div>
          <div className="flex items-center mb-3">
            <PhoneIcon className="text-default mr-2" />
            <Link href="#" className="text-sm font-normal hover:underline">
              0938797478
            </Link>
          </div>
          <div className="flex items-center mb-3">
            <EmailOutlinedIcon className="text-default mr-2" />
            <Link href="#" className="text-sm font-normal hover:underline">
              info@jobvieclam.com
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white  lg:px-0 px-6 ">
        <div className="container mx-auto">
          <div className="border-t border-[#d9dbe9]">
            <div className="flex md:justify-between justify-center md:flex-row flex-col items-center">
              <div className="text-normal text-base text-[#6f6c90] leading-[30px] py-5">
                Copyright © Jobvieclam
              </div>
              <div className="text-center">
                <div className="inline-block px-2 text-normal text-base leading-[30px]">
                  All Rights Reserved
                </div>
                <div className="inline-block px-2 text-normal text-base underline text-[#2F80ED] leading-[30px] hover:text-default">
                  <Link href="#">Điều khoản sử dụng</Link>
                </div>
                <div className="inline-block px-2 text-normal text-base underline text-[#2F80ED] leading-[30px] hover:text-default">
                  <Link href="#">Chính sách</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
