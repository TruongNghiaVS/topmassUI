import { BagBootstrapIcon } from "@/theme/icons/bagBootstrapIcon";
import { CloudUploadBootstrapIcon } from "@/theme/icons/cloudUploadBootstrapIcon";
import { EnvelopePaperHeartFillBootstrapIcon } from "@/theme/icons/envelopePaperHeartFillBootstrapIcon";
import { PersonBargeBootstrapIcon } from "@/theme/icons/personBargeBootstrapIcon";
import {
  DocumentCheckIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
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
          title: "Quản lý CV",
          slug: "/quan-ly-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Tải CV lên",
          slug: "/tai-cv-len",
          icon: (
            <CloudUploadBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Mẫu CV",
          slug: "/mau-cv",
          icon: (
            <PersonBargeBootstrapIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Kiểm tra chất lượng cv",
          slug: "/kiem-tra-chat-luong-cv",
          icon: (
            <DocumentCheckIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Hướng dẫn viết CV theo ngành nghề",
          slug: "/huong-dan-viet-cv-theo-nganh-nghe",
          icon: (
            <PencilSquareIcon className="text-default mr-2 text-[15px] leading-4 w-6" />
          ),
        },
        {
          title: "Thư viện CV mẫu",
          slug: "/thu-vien-cv-mau",
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
          slug: "/viec-lam",
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
      link: "/viec-lam",
      isShow: true,
    },
    {
      title: "Công ty",
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
      ],
      link: "/tin-tuc",
      isShow: false,
    },
  ];

  return (
    <>
      <div className="w-full">
        <ul className="xl:flex hidden p-0">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="group/title mx-4 normal-case whitespace-nowrap after:transition-all after:transition-height after:ease-in-out after:duration-300 justify-center h-[76px] relative after:absolute after:content-[''] after:top-[calc(100%-3px)] hover:after:top-[calc(100%-3px)] after:left-0 after:w-full after:h-0 hover:after:h-[3px] after:bg-default flex items-center"
            >
              <Link
                href={item.isShow ? item.link : "#"}
                className={`"text-[#3B4358] no-underline font-medium ${
                  path.includes(item.link) ? "text-default" : ""
                } "`}
              >
                {item.title}
              </Link>
              {item.subMenu.length > 0 && (
                <SubMenu
                  parentPath={item.link}
                  subMenu={item.subMenu}
                  pathCheck={path}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

type prop = {
  subMenu: {
    title: string;
    slug: string;
    icon: any;
    border?: boolean;
    after?: any;
  }[];
  parentPath: string;
  pathCheck: string;
};

export const SubMenu = ({ subMenu, parentPath, pathCheck }: prop) => {
  return (
    <>
      <ul className="p-2 rounded-lg group/subMenu overflow-hidden border-[#d9dbe9] h-0 transition-all ease-in-out duration-300 text-sm leading-[19px] absolute top-[calc(100%+20px)] left-0 bg-white min-w-[250px] py-[5px] z-[-1] group-hover/title:z-[11] group-hover/title:h-auto shadow-md opacity-0 group-hover/title:opacity-100 group-hover/title:top-full">
        {subMenu.map((item) => (
          <li
            key={item.title}
            className={`group/item normal-case whitespace-nowrap my-2 bg-[#e4e4e4] p-0 `}
          >
            <Link
              href={item.slug}
              className={`group/submenu font-medium text-[#3B4358] no-underline group-hover/item:text-default px-[15px] py-3 flex items-center relative ${
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
