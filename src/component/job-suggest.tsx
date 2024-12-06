import { IAllJobsProps } from "@/interface/job";
import { TitleCustom } from "./custom-title";
import { InfomationJobLike } from "./infomation-job/infomation-job-like";

export const JobSuggest = ({ jobs, mutate }: IAllJobsProps) => {
  return (
    <div className="max-1280:px-2 mt-4">
      <div className="container mx-auto px-1 ">
        <TitleCustom title="Việc làm phù hợp" className="mb-4" />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {jobs?.map((item, index) => {
            return (
              <InfomationJobLike key={index} item={item} mutate={mutate} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
