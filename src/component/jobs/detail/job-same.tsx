import { InfomationJobSame } from "@/component/job-same-infomation";
import { jobSame } from "@/mockup-data/data";

export const JobSame = () => {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="text-[22px] leading-[30px] font-bold flex my-8">
        <img src="/imgs/img-job-hot.png" alt="" className="w-8 mr-2" />
        <div className="relative pb-2 after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[#D14B00] after:to-[#F89E1B]">
          Việc làm tương tự
        </div>
      </div>
      <div>
        {list.map((value) => {
          return (
            <InfomationJobSame
              key={value.toString() + jobSame.title}
              item={jobSame}
            />
          );
        })}
      </div>
    </div>
  );
};
