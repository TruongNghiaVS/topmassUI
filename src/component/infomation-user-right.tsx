import { CameraIcon, UserCircleIcon } from "@heroicons/react/16/solid";

export const InfomationUser = () => {
  return (
    <div className="rounded-2xl bg-white p-4 pb-10">
      <div className="flex items-center">
        <div className="mr-6 relative">
          <img src="/imgs/no-img.png" alt="" className="" />
          <div className="absolute right-0 bottom-0 ">
            <button className=" p-1 rounded-full bg-gradient-to-r from-[#F89E1B] to-[#F37A20]">
              <CameraIcon className="w-4 text-white" />
            </button>
          </div>
        </div>
        <div>
          <div>Chào bạn</div>
          <div>MKT VietStar</div>
          <div className="text-xs inline-block px-2 py-1 bg-[#555555] text-white rounded">
            Tài khoản đã xác thực
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer " />
            <div className="relative w-11 h-6 bg-[#9A9A9B] peer-focus:outline-none min-w-11 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-[#F89E1B] peer-checked:to-[#F37A20]"></div>
            <span className="ms-3 text-sm font-medium text-[#555555]">
              Đang tắt tìm việc
            </span>
          </label>
        </div>
        <div className="text-xs mt-2 text-normal">
          Bật tìm việc giúp hồ sơ của bạn được đề xuất nhiều công việc phù hợp
          mỗi ngày.
        </div>
      </div>
      <div className="mt-5">
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer " />
            <div className="relative w-11 h-6 bg-[#9A9A9B] peer-focus:outline-none min-w-11 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-500 peer-checked:bg-gradient-to-r peer-checked:from-[#F89E1B] peer-checked:to-[#F37A20]"></div>
            <span className="ms-3 text-sm font-medium text-[#555555]">
              Cho phép nhà tuyển dụng tìm kiếm hồ sơ
            </span>
          </label>
        </div>
        <div className="text-xs mt-2 text-normal">
          Nhà Tuyển Dụng có thể chủ động tìm kiếm và kết nối với bạn.
        </div>
      </div>
    </div>
  );
};
