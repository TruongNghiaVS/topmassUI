"use client";

import { FilterSearchForm } from "@/component/filter-search-job";
import { ResutlSearchJob } from "@/component/jobs/results-search";
import { SearchJobForm } from "@/component/search-job-form";
import { SEARCH_JOBS } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { useState } from "react";
import useSWR from "swr";

export default function SearchJob() {
  const { data: jobs } = useSWR(SEARCH_JOBS, fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const list = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="bg-bgHeaderJobCustom pb-4">
        <div className="container mx-auto">
          <div className="uppercase text-[26px] leading-[34px] text-center text-[#F26700] font-bold pt-8 pb-16">
            Tìm việc làm nhanh chóng, phù hợp với nhu cầu của bạn
          </div>
          <SearchJobForm />
          <FilterSearchForm />
        </div>
      </div>
      <div className="max-1280:px-2">
        <div className="mx-auto container">
          <div className="sm:grid grid-cols-12 gap-4 ">
            <div className="xl:col-span-8 md:col-span-7">
              <ResutlSearchJob
                jobs={jobs?.data}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div className="xl:col-span-4 md:col-span-5 pb-4 ">
              <div>
                {list.map((value) => {
                  return (
                    <img
                      key={value}
                      src="/imgs/img-no.png"
                      alt=""
                      className="w-full rounded-lg mt-4"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
