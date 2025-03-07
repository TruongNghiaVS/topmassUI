"use client";
import { SliderJob } from "./slider-job";
import { ScrollFilter } from "./scrol-filter";
import { TitleCustom } from "./custom-title";
import { IHotJobProps } from "@/interface/job";

export const HotJob = ({ search, setSearch, jobs, mutate }: IHotJobProps) => {
  return (
    <>
      <div className="bg-[#f3f5f7] max-1280:px-2 pb-8">
        <div className="container mx-auto">
          <div className="lg:flex items-center justyfy-between whitespace-nowrap py-2">
            <TitleCustom title="Việc làm hấp dẫn" />
            <ScrollFilter search={search} setSearch={setSearch} />
          </div>
          <div className="pl-2.5 py-1.5 rounded-md border-[1px] border-solid border-[#8BCAFC] my-5 text-sm flex items-start bg-[#f0f6ff]">
            <img src="/imgs/light-note.png" alt="" className="w-4 mr-2" />
            <div className="whitespace-nowrap mr-1">Gợi ý:</div>
            <span>
              Di chuột vào tiêu đề làm việc để xem thêm thông tin chi tiết
            </span>
          </div>

          <SliderJob jobs={jobs} mutate={mutate} />
        </div>
      </div>
    </>
  );
};
