import { InfomationJobSame } from "@/component/infomation-job/infomation-job-same";
import { IAllJobsProps } from "@/interface/job";

export const JobSame = ({ jobs = [], mutate }: IAllJobsProps) => {
  return (
    <div>
      <div className="text-base leading-[30px] font-bold flex my-8">
        <img src="/imgs/img-job-hot.png" alt="" className="w-auto mr-2" />
        <div className="relative after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D14B00] after:to-[#F89E1B]">
          Việc làm tương tự
        </div>
      </div>
      <div>
        {jobs?.map((data, idx) => {
          return (
            <div className="mt-4" key={idx}>
              <InfomationJobSame item={data} mutate={mutate} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
