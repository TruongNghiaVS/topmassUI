import { ISubmenuProps } from "@/interface/interface";
import { BagBootstrapIcon } from "@/theme/icons/bagBootstrapIcon";
import { EnvelopePaperHeartFillBootstrapIcon } from "@/theme/icons/envelopePaperHeartFillBootstrapIcon";
import { PersonBargeBootstrapIcon } from "@/theme/icons/personBargeBootstrapIcon";
import {
  ChartBarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IconAfter = () => {
  return <img src="/imgs/fire.png" alt="" className="w-3 ml-2" />;
};

export const Menu = () => {
  const path = usePathname();

  const navItems = [
    {
      title: "Tạo CV",
      subMenu: [
        {
          title: "Profile CV",
          slug: "/profile-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Quản lý CV",
          slug: "/quan-ly-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Mẫu CV",
          slug: "/mau-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
      ],
      link: "#",
      isShow: true,
    },
    {
      title: "Việc làm",
      subMenu: [
        {
          title: "Tìm việc làm",
          slug: "/tim-kiem-viec-lam",
          icon: (
            <MagnifyingGlassIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
          border: true,
        },
        {
          title: `Việc làm đã ứng tuyển`,
          slug: "/viec-lam-da-ung-tuyen",
          icon: (
            <BagBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
          after: <IconAfter />,
        },
        {
          title: "Việc làm đã lưu",
          slug: "/viec-lam-da-luu",
          icon: (
            <EnvelopePaperHeartFillBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
          border: true,
        },
      ],
      link: "/viec-Lam",
      isShow: true,
    },
    {
      title: "Công Ty",
      subMenu: [],
      link: "/cong-ty",
      isShow: true,
    },
    {
      title: "Tin Tức",
      subMenu: [
        {
          title: "Bí Quyết Tìm Việc",
          slug: "/tin-tuc/bi-quyet-tim-viec",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Thị Trường - Xu Hướng",
          slug: "/tin-tuc/thi-truong-xu-huong",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Góc Thư Giản",
          slug: "/tin-tuc/goc-thu-gian",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Tiện Ích",
          slug: "/tin-tuc/tien-ich",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Góc Báo Chí",
          slug: "/tin-tuc/goc-bao-chi",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Thị Trường Lương",
          slug: "/tin-tuc/thi-truong-luong",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Cẩm Nang Nghề Nghiệp",
          slug: "/tin-tuc/cam-nang-nghe-nghiep",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Thị Trường - Xu Hướng Tìm Việc",
          slug: "/tin-tuc/thi-truong-xu-huong-tim-viec",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: " Kỹ Năng Phỏng Vấn",
          slug: "/tin-tuc/ky-nang-phong-van",
          icon: (
            <DocumentTextIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
      ],
      link: "/tin-tuc",
      isShow: true,
    },
    {
      title: "Công Cụ",
      subMenu: [
        {
          title: "Tính lương GROSS - NET",
          slug: "/cong-cu/net-and-gross",
          icon: (
            <ScaleIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Tính thuế thu nhập cá nhân",
          slug: "/cong-cu/thue-thu-nhap-ca-nhan",
          icon: (
            <ChartBarIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Tính mức hưởng bảo hiểm thất nghiệp",
          slug: "/cong-cu/bao-hiem-xa-hoi-that-nghiep",
          icon: (
            <ShieldExclamationIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Tính bảo hiểm xã hội 1 lần",
          slug: "/cong-cu/bao-hiem-xa-hoi-1-lan",
          icon: (
            <ShieldCheckIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
      ],
      link: "#",
      isShow: true,
    },
  ];

  return (
    <>
      <div className="w-full">
        <ul className="lg:flex hidden p-0">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="group/title mx-4 normal-case whitespace-nowrap after:transition-all after:transition-height after:ease-in-out after:duration-300 justify-center h-[76px] relative after:absolute after:content-[''] after:top-[calc(100%-3px)] hover:after:top-[calc(100%-3px)] after:left-0 after:w-full after:h-0 hover:after:h-[3px] after:bg-default flex items-center"
            >
              <Link
                href={item.isShow ? item.link : "#"}
                className={`"text-[#3B4358] text-base no-underline font-medium ${
                  path.includes(item.link) ? "text-default" : ""
                } "`}
              >
                {item.title}
              </Link>
              {item.subMenu.length > 0 && (
                <SubMenu subMenu={item.subMenu} pathCheck={path} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const SubMenu = ({ subMenu, pathCheck }: ISubmenuProps) => {
  return (
    <>
      <ul className="p-2 rounded-lg group/subMenu overflow-hidden border-[#d9dbe9] h-0 transition-all ease-in-out duration-300 text-sm leading-[19px] absolute top-[calc(100%+20px)] left-0 bg-white min-w-[250px] py-[5px] z-[-1] group-hover/title:z-[11] group-hover/title:h-auto shadow-md opacity-0 group-hover/title:opacity-100 group-hover/title:top-full">
        {subMenu.map((item) => (
          <li
            key={item.title}
            className={`group/item normal-case whitespace-nowrap my-2 bg-[#e4e4e4] p-0 rounded `}
          >
            <Link
              href={item.slug}
              className={`group/submenu font-medium text-[#3B4358] no-underline group-hover/item:text-default px-[15px] py-3 flex items-center relative  ${
                pathCheck.includes(item.slug) && "text-default"
              }  ${
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
    </>
  );
};
