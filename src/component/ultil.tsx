import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export const Ultil = () => {
  return (
    <div className="bg-[#DBDBDB] pt-8 pb-7 mt-6">
      <div className="container mx-auto">
        <div className="text-center text-default font-bold text-4xl mb-8">
          Công cụ tiện ích
        </div>
        <div className="grid grid-cols-3 gap-4 items-center px-14">
          <div>
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div>
                <div>Tính bảo hiểm thất nghiệp</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div>
                <div>Tính lãi suất kép</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div>
                <div>Tính thuế thu nhập cá nhân</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/img/ultil.png" alt="" className="w-full h-full" />
          </div>
          <div className="text-end">
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div className="text-start">
                <div>Tính bảo hiểm thất nghiệp</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
              <div className="w-12 h-12 bg-[#FCE5B4] rounded-full mr-4"></div>
              <div className="text-start">
                <div>Lập kế hoạch tiết kiệm</div>
                <div className="text-[#D14B00] text-[10px] flex items-center">
                  Sử dụng ngay <ArrowLongRightIcon className="w-4" />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center px-6 py-4 bg-white rounded-xl mb-2	">
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
