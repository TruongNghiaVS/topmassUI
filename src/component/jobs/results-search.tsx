import { IJob, IJobSameProps } from "@/app/interface/job";
import { InfomationJobSame } from "../infomation-job/infomation-job-same";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export const ResutlSearchJob = ({
  jobs,
  currentPage,
  setCurrentPage,
}: IJobSameProps) => {
  const lengthJob = jobs?.length;
  let length = lengthJob - (lengthJob % 10);
  length = lengthJob % 10 > 0 ? length + 1 : length;
  const arrLength = Array.from({ length: length }, (_, i) => {
    return i + 1;
  }).filter((i) => i > 0);
  return (
    <div className=" mb-8">
      {jobs?.map((value: IJob, idx: number) => {
        return (
          <div className="mt-4" key={idx}>
            <InfomationJobSame item={value} />
          </div>
        );
      })}
      <div className="text-center mx-auto flex justify-center mt-4">
        <button
          id="prev-hot-job"
          className="border border-[#F37A20] rounded-full border-[1px] p-1 mr-2"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="text-[#F37A20] w-4" />
        </button>
        {arrLength.map((item) => {
          return (
            <button
              key={item}
              className={`min-w-[26px] mr-1 border border-[#F37A20] ${
                currentPage === item
                  ? "bg-[#F37A20] text-white"
                  : "text-[#F37A20]"
              } rounded-full border-[1px] px-2 py-1 text-xs`}
            >
              {item}
            </button>
          );
        })}
        <button
          id="next-hot-job"
          className="border border-[#F37A20] rounded-full border-[1px] p-1 ml-2"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
          disabled={currentPage === length}
        >
          <ChevronRightIcon className="text-[#F37A20] w-4" />
        </button>
      </div>
    </div>
  );
};
