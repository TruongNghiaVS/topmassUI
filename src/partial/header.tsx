"use client";

import { Menu } from "./menu";
import Link from "next/link";
import {
  BellIcon,
  UserIcon,
  ChevronDownIcon,
  PencilSquareIcon,
  EyeIcon,
  BriefcaseIcon,
  LockClosedIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import Modal from "@/component/modal";
import { LoginForm } from "@/component/login";
import { toast } from "react-toastify";
import useSWR from "swr";
import { getToken, removeToken } from "@/utils/token";
import { IDropdownMenu } from "@/app/interface/interface";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { data: token } = useSWR("token", getToken, { refreshInterval: 500 });
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
    const handleScroll = () => {
      if (headerRef.current) {
        const offsetTop = headerRef.current.clientHeight;
        if (window.scrollY > offsetTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [token]);

  const dropDown = [
    {
      title: "Cài đặt thông tin cá nhân",
      slug: "/cai-dat-thong-tin-ca-nhan",
      icon: (
        <PencilSquareIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
      ),
    },
    {
      title: "Nhà tuyển dụng xem hồ sơ của bạn",
      slug: "/xem-ho-so",
      icon: <EyeIcon className="text-default mr-2 text-[15px] leading-4 w-6" />,
    },
    {
      title: "Cài đặt gợi ý việc làm",
      slug: "/cai-dat-goi-y-viec-lam",
      icon: (
        <BriefcaseIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
      ),
    },
    {
      title: "Đổi mật khẩu",
      slug: "/doi-mat-khau",
      icon: (
        <LockClosedIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
      ),
    },
  ];

  return (
    <>
      <section id="header" ref={headerRef} className="md:block hidden">
        <div
          className={`${
            isFixed ? "fixed" : ""
          }  flex justify-between items-center bg-white left-0 top-0 right-0 pt-3 px-[22px] z-[10]`}
        >
          <div className="logo-header">
            <Link href="/">
              <img
                src="/imgs/logo-new.svg"
                alt="/"
                className="w-auto h-[50px]"
              />
            </Link>
          </div>
          <div id="menu">
            <Menu />
          </div>
          <div className="flex">
            <div className="flex items-center mr-[50px]">
              <button
                onClick={openModal}
                className={`text-xs mr-[30px] text-default ${
                  isLogin && "hidden"
                }`}
              >
                Người tìm việc <br />
                <div className="text-sm leading-[14px] pt-2 inline block font-medium">
                  Đăng nhập/Đăng ký
                </div>
              </button>
              <Link
                href="http://42.115.94.180:8586/"
                target="_blank"
                className="text-xs "
              >
                Nhà tuyển dụng
                <br />
                <div className="text-sm leading-[14px] pt-2 inline block font-medium">
                  Đăng tin tuyển dụng
                </div>
              </Link>
            </div>

            <div className={`hidden  items-center ${isLogin && "!flex"}`}>
              <div className="relative">
                <BellIcon className="text-[#F37A20] mr-3 w-6" />
                <div className="absolute content-[''] text-xs text-center w-4 h-4 top-[-4px] right-2 rounded-full bg-[#C40202] text-white">
                  1
                </div>
              </div>
              <Link href="/nhan-tin">
                <img
                  src="/imgs/messenger.svg"
                  alt=""
                  className="w-6 h-auto mr-3"
                />
              </Link>
              <div className="flex items-center relative group/title ">
                <div className="inline-block p-[2] rounded-full bg-[#F37A20] mr-1">
                  <UserIcon className="text-white w-6" />
                </div>
                <ChevronDownIcon className="text-[#F37A20] mr-3 w-6" />
                <DropdownUser
                  subMenu={dropDown}
                  pathCheck=""
                  setIsLogin={setIsLogin}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LoginForm onClose={closeModal} />
      </Modal>
    </>
  );
};

const DropdownUser = ({ subMenu, pathCheck, setIsLogin }: IDropdownMenu) => {
  const path = usePathname();
  const router = useRouter();
  return (
    <ul className="p-2 rounded-lg group/subMenu overflow-hidden border-[#d9dbe9] h-0 transition-all ease-in-out duration-300 text-sm leading-[19px] absolute top-[calc(100%+20px)] right-0 bg-white min-w-[250px] py-[5px] z-[-1] group-hover/title:z-[11] group-hover/title:h-auto shadow-md opacity-0 group-hover/title:opacity-100 group-hover/title:top-full">
      {subMenu.map((item) => (
        <li
          key={item.title}
          className={`group/item normal-case whitespace-nowrap my-2 bg-[#e4e4e4] p-0 rounded `}
        >
          <Link
            href={item.slug}
            className={`group/submenu font-medium text-[#3B4358] no-underline group-hover/item:text-default px-[15px] py-3 flex items-center relative  ${
              item.border &&
              "mb-4 after:absolute after:content-[''] after:left-0 after:bottom-[-8px] after:right-0 after:w-full after:h-[1px] after:bg-[#e4e4e4]"
            }`}
          >
            {item.icon}
            {item.title}
            {item?.after}
          </Link>
        </li>
      ))}
      <li
        className={`group/item normal-case whitespace-nowrap my-2 bg-[#e4e4e4] p-0 rounded`}
        onClick={() => {
          removeToken();
          setIsLogin(false);
          toast.success("Đăng xuất thành công");
          router.push("/");
        }}
      >
        <Link
          href="#"
          className={`group/submenu font-medium text-[#3B4358] no-underline group-hover/item:text-default px-[15px] py-3 flex items-center relative`}
        >
          <ArrowLeftStartOnRectangleIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          Đăng xuất
        </Link>
      </li>
    </ul>
  );
};
