import Image from "next/image";
import { Menu } from "./menu";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <section id="header" className="h-[76px] ">
        <div className="flex justify-between items-center  bg-white fixed left-0 top-0 right-0  z-[3]">
          <div className="logo-header">
            <Image
              src="img/logo-new.svg"
              width={100}
              height={100}
              alt="/"
              priority
              quality={100}
              className="w-auto h-[50px]"
            />
          </div>
          <div id="nav-menu">
            <div className="flex ">
              <Menu />
              <div className="flex items-center">
                <Link
                  href="#"
                  className="whitespace-nowrap font-semibold p-3 text-base leading-[22px] text-default hover:underline"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="#"
                  className="whitespace-nowrap font-semibold p-3 text-base leading-[22px] text-default hover:underline"
                >
                  Đăng ký
                </Link>
              </div>
              <div className=" bg-[#121139] text-white py-2.5 px-10">
                <div className=" whitespace-nowrap text-sm mb-1 font-semibold leading-[22px]">
                  Dành cho
                </div>
                <div className=" whitespace-nowrap font-semibold text-lg leading-[22px]">
                  Nhà tuyển dụng
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
