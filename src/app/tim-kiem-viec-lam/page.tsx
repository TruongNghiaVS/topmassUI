"use client";

import { ResutlSearchJob } from "@/component/jobs/results-search";
import { SearchJobForm } from "@/component/search-job-form";
import { SEARCH_JOBS } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IFormSearchJob } from "@/interface/search-job";
import useSWR from "swr";
import { convertParams } from "@/utils/business/custom-hook";
import { Paging } from "@/component/paging";

export default function SearchJob() {
  const [search, setSearch] = useState<IFormSearchJob>({
    ModeGet: "",
    KeyWord: "",
    Location: "",
    Field: "",
    RankLevel: "",
    TypeOfWork: "",
    ExperienceId: -1,
    SalaryFrom: -1,
    SalaryTo: -1,
    Salary: -1,
    JobType: "",
    Gender: -1,
  });
  const [modeOrderBy, setModeOderBy] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    if (params) {
      setSearch((prevSearch) => ({
        ...prevSearch,
        KeyWord: params.KeyWord ? params.KeyWord : "",
        Location: params.Location ? params.Location : "",
        Field: params.Field ? params.Field : "",
      }));
    }
  }, []);

  const { data: dataSearch, mutate } = useSWR(
    `${SEARCH_JOBS}?${convertParams(
      search
    )}&Limit=10&Page=${currentPage}&ModeOrderBy=${
      modeOrderBy === 0 ? -1 : modeOrderBy
    }`,
    fetcher
  );

  const list = [1, 2];
  return (
    <div>
      <div className="bg-bgHeaderJobCustom pb-4">
        <div className="container mx-auto">
          <div className="uppercase text-[26px] leading-[34px] text-center text-[#F26700] font-bold pt-8 pb-16">
            Tìm việc làm nhanh chóng, phù hợp với nhu cầu của bạn
          </div>
          <SearchJobForm
            search={search}
            setSearch={setSearch}
            setModeOderby={setModeOderBy}
            modeOderby={modeOrderBy}
          />
        </div>
      </div>
      <div className="max-1280:px-2">
        <div className="mx-auto container">
          <div className="sm:grid grid-cols-12 gap-4 ">
            <div className="xl:col-span-8 md:col-span-7 mb-4">
              <ResutlSearchJob jobs={dataSearch?.data} mutate={mutate} />
              <Paging
                lengthData={dataSearch?.totalRecord}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>

            <div className="xl:col-span-4 md:col-span-5 pb-4 mt-4">
              <div>
                {list.map((value) => {
                  return (
                    <img
                      key={value}
                      src={`/imgs/banner-${value}.png`}
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
