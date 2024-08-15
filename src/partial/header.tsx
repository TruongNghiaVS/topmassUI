"use client";

import { ISubmenuProps, Menu } from "./menu";
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
import { FacebookBootstrapIcon } from "@/theme/icons/facebookBootstrapIcon";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/app/interface/interface";
import * as yup from "yup";
import TmInput from "@/component/hook-form/input";
import Modal from "@/component/modal";
import { useGlobalContext } from "@/app/global-context";
import { toast } from "react-toastify";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { globalParam, setGlobalParam } = useGlobalContext();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Bắt buộc nhập email")
      .email("Sai format email "),
    password: yup.string().required("Bắt buộc nhập password"),
  });

  const { handleSubmit, control } = useForm<ILogin>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    setGlobalParam(true);
    setIsModalOpen(false);
    toast.success("Đăng nhập thành công");
    console.log(data);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
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

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    {
      title: "Đăng xuất",
      slug: "/thu-vien-cv-mau",
      icon: (
        <ArrowLeftStartOnRectangleIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
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
                  globalParam && "hidden"
                }`}
              >
                Người tìm việc <br />
                <div className="text-sm leading-[14px] pt-2 inline block font-medium">
                  Đăng nhập/Đăng ký
                </div>
              </button>
              <Link
                href="http://192.168.1.2:3003"
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

            <div className={`hidden  items-center ${globalParam && "!flex"}`}>
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
                <DropdownUser subMenu={dropDown} pathCheck="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <div className="text-xl font-bold text-default">
            Đăng nhập để tiếp tục
          </div>
          <div className="sm:flex grid gap-y-2 justify-center sm:justify-start mt-5 sm:mx-10 flex-row">
            <button className="flex px-4 py-2 bg-[#F1F2F4] sm:mr-20 rounded">
              <img src="/imgs/google.png" alt="" className="w-6 mr-2" /> với tài
              khoản google
            </button>
            <button className="flex px-4 py-2 bg-[#F1F2F4] rounded">
              <FacebookBootstrapIcon className="w-6 mr-2 text-[#1094F4]" /> với
              tài khoản Facebook
            </button>
          </div>
          <div className="text-center text-base font-bold mt-4 text-default">
            Hoặc đăng nhập bằng Email
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 px-4">
              <div className="font-normal">Email</div>
              <TmInput control={control} name="email" type="email" />
            </div>
            <div className="mt-4 px-4">
              <div className="font-normal">Password</div>
              <TmInput control={control} name="password" type="password" />
            </div>
            <div className="mt-2 text-right">
              <Link href="/quen-mat-khau" className="text-[#F37A20]">
                Quên mật khẩu?
              </Link>
            </div>
            <div className="flex border-t mt-4 pt-4 justify-between items-center">
              <div className="mr-2">
                Chưa có tài khoản{" "}
                <Link href="/dang-ky" className="text-[#F37A20]">
                  Đăng ký
                </Link>
              </div>
              <div>
                <div className="flex">
                  <button
                    className="px-4 py-2 bg-[#F1F2F4] rounded mr-2"
                    onClick={closeModal}
                  >
                    Huỷ
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#FF7D55] rounded text-white"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

const DropdownUser = ({ subMenu, pathCheck }: ISubmenuProps) => {
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
    </ul>
  );
};
