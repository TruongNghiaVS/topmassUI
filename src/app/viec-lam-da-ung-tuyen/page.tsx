"use client";
import CustomSelect from "@/component/hook-form/customSelect";
import { InfomationUser } from "@/component/infomation-user-right";
import { JobSame } from "@/component/jobs/detail/job-same";
import { RELATION_JOB } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

export default function JobApply() {
  const [selectedValue, setSelectedValue] = useState("");
  const { data: jobSame, error: errorJobSame } = useSWR(
    `${RELATION_JOB}?JobId=12`,
    fetcher
  );
  const options = [
    { value: 1, label: "Đã ứng tuyển" },
    { value: 2, label: "NTD đã xem hồ sơ" },
    { value: 3, label: "Hồ sơ phù hợp" },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
  };

  return (
    <div className="bg-[#F4F5F5] max-1280:px-2">
      <div className="container mx-auto ">
        <div className="py-6 sm:grid grid-cols-12 gap-4">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="bg-white p-4 rounded">
              <div className="flex justify-between items-center rounded">
                <div className="md:text-xl text-base font-normal">
                  Công việc đã ứng tuyển
                </div>
                <div>
                  <CustomSelect
                    options={options}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className="my-10 text-center">
                <div className="flex justify-center">
                  <img src="/imgs/img-no-apply.png" alt="" className="w-auto" />
                </div>
                <div className="font-bold text-lg mt-4">
                  Bạn chưa ứng tuyển công việc nào
                </div>
                <div className="font-normal text-base my-4">
                  Hãy bắt đầu hành trình thành công của bạn với hàng nghìn việc
                  làm chất lượng tại Topmass
                </div>
                <Link
                  href="#"
                  className="px-4 py-2 text-white bg-[#F37A20] rounded text-lg font-bold"
                >
                  Tìm việc ngay
                </Link>
              </div>
            </div>
            <div className="sm:hidden block">
              <InfomationUser />
            </div>
            <div className="bg-white p-4 rounded mt-8">
              <JobSame jobs={jobSame?.data} />
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <div className="sm:block hidden">
              <InfomationUser />
            </div>
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
