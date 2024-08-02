"use client";

import { FilterIcon } from "@/theme/icons/filterBootstrapIcon";
import TmSelect from "../hook-form/select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ScrollFilterJob } from "./scroll-filter-job";
import { experiences, locations, prices } from "@/mockup-data/data";
import { HotJobs } from "./hot-jobs";

export const SearchJobs = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const [selectedValue, setSelectedValue] = useState<number>(0);

  const childrenSelect = [
    { value: 0, label: "Địa điểm" },
    { value: 1, label: "Mức lương" },
    { value: 2, label: "Kinh nghiệm" },
    { value: 3, label: "Ngành nghề" },
  ];

  return (
    <div className="pt-12 bg-[#EAE9E8] max-1280:px-2">
      <div className="container mx-auto">
        <div className="text-[22px] leading-[30px] font-bold flex">
          <img src="/imgs/img-job-hot.png" alt="" className="w-8 mr-2" />
          <div className="relative pb-2 after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D14B00] after:to-[#F89E1B]">
            Việc làm tốt nhất
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <div className="mr-4">
              <TmSelect
                register={register}
                icon={<FilterIcon className="w-4 mr-2" />}
                name="searchType"
                onChange={(evt) => setSelectedValue(+evt.target.value)}
                className="min-w-[250px]"
                children={childrenSelect.map((item) => {
                  return (
                    <option key={item.label} value={item.value}>
                      {item.label}
                    </option>
                  );
                })}
              />
            </div>
            {selectedValue == 0 && <ScrollFilterJob data={locations} />}
            {selectedValue == 1 && <ScrollFilterJob data={prices} />}
            {selectedValue == 2 && <ScrollFilterJob data={experiences} />}
            {selectedValue == 3 && <ScrollFilterJob data={locations} />}
          </div>
        </div>
        <div className="mt-2">
          {" "}
          <div className="pl-2.5 py-1.5 rounded-md border-[1px] border-solid border-[#8BCAFC] my-5 text-sm flex items-center bg-[#f0f6ff]">
            <img src="/imgs/light-note.png" alt="" className="w-4 mr-2" />
            Gợi ý:{" "}
            <span>
              Di chuột vào tiêu đề làm việc để xem thêm thông tin chi tiết
            </span>
          </div>
        </div>
        <HotJobs />
      </div>
    </div>
  );
};
