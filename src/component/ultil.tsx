import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { TitleCustom } from "./custom-title";

export const Ultil = () => {
  return (
    <div className="bg-[#DBDBDB] pt-8 pb-7 mt-6 max-1280:px-2">
      <div className="container mx-auto">
        <TitleCustom title="Công cụ tiện ích" className="mb-4" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 items-center lg:px-14 px-2">
          <div className=" sm:row-auto col-start-1 row-start-2 row-end-2 ">
            <div className="sm:inline-flex flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div>
                <div>Tính lương NET và GROSS</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
            <div className="sm:inline-flex flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div>
                <div>Tính thuế thu nhập cá nhân</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
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
            <div className="sm:inline-flex flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div className="text-start">
                <div>Tính bảo hiểm thất nghiệp</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
            <div className="sm:inline-flex flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div className="text-start">
                <div>Tính bảo hiểm thất nghiệp 1 lần</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
