import { TitleCustom } from "@/component/custom-title";
import { InfomationJobLikeDetail } from "@/component/infomation-job/infomation-job-like-detail";
import { IAllJobsProps } from "@/interface/job";

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
            <InfomationJobLikeDetail item={value} />
          </div>
        );
      })}
    </div>
  );
};
