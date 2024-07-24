import { Menu } from "./menu";
import Link from "next/link";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      <section id="header" ref={headerRef}>
        <div
          className={`${
            isFixed ? "fixed" : ""
          }  flex justify-between items-center bg-white left-0 top-0 right-0 pt-3 px-[22px] z-[3]`}
        >
          <div className="logo-header">
            <img src="img/logo-new.svg" alt="/" className="w-auto h-[50px]" />
            <div className="text-sx">Khởi đầu mọi bức phá</div>
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
              <NotificationsIcon className="text-[#F37A20] mr-3" />
              <img src="img/messenger.svg" alt="" className="w-6 h-auto mr-3" />
              <div className="inline-block px-[2px] py-[1px] rounded-full bg-[#F37A20] mr-1">
                <PersonIcon className="text-white" />
              </div>
              <ExpandMoreIcon className="text-[#F37A20]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
