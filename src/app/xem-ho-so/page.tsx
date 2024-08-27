import Link from "next/link";
import { CompanySeenCV } from "./company-see-cv";
import { InfomationJobSee } from "@/component/infomation-job/infomation-job-see";
import { jobSave } from "@/mockup-data/data";
import { InfomationUser } from "@/component/infomation-user-right";

export default function EmployeeSeeCv() {
  const list = [1, 2, 3, 4];
  return (
    <div className="bg-[#F4F5F5] max-1280:px-2">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-6 py-8">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="p-4 bg-white rounded-lg">
              <div className="text-center font-normal text-xl">
                Chưa có nhà tuyển dụng nào xem hồ sơ của bạn
              </div>
              <div className="mt-4 text-center font-normal">
                Để dễ dàng kết nối với nhà tuyển dụng, hãy{" "}
                <span className="text-default">tạo CV</span> thật ấn tượng và{" "}
                <span className="text-default">cài đặt gợi ý việc làm</span>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/tao-cv"
                  className="mr-2 px-2 py-1 text-white bg-[#F37A20] rounded"
                >
                  Tạo CV
                </Link>
                <Link
                  href="/viec-lam"
                  className="mr-2 px-2 py-1 text-white bg-[#F37A20] rounded"
                >
                  Gợi ý tìm việc làm
                </Link>
              </div>
              {list.map((value) => {
                return (
                  <div className="mt-4" key={value}>
                    <CompanySeenCV />
                  </div>
                );
              })}
            </div>
            <div className="p-4 rounded-lg mt-8 bg-white">
              {list.map((value) => {
                return (
                  <div className="mt-4" key={value}>
                    <InfomationJobSee item={jobSave} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <div>
              <InfomationUser />
              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-[#F15A24] to-[#F7931E]">
                <img
                  src="/imgs/img-no.png"
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}