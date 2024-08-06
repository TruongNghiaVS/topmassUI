import { jobSlider } from "@/mockup-data/data";
import { InfomationJobLike } from "./infomation-job-like";

export const JobSuggest = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="max-1280:px-2">
      <div className="container mx-auto">
        <div className="text-[22px] px-0 overflow-visible mx-4 text-defaultText font-bold capitalize leading-[44px] relative mr-14 flex my-4">
          <img src="/imgs/img-job-hot.png" alt="" className="w-auto mr-2" />
          <div className="relative pb-2 after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D14B00] after:to-[#F89E1B]">
            Công việc gợi ý
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {list.map((value) => {
            return (
              <InfomationJobLike
                key={value.toString() + jobSlider.title}
                item={jobSlider}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
