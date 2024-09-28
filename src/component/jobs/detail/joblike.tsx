import { IAllJobsProps } from "@/app/interface/job";
import { TitleCustom } from "@/component/custom-title";
import { InfomationJobDetail } from "@/component/infomation-job/infomation-job-detail";

export const JobLike = ({ jobs = [] }: IAllJobsProps) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <TitleCustom
        title="Có thể bạn sẽ thích"
        className="font-bold text-lg mb-4"
      />
      {jobs.map((value, index) => {
        return (
          <div className="mt-2" key={index}>
            <InfomationJobDetail item={value} />
          </div>
        );
      })}
    </div>
  );
};
