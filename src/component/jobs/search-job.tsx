"use client";

import { FilterIcon } from "@/theme/icons/filterBootstrapIcon";
import TmSelect from "../hook-form/select";
import { useForm } from "react-hook-form";
import { ScrollFilterJob } from "./scroll-filter-job";
import { prices } from "@/mockup-data/data";
import { HotJobs } from "./hot-jobs";
import { Career, Experiences, Provinces } from "@/module/helper/master-data";
import { ISearchJobWithTypeFilter } from "@/interface/job";

export const SearchJobs = ({
  jobs,
  search,
  setSearch,
  selectedValue,
  setSelectedValue,
}: ISearchJobWithTypeFilter) => {
  const { control } = useForm();

  const { listProvinces } = Provinces();
  const { listExperiences } = Experiences();
  const { listCareers } = Career();

  const childrenSelect = [
    { value: "0", label: "Địa điểm" },
    { value: "1", label: "Mức lương" },
    { value: "2", label: "Kinh nghiệm" },
    { value: "3", label: "Ngành nghề" },
  ];

  return (
    <div className="pt-6 bg-[#EAE9E8] max-1280:px-2">
      <div className="container mx-auto">
        <div className="text-base leading-[30px] font-bold flex">
          <img src="/imgs/img-job-hot.png" alt="" className="w-auto mr-2" />
          <div className="relative after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D14B00] after:to-[#F89E1B]">
            Việc làm tốt nhất
          </div>
        </div>
        <div className="mt-2">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="mr-4">
              <TmSelect
                icon={<FilterIcon className="w-4 mr-2" />}
                name="searchType"
                onChange={(evt) => {
                  setSelectedValue(evt.target.value), setSearch("");
                }}
                className="min-w-[250px]"
                control={control}
                options={childrenSelect}
              />
            </div>
            {selectedValue === "0" && (
              <ScrollFilterJob
                optionSearch={listProvinces}
                search={search}
                setSearch={setSearch}
              />
            )}
            {selectedValue === "1" && (
              <ScrollFilterJob
                optionSearch={prices}
                search={search}
                setSearch={setSearch}
              />
            )}
            {selectedValue === "2" && (
              <ScrollFilterJob
                optionSearch={listExperiences}
                search={search}
                setSearch={setSearch}
              />
            )}
            {selectedValue === "3" && (
              <ScrollFilterJob
                optionSearch={listCareers}
                search={search}
                setSearch={setSearch}
              />
            )}
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
        <HotJobs jobs={jobs} />
      </div>
    </div>
  );
};
