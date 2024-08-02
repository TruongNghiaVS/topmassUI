import { CloudArrowUpFillBootstrapIcon } from "@/theme/icons/cloudArrowUpFillBootstrapIcon";
import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import { InfomationJobCV } from "./job-cv-infomation";
import { jobCV } from "@/mockup-data/data";
import { InfomationUser } from "./infomation-user-right";

export const RegisterCV = () => {
  const list = [1, 2, 3];
  return (
    <div className="py-2 bg-[#EAE9E8] pb-10">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-4 my-6 max-1280:px-2">
          <div className="col-span-8">
            <div className="">
              <img
                src="/imgs/img-register-cv.png"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 pb-10 mt-4">
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">
                  CV đã tạo trên Topmass
                </div>
                <button className="py-2 px-4 text-white bg-gradient-to-r from-[#F89D1B] to-[#F37B20] font-medium rounded-3xl">
                  + Tạo mới
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <ClipboardDocumentListIcon className="w-20 text-default" />
              </div>
              <div className="text-center mt-3">Chưa tạo CV</div>
            </div>
            <div className="bg-white rounded-2xl p-6 pb-10 mt-8">
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">
                  CV đã tải trên Topmass
                </div>
                <button className="py-2 px-4 text-white bg-gradient-to-r from-[#F89D1B] to-[#F37B20] font-medium rounded-3xl flex items-center">
                  <CloudArrowUpFillBootstrapIcon className="w-6 mr-2" />
                  Tải lên
                </button>
              </div>
              <div className="flex justify-center mt-6">
                <ClipboardDocumentListIcon className="w-20 text-default" />
              </div>
              <div className="text-center mt-3">Chưa tải CV</div>
            </div>
            <div className="mt-4">
              <div className="font-medium text-lg">
                Việc làm phù hợp với bạn
              </div>
              <div className="text-lg font-normal">
                Để nhận được nhiều gợi ý phù hợp hơn, hãy bật "tìm việc" bạn nhé
              </div>
            </div>
            <div className="mt-4">
              {list.map((index) => {
                return (
                  <div key={index.toString() + jobCV.title} className="mt-2">
                    <InfomationJobCV item={jobCV} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-4 hidden sm:block">
            <InfomationUser />
          </div>
        </div>
      </div>
    </div>
  );
};
