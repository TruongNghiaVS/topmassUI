import { jobSlider } from "@/mockup-data/data";
import { InfomationJobLike } from "./infomation-job/infomation-job-like";
import { TitleCustom } from "./custom-title";

export const JobSuggest = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="max-1280:px-2">
      <div className="container mx-auto">
        <TitleCustom title="Việc làm phù hợp" className="mb-4" />
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
