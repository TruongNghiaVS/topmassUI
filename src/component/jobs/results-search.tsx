import { IInfomationJobSameProps } from "@/interface/infomation-job";
import { InfomationJobSame } from "../infomation-job/infomation-job-same";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export const ResutlSearchJob = ({ item }: IInfomationJobSameProps) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className=" mb-8">
      {list.map((value) => {
        return (
          <div className="mt-4" key={value.toString() + item.title}>
            <InfomationJobSame item={item} />
          </div>
        );
      })}
      <div className="text-center mx-auto flex justify-center mt-4">
        <button
          id="prev-hot-job"
          className="border border-[#F37A20] rounded-full border-[1px] p-1 mr-2"
        >
          <ChevronLeftIcon className="text-[#F37A20] w-4" />
        </button>

        <button className="min-w-[26px] mr-1 px-2 py-1 text-xs rounded-full bg-[#F37A20] text-white ">
          1
        </button>
        <button className="min-w-[26px] mr-1 border border-[#F37A20] rounded-full border-[1px] px-2 py-1 text-xs">
          2
        </button>
        <button className="min-w-[26px] mr-1 border border-[#F37A20] rounded-full border-[1px] px-2 py-1 text-xs">
          3
        </button>
        <button className="min-w-[26px] border border-[#F37A20] rounded-full border-[1px] px-2 py-1 text-xs">
          4
        </button>
        <button
          id="next-hot-job"
          className="border border-[#F37A20] rounded-full border-[1px] p-1 ml-2"
        >
          <ChevronRightIcon className="text-[#F37A20] w-4" />
        </button>
      </div>
    </div>
  );
};
