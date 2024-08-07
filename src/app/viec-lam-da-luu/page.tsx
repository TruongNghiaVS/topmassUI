"use client";
import { InfomationUser } from "@/component/infomation-user-right";
import { JobSame } from "@/component/jobs/detail/job-same";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CustomRadio from "@/component/hook-form/customRadio";
import { companys, jobSave } from "@/mockup-data/data";
import { InfomationCompany } from "../cong-ty/infomation-company";
import { InfomationJobSave } from "@/component/infomation-job/infomation-job-save";

export default function JobSave() {
  const [selectedRadio, setSelectedRadio] = useState("");

  const options = ["Cập nhật gần nhất", "Cần tuyển gấp", "Lương cao nhất"];

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
    console.log("Selected radio:", value);
  };

  return (
    <div className="bg-[#F4F5F5] max-1280:px-2">
      <div className="container mx-auto ">
        <div className="py-6 sm:grid grid-cols-12 gap-4">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="py-8 pl-8 bg-[url(/imgs/bg-title-company.png)] bg-no-repeat bg-[length:100%_100%] text-white rounded-lg overflow-hidden mb-4">
              <div className="text-2xl font-bold">Việc làm đã lưu</div>
              <div className="text-base font-normal mt-2">
                Xem lại danh sách những việc làm đã lưu. Đừng bỏ
                <br /> qua những công việc phù hợp với bạn
              </div>
            </div>
            <div className="bg-white rounded overflow-hidden">
              <div className="text-xs font-normal p-4 border-b">
                Danh sách <span className="font-bold">1</span> việc làm đã lưu
              </div>
              <div className="text-xs font-normal p-4 border-b flex justify-between">
                <div>Ưu tiên hiển thị:</div>
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <CustomRadio
                      value={option}
                      selectedValue={selectedRadio}
                      onChange={handleRadioChange}
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
              <div className="my-10 text-center p-4">
                <div>
                  <InfomationJobSave item={jobSave} />
                </div>
                <div className="flex justify-center">
                  <img src="/imgs/img-no-save.png" alt="" className="w-auto" />
                </div>
                <div className="font-bold text-xs mt-4">
                  Bạn chưa lưu công việc nào
                </div>
                <div className="font-normal text-xs mt-4">
                  Tìm kiếm ngay những công việc phù hợp với bản thân, hãy lưu
                  lại chúng để
                  <br />
                  chắc chắn rằng bạn không bỏ lỡ điều gì hết nhé!
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <InfomationCompany item={companys} />
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
  );
}
