import { IJob, IJobSameProps } from "@/interface/job";
import { InfomationJobSame } from "../infomation-job/infomation-job-same";

export const ResutlSearchJob = ({ jobs, mutate }: IJobSameProps) => {
  return (
    <div className=" mb-4">
      {jobs?.map((value: IJob, idx: number) => {
        return (
          <div className="mt-4" key={idx}>
            <InfomationJobSame item={value} mutate={mutate} />
          </div>
        );
      })}
    </div>
  );
};
