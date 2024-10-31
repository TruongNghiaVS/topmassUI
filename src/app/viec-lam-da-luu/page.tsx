"use client";
import { useState } from "react";
import CustomRadio from "@/component/hook-form/customRadio";
import { InfomationJobSave } from "@/component/infomation-job/infomation-job-save";
import useSWR from "swr";
import { GET_JOB_SAVE } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { IJob } from "@/interface/job";

export default function JobSave() {
  const [selectedRadio, setSelectedRadio] = useState(1);
  const { data: jobSave, error: errJobSave, mutate } = useSWR(
    `${GET_JOB_SAVE}?OrderBy=${selectedRadio === -1 ? 1 : selectedRadio}`,
    fetcher
  );
  const options = [
    { label: "Cập nhật gần nhất", value: 1 },
    { label: "Cần tuyển gấp", value: -1 },
    { label: "Lương cao nhất", value: 2 },
  ];

  const handleRadioChange = (value: string) => {
    setSelectedRadio(+value);
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
                Danh sách <span className="font-bold">{jobSave?.length}</span>{" "}
                việc làm đã lưu
              </div>
              <div className="text-xs font-normal p-4 border-b flex justify-between">
                <div>Ưu tiên hiển thị:</div>
                {options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CustomRadio
                      value={option.value}
                      selectedValue={selectedRadio}
                      onChange={handleRadioChange}
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
              <div className="my-10 text-center p-4">
                {jobSave?.length > 0 ? (
                  jobSave?.map((item: IJob, index: number) => {
                    return (
                      <div key={index} className="mt-4">
                        <InfomationJobSave item={item} mutate={mutate} />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <div className="font-bold text-xs mt-4">
                      Bạn chưa lưu công việc nào
                    </div>
                    <div className="font-normal text-xs mt-4">
                      Tìm kiếm ngay những công việc phù hợp với bản thân, hãy
                      lưu lại chúng để
                      <br />
                      chắc chắn rằng bạn không bỏ lỡ điều gì hết nhé!
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/imgs/img-no-save.png"
                        alt=""
                        className="w-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            {/* <InfomationCompany item={companys} /> */}
            <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-[#F15A24] to-[#F7931E]">
              <img
                src="/imgs/banner-1.png"
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
