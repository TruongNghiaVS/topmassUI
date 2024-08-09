"use client";
import { useState } from "react";
import { SliderJob } from "./slider-job";
import { ScrollFilter } from "./scrol-filter";
import { TitleCustom } from "./custom-title";

export const HotJob = () => {
  const [value, setValue] = useState("1");

  return (
    <>
      <div className="bg-white max-1280:px-2">
        <div className="container mx-auto">
          <div className="lg:flex items-center justyfy-between whitespace-nowrap py-2">
            <TitleCustom title="Việc làm hấp dẫn" />
            <ScrollFilter />
          </div>
          <div className="pl-2.5 py-1.5 rounded-md border-[1px] border-solid border-[#8BCAFC] my-5 text-sm flex items-center bg-[#f0f6ff]">
            <img src="/imgs/light-note.png" alt="" className="w-4 mr-2" />
            Gợi ý:{" "}
            <span>
              Di chuột vào tiêu đề làm việc để xem thêm thông tin chi tiết
            </span>
          </div>

          <SliderJob />
        </div>
      </div>
    </>
  );
};
