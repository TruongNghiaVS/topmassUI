import { ArrowRightIcon } from "@heroicons/react/16/solid";

export const CreateCv = () => {
  return (
    <>
      <div className="sm:mt-4 px-2 bg-[url(/imgs/bg-create-cv.png)] bg-no-repeat bg-[length:100%_100%]">
        <div className="container mx-auto">
          <div className="sm:py-[90px] py-10">
            <div className="text-white sm:text-[32px] text-lg font-bold mb-4">
              Hồ sơ thật ấn tượng với nhà tuyển dụng <br /> bằng công cụ
              <div className="ml-2 inline-block px-4 bg-white rounded-3xl py-2 text-[#FF8206]">
                Tạo CV
              </div>
            </div>
            <div className="text-white text-base">
              Tạo CV đơn giản với công cụ có sẳn, những cv mẫu đã được <br />
              NTD đánh giá cao trước khi cho ra mắt trên hệ thống.
            </div>
            <div className="ml-4 mt-4 inline-flex px-4 py-2 text-white bg-gradient-to-r from-[#f7931e] to-[#ce4500] rounded-3xl font-bold text-xl">
              Tạo CV ngay <ArrowRightIcon className="w-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
