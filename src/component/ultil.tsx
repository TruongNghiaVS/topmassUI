import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { TitleCustom } from "./custom-title";
import Link from "next/link";

export const Ultil = () => {
  return (
    <div className="bg-[#DBDBDB] pt-8 pb-7 mt-6 max-1280:px-2">
      <div className="container mx-auto">
        <TitleCustom title="Công cụ tiện ích" className="mb-4" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 items-center lg:px-14 px-2">
          <div className=" sm:row-auto col-start-1 row-start-2 row-end-2 ">
            <div className="sm:inline-flex flex items-center px-4 py-2 bg-white rounded-xl mb-2	">
              <div className="p-2 bg-[#FCE5B4] rounded-full mr-4">
                <img src="/imgs/net-gross-icon.png" alt="" className="w-10" />
              </div>
              <div>
                <div>Tính lương NET và GROSS</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  <Link
                    href="/cong-cu/net-and-gross"
                    className="flex items-center"
                  >
                    Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:inline-flex flex items-center px-4 py-2 bg-white rounded-xl mb-2	">
              <div className="p-2 bg-[#FCE5B4] rounded-full mr-4">
                <img
                  src="/imgs/personal-icome-icon.png"
                  alt=""
                  className="w-10"
                />
              </div>
              <div>
                <div>Tính thuế thu nhập cá nhân</div>
                <div className="text-[#D14B00] text-[10px] ">
                  <Link
                    href="/cong-cu/thu-nhap-ca-nhan"
                    className="flex items-center"
                  >
                    Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:row-auto row-start-1 row-end-2 lg:col-auto col-span-2">
            <img
              src="/imgs/ultil.png"
              alt=""
              className="lg:w-full h-full md:w-auto mx-auto mb-2 sm:mb-0"
            />
          </div>
          <div className="text-end col-span-1 sm:row-auto row-start-3">
            <div className="sm:inline-flex flex items-center px-4 py-2 bg-white rounded-xl mb-2	">
              <div className="p-2 py-3 bg-[#FCE5B4] rounded-full mr-4">
                <img
                  src="/imgs/insuarance-unemployment-icon.png"
                  alt=""
                  className="w-10"
                />
              </div>
              <div className="text-start">
                <div>Tính bảo hiểm thất nghiệp</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  <Link
                    href="/cong-cu/bao-hiem-xa-hoi-that-nghiep"
                    className="flex items-center"
                  >
                    Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:inline-flex flex items-center px-4 py-2 bg-white rounded-xl mb-2	">
              <div className="p-2 bg-[#FCE5B4] rounded-full mr-4">
                <img
                  src="/imgs/social-insurance-icon.png"
                  alt=""
                  className="w-10"
                />
              </div>
              <div className="text-start">
                <div>Tính bảo hiểm xã hội 1 lần</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  <Link
                    href="/cong-cu/bao-hiem-xa-hoi-1-lan"
                    className="flex items-center"
                  >
                    Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
