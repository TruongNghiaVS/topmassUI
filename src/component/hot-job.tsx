"use client";
import { useState } from "react";
import { SliderJob } from "./slider-job";
import { ScrollFilter } from "./scrol-filter";

export const HotJob = () => {
  const [value, setValue] = useState("1");

  return (
    <>
      <div className="bg-white max-1280:px-2">
        <div className="container mx-auto">
          <div className="lg:flex items-center justyfy-between whitespace-nowrap py-2">
            <div className="text-[22px] px-0 overflow-visible mx-4 text-defaultText font-bold capitalize leading-[44px] relative mr-14 flex">
              <img src="/imgs/img-job-hot.png" alt="" className="auto mr-2" />
              <div className="relative pb-2 after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D14B00] after:to-[#F89E1B]">
                Việc làm tương tự
              </div>
            </div>
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
