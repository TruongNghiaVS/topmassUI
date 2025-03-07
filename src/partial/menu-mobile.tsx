"use client";

import {
  ArrowLeftStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  ChartBarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { TransitionMobile } from "./item-transition-mobile";
import { PersonBargeBootstrapIcon } from "@/theme/icons/personBargeBootstrapIcon";
import { BagBootstrapIcon } from "@/theme/icons/bagBootstrapIcon";
import { EnvelopePaperHeartFillBootstrapIcon } from "@/theme/icons/envelopePaperHeartFillBootstrapIcon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { getToken, removeToken } from "@/utils/token";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { HOST_RECUMENT } from "@/config-global";
import { CurrentUser } from "@/modules/helper/master-data";

export const MenuMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { data: token } = useSWR("token", getToken, { refreshInterval: 500 });
  const router = useRouter();
  const handleOpenMenuMobile = () => {
    setIsOpenMenu(true);
  };
  const divRef = useRef<HTMLDivElement | null>(null);
  const { currentUser } = CurrentUser();
  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    const handleScroll = () => {
      const scrollTop = divRef.current?.scrollTop ?? 0;
    };

    const container = divRef.current;
    container?.addEventListener("scroll", handleScroll);

    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "unset";
      container?.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [token, isOpenMenu]);

  const handleCloseMenu = (link: string | undefined) => {
    if (link) {
      router.push(link);
      setIsOpenMenu(false);
    }
  };

  const navItems = [
    {
      title: "Việc Làm",
      subMenu: [
        {
          title: "Việc làm",
          slug: "/viec-lam",
          icon: (
            <MagnifyingGlassIcon className="text-white mr-2 leading-4 w-6" />
          ),
          border: true,
        },
        {
          title: "Tìm việc làm",
          slug: "/tim-kiem-viec-lam",
          icon: (
            <MagnifyingGlassIcon className="text-white mr-2 leading-4 w-6" />
          ),
          border: true,
        },
        {
          title: `Việc làm đã ứng tuyển`,
          slug: "/viec-lam-da-ung-tuyen",
          icon: <BagBootstrapIcon className="text-white mr-2 leading-4 w-5" />,
        },
        {
          title: "Việc làm đã lưu",
          slug: "/viec-lam-da-luu",
          icon: (
            <EnvelopePaperHeartFillBootstrapIcon className="text-white mr-2 leading-4 w-5" />
          ),
          border: true,
        },
      ],
    },
    {
      title: "Tạo CV",
      subMenu: [
        {
          title: "Digital CV",
          slug: "/digital-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-white mr-2 leading-4 w-6" />
          ),
        },
        {
          title: "Quản lý CV",
          slug: "/quan-ly-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-white mr-2 leading-4 w-6" />
          ),
        },
        // {
        //   title: "Mẫu CV",
        //   slug: "/mau-cv",
        //   icon: (
        //     <PersonBargeBootstrapIcon className="text-white mr-2 leading-4 w-6" />
        //   ),
        // },
      ],
    },

    {
      title: "Công Ty",
      subMenu: [],
      slug: "/cong-ty",
    },
    {
      title: "Tin Tức",
      subMenu: [
        {
          title: "Bí Quyết Tìm Việc",
          slug: "/tin-tuc/bi-quyet-tim-viec",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Thị Trường - Xu Hướng",
          slug: "/tin-tuc/thi-truong-xu-huong",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Góc Thư Giản",
          slug: "/tin-tuc/goc-thu-gian",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Tiện Ích",
          slug: "/tin-tuc/tien-ich",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Góc Báo Chí",
          slug: "/tin-tuc/goc-bao-chi",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Thị Trường Lương",
          slug: "/tin-tuc/thi-truong-luong",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Cẩm Nang Nghề Nghiệp",
          slug: "/tin-tuc/cam-nang-nghe-nghiep",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
        // {
        //   title: "Thị Trường - Xu Hướng Tìm Việc",
        //   slug: "/tin-tuc/thi-truong-xu-huong-tim-viec",
        //   icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        // },
        {
          title: " Kỹ Năng Phỏng Vấn",
          slug: "/tin-tuc/ky-nang-phong-van",
          icon: <DocumentTextIcon className="text-white mr-2 leading-4 w-6" />,
        },
      ],
    },
    {
      title: "Công Cụ",
      subMenu: [
        {
          title: "Tính lương GROSS - NET",
          slug: "/cong-cu/net-and-gross",
          icon: <ScaleIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Tính thuế thu nhập cá nhân",
          slug: "/cong-cu/thue-thu-nhap-ca-nhan",
          icon: <ChartBarIcon className="text-white mr-2 leading-4 w-6" />,
        },
        {
          title: "Tính mức hưởng bảo hiểm thất nghiệp",
          slug: "/cong-cu/bao-hiem-xa-hoi-that-nghiep",
          icon: (
            <ShieldExclamationIcon className="text-white mr-2 leading-4 w-6" />
          ),
        },
        {
          title: "Tính bảo hiểm xã hội 1 lần",
          slug: "/cong-cu/bao-hiem-xa-hoi-1-lan",
          icon: <ShieldCheckIcon className="text-white mr-2 leading-4 w-6" />,
        },
      ],
      link: "#",
      isShow: true,
    },
  ];

  return (
    <div>
      <div className="absolute top-0 left-5 bottom-0 flex items-center">
        <div>
          <button onClick={handleOpenMenuMobile}>
            <Bars3Icon className="w-8 text-[#F37A20]" />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-0 h-screen bg-black z-40 opacity-30 ${
          isOpenMenu ? "w-full" : "w-0"
        }`}
      ></div>
      <div
        ref={divRef}
        className={`absolute transition-all duration-500 left-0 top-0 h-screen bg-[#F27B21] z-50 ${
          isOpenMenu ? "w-[80%]" : "w-0"
        }`}
      >
        <div className="h-full overflow-y-scroll relative">
          <button
            className="absolute right-2 top-2"
            onClick={() => setIsOpenMenu(false)}
          >
            <XMarkIcon className="w-6 text-[#F37A20]" />
          </button>
          {isLogin && (
            <div>
              <div className="bg-white py-2 flex justify-center">
                <img src="/imgs/logo-new.png" alt="" />
              </div>
              <div className="p-4 border-b-4 border-white">
                <div className=" flex justify-center">
                  <img
                    src={currentUser?.avatarLink || "/imgs/no-img-mobile.png"}
                    alt=""
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="mt-2 text-lg font-medium uppercase text-center text-white">
                  Welcome to topmass
                </div>
              </div>
            </div>
          )}

          <div className="py-4 px-6 border-b-4 boder-whiteborder-b-4 border-white">
            {navItems.map((item, idx) => {
              return (
                <div key={idx}>
                  {item.subMenu.length > 0 ? (
                    <div>
                      <TransitionMobile title={item.title}>
                        <div>
                          {item.subMenu.map((subItem, index) => {
                            return (
                              <div key={index}>
                                <Link
                                  href={subItem.slug}
                                  className={`font-medium text-[#3B4358] no-underline 
                                  `}
                                  legacyBehavior
                                >
                                  <a
                                    onClick={(e) =>
                                      handleCloseMenu(subItem.slug)
                                    }
                                    className=" flex items-center text-white px-[15px] py-1 "
                                  >
                                    {subItem.icon}
                                    {subItem.title}
                                  </a>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </TransitionMobile>
                    </div>
                  ) : (
                    <div className="text-white">
                      <Link href={item.slug ? item.slug : "#"} legacyBehavior>
                        <div className="text-base font-medium mt-2">
                          <a onClick={() => handleCloseMenu(item.slug)}>
                            {item.title}
                          </a>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-4 text-white">
              <Link target="_blank" href={HOST_RECUMENT || ""}>
                Nhà tuyển dụng <br />{" "}
                <span className="font-bold">Đăng tin tuyển dụng</span>
              </Link>
            </div>
          </div>
          {isLogin && (
            <div
              className={` normal-case whitespace-nowrap my-2 p-0 rounded`}
              onClick={() => {
                removeToken();
                setIsLogin(false);
                toast.success("Đăng xuất thành công");
                router.push("/");
                setIsOpenMenu(false);
              }}
            >
              <Link
                href="#"
                className={`font-medium text-[white] no-underline group-hover/item:text-default px-[15px] py-3 flex items-center relative`}
              >
                <ArrowLeftStartOnRectangleIcon className="text-default mr-2 text-white text-[15px] leading-4 w-6" />
                Đăng xuất
              </Link>
            </div>
          )}
          {!isLogin && (
            <div className="p-4">
              <div className="mt-2">
                <Link href="/dang-nhap">
                  <div className="font-medium text-[#3B4358] no-underline text-white px-[15px] py-1 flex items-center">
                    <ArrowRightEndOnRectangleIcon className="text-white mr-2 leading-4 w-6" />
                    <div>Đăng nhập</div>
                  </div>
                </Link>
              </div>
              <div className="mt-2">
                <Link href="/dang-ky">
                  <div className="font-medium text-[#3B4358] no-underline text-white px-[15px] py-1 flex items-center relative">
                    <div className="mr-2 relative">
                      <div className="absolute left-0 top-0 right-0 bottom-0 rotate-45 bg-white z-[-1]"></div>
                      <PlusIcon className="text-[#F37A20] w-4 " />
                    </div>
                    <div>Đăng ký</div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
