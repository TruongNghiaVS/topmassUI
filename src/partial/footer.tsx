import Image from "next/image";
import Link from "next/link";
import {
  DocumentTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { HOST_RECUMENT } from "@/config-global";

export const Footer = () => {
  const topMass = [
    {
      title: "Giới thiệu",
      link: "/gioi-thieu",
    },
    {
      title: "Tuyển dụng",
      link: `${HOST_RECUMENT ? HOST_RECUMENT : "#"} `,
    },
    {
      title: "Liên hệ",
      link: "/lien-he",
    },
    {
      title: "Chính sách bảo mật",
      link: "/chinh-sach-bao-mat",
    },
    {
      title: "Quy định ứng viên",
      link: "/quy-dinh-ung-vien",
    },
  ];

  const cv = [
    {
      title: "Quản lý hồ sơ",
      link: "/digital-cv",
    },
    {
      title: "Hướng dẫn viết CV",
      link: "#",
    },
    // {
    //   title: "Thư viện CV mẫu",
    //   link: "/mau-cv",
    // },
  ];

  const blog = [
    {
      title: "Kỹ năng phỏng vấn",
      link: "/tin-tuc/ky-nang-phong-van",
    },
    {
      title: "Bí quyết tìm việc",
      link: "/tin-tuc/bi-quyet-tim-viec",
    },
    {
      title: "Cẩm nang nghề nghiệp",
      link: "/tin-tuc/cam-nang-nghe-nghiep",
    },
    {
      title: "Thị trường & xu hướng",
      link: "/tin-tuc/thi-truong-xu-huong",
    },
  ];

  return (
    <>
      <div className=" bg-white px-0 max-1280:px-2">
        <div className="container mx-auto pt-[60px] pb-[30px] gap-x-28	">
          <div className="lg:grid grid-cols-12 items-center">
            <div className="lg:col-span-5 col-span-4 py-4 mb-2">
              <Link href="#">
                <img src="/imgs/logo-footer.png" alt="" />
              </Link>
            </div>
            <div className="col-span-7">
              <div className="text-lg font-bold">
                Công ty Cổ Phần Nguồn Nhân Lực Topmass Việt Nam
              </div>
              <div className="flex mt-2">
                <DocumentTextIcon className="w-6 mr-2 text-[#F37A20]" />
                Giấy phép đăng ký kinh doanh số:
                <span className="font-bold ml-2"> 0315264380</span>
              </div>
              <div className="flex mt-2">
                <MapPinIcon className="w-6 mr-2 text-[#F37A20]" />
                Trụ sở làm việc: 54/31 Phổ Quang, Phường 02, Quận Tân Bình, TP.
                Hồ Chí Minh
              </div>
              <div className="w-[90%] h-2.5 bg-gradient-to-r from-[#d14b00] to-[#f89e1b] mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#F55D00] to-[#3F2300] pt-3.5 pb-10 px-0 max-1280:px-2">
        <div className="container mx-auto text-white">
          <div className="md:grid grid-cols-3">
            <div className="col-span-1 mb-2">
              <div className="text-lg	font-bold">Liên hệ</div>
              <div className="text-[13px] mb-1 flex items-center">
                <PhoneIcon className="w-4 mr-1" />
                Hotline: 1900 255 836
              </div>
              <div className="text-[13px] flex items-center">
                <EnvelopeIcon className="w-4 mr-1" />
                Email: support@topmass.vn
              </div>
            </div>
            <div className="col-span-2">
              <div className="md:grid grid-cols-3">
                <div className="col-span-1 mb-2">
                  <div className="text-lg font-bold">Về Topmass</div>
                  {topMass.map((item) => {
                    return (
                      <div className="font-normal" key={item.title}>
                        <Link href={item.link}>{item.title}</Link>
                      </div>
                    );
                  })}
                </div>
                <div className="col-span-1 mb-2">
                  <div className="text-lg font-bold">Tạo CV Chuyên Nghiệp</div>
                  {cv.map((item) => {
                    return (
                      <div className="font-normal" key={item.title}>
                        <Link href={item.link}>{item.title}</Link>
                      </div>
                    );
                  })}
                </div>
                <div className="col-span-1 mb-2">
                  <div className="text-lg font-bold">Blog tuyển dụng</div>
                  {blog.map((item) => {
                    return (
                      <div className="font-normal" key={item.title}>
                        <Link href={item.link}>{item.title}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
