import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { InfomationJob } from "../infomation-job/infomation-job";
import { ISearchJobsParram } from "@/app/interface/interface";
import { useState } from "react";

export const HotJobs = ({ allJobs }: ISearchJobsParram) => {
  const [page, setPage] = useState(allJobs ? allJobs.length : 1);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 ">
          {allJobs?.map((item, idx) => {
            return <InfomationJob key={idx} item={item} />;
          })}
        </div>
        <div className="py-4  flex justify-center items-center">
          <button
            className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]  "
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ChevronLeftIcon className="text-[#F37A20] w-4" />
          </button>
          <div className="mx-2">
            {currentPage}/{page} Trang
          </div>
          <button
            className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] "
            disabled={currentPage === page}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRightIcon className="text-[#F37A20] w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
