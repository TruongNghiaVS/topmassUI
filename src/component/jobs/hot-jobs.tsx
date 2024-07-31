import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { InfomationJob } from "../job-infomation";
import { jobSlider } from "@/mockup-data/data";

export const HotJobs = () => {
  const listIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 ">
          {listIndex.map((value) => {
            return (
              <InfomationJob
                key={value.toString() + jobSlider.title}
                item={jobSlider}
              />
            );
          })}
        </div>
        <div className="py-4  flex justify-center items-center">
          <button className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]  ">
            <ChevronLeftIcon className="text-[#F37A20] w-4" />
          </button>
          <div className="mx-2">1/9 Trang</div>
          <button className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] ">
            <ChevronRightIcon className="text-[#F37A20] w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
