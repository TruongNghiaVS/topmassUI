import { Link, List, ListItem } from "@mui/material";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";

export const Menu = () => {
  const navItems = [
    { title: "Tạo CV", subMenu: [] },
    { title: "Việc làm", subMenu: [] },
    { title: "Công ty", subMenu: [] },
    {
      title: "Tin Tức",
      subMenu: [
        "Bí Quyết Tìm Việc",
        "Thị Trường - Xu Hướng",
        "Góc Thư Giản",
        "Tiện Ích",
        "Góc Báo Chí",
      ],
    },
  ];

  return (
    <>
      <div className="w-full">
        <List className="xl:flex hidden p-0">
          {navItems.map((item) => (
            <ListItem
              key={item.title}
              className="group/title normal-case whitespace-nowrap after:transition-all after:transition-height after:ease-in-out after:duration-300 mr-2 justify-center h-[76px] relative after:absolute after:content-[''] after:top-[calc(100%-3px)] hover:after:top-[calc(100%-3px)] after:left-0 after:w-full after:h-0 hover:after:h-[3px] after:bg-default"
            >
              <Link
                href="#"
                className="text-[#3B4358] no-underline font-medium"
              >
                {item.title}
              </Link>
              {item.subMenu.length > 0 && <SubMenu subMenu={item.subMenu} />}
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

type prop = {
  subMenu: string[];
};

export const SubMenu = ({ subMenu }: prop) => {
  return (
    <>
      <List className="group/subMenu overflow-hidden border-[#d9dbe9] h-0 transition-all ease-in-out duration-300 text-sm leading-[19px] absolute top-[calc(100%+20px)] left-0 bg-white min-w-[250px] py-[5px] z-[-1] group-hover/title:z-[11] group-hover/title:h-auto shadow-md opacity-0 group-hover/title:opacity-100 group-hover/title:top-full">
        {subMenu.map((item) => (
          <ListItem
            key={item}
            className="group/item normal-case whitespace-nowrap hover:bg-[#e4e4e4] p-0"
          >
            <Link
              href="#"
              className="group/submenu font-medium text-[#3B4358] no-underline group-hover/item:text-default px-[15px] py-3 "
            >
              <WysiwygIcon className="text-default mr-2 text-[15px] leading-4	" />
              {item}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};
