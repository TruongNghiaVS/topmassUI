import { IAllJobsProps } from "@/interface/job";
import { TitleCustom } from "./custom-title";
import { InfomationJobLike } from "./infomation-job/infomation-job-like";

export const JobSuggest = ({ jobs }: IAllJobsProps) => {
  return (
    <div className="max-1280:px-2">
      <div className="container mx-auto">
        <TitleCustom title="Việc làm phù hợp" className="mb-4" />
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {jobs?.map((item, index) => {
            return <InfomationJobLike key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
