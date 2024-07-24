import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const CreateCv = () => {
  return (
    <>
      <div className="mt-4 mx-5 bg-[url(/img/bg-create-cv.png)] bg-no-repeat bg-[length:100%_100%]">
        <div className="container mx-auto">
          <div className="py-[90px] ">
            <div className="text-white text-[32px] font-bold mb-4">
              Hồ sơ thật ấn tượng với nhà tuyển dụng <br /> bằng công cụ
              <div className="ml-2 inline-block px-4 bg-white rounded-3xl py-2 text-[#FF8206]">
                Tạo CV
              </div>
            </div>
            <div className="text-white text-base">
              Tạo CV đơn giản với công cụ có sẳn, những cv mẫu đã được <br />
              NTD đánh giá cao trước khi cho ra mắt trên hệ thống.
            </div>
            <div className="ml-4 mt-4 inline-block px-4 py-2 text-white bg-gradient-to-r from-[#f7931e] to-[#ce4500] rounded-3xl font-bold text-xl">
              Tạo CV ngay <ArrowRightAltIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
