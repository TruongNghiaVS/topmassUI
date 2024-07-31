"use client";

import { Menu } from "./menu";
import Link from "next/link";
import { BellIcon, UserIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const offsetTop = headerRef.current.offsetTop;
        if (window.scrollY > offsetTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="header" ref={headerRef} className="md:block hidden">
        <div
          className={`${
            isFixed ? "fixed" : ""
          }  flex justify-between items-center bg-white left-0 top-0 right-0 pt-3 px-[22px] z-[3]`}
        >
          <div className="logo-header">
            <img src="/imgs/logo-new.svg" alt="/" className="w-auto h-[50px]" />
          </div>
          <div id="menu">
            <Menu />
          </div>
          <div className="flex">
            <div className="flex items-center mr-[50px]">
              <Link href="#" className="text-xs mr-[30px]">
                Dành cho ứng viên <br />
                <div className="text-sm leading-[14px] pt-2 inline block font-medium">
                  Tìm việc làm
                </div>
              </Link>
              <Link href="#" className="text-xs ">
                Nhà tuyển dụng
                <br />
                <div className="text-sm leading-[14px] pt-2 inline block font-medium">
                  Đăng tin tuyển dụng
                </div>
              </Link>
            </div>
            <div className=" flex items-center">
              <div className="relative">
                <BellIcon className="text-[#F37A20] mr-3 w-6" />
                <div className="absolute content-[''] text-xs text-center w-4 h-4 top-[-4px] right-2 rounded-full bg-[#C40202] text-white">
                  1
                </div>
              </div>
              <img
                src="/imgs/messenger.svg"
                alt=""
                className="w-6 h-auto mr-3"
              />
              <div className="inline-block p-[2] rounded-full bg-[#F37A20] mr-1">
                <UserIcon className="text-white w-6" />
              </div>
              <ChevronDownIcon className="text-[#F37A20] mr-3 w-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
