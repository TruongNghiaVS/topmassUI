"use client";

import { ResutlSearchJob } from "@/component/jobs/results-search";
import { SearchJobForm } from "@/component/search-job-form";
import { SEARCH_JOBS } from "@/utils/api-url";
import axiosInstance, { fetcher } from "@/utils/axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useLoading } from "../context/loading";
import { IJob } from "@/interface/job";
import { toast } from "react-toastify";
import { IFormSearchJob } from "@/interface/search-job";

export default function SearchJob() {
  const [search, setSearch] = useState<IFormSearchJob>({
    ModeGet: "",
    KeyWord: "",
    Location: "",
    Field: "",
    RankLevel: "",
    TypeOfWork: "",
  });
  const [dataSearch, setDataSearch] = useState<IJob[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const { setLoading } = useLoading();
  useEffect(() => {
    if (params) {
      setSearch((prevSearch) => {
        prevSearch.KeyWord = params.KeyWord ? params.KeyWord : "";
        prevSearch.Location = params.Location ? params.Location : "";
        prevSearch.Field = params.Field ? params.Field : "";
        return prevSearch;
      });
      searchJob();
    }
  }, [searchParams]);

  const searchJob = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(SEARCH_JOBS, {
        params: search,
      });
      setDataSearch(res.data.data);
    } catch (error) {
      toast.error("Lấy thông tin không thành công");
    } finally {
      setLoading(false);
    }
  };

  const list = [1, 2, 3, 4, 5];
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
            getJobSearch={searchJob}
          />
        </div>
      </div>
      <div className="max-1280:px-2">
        <div className="mx-auto container">
          <div className="sm:grid grid-cols-12 gap-4 ">
            <div className="xl:col-span-8 md:col-span-7">
              <ResutlSearchJob
                jobs={dataSearch}
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
