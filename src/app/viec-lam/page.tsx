"use client";
import { JobType } from "@/component/job-type";
import { Image } from "@/component/jobs/img";
import { JobTypePage } from "@/component/jobs/job-company";
import { SearchJobs } from "@/component/jobs/search-job";
import SliderJobs from "@/component/jobs/slider-job";
import { useEffect, useState } from "react";
import { Option } from "@/component/hook-form/interface/interface";
import useSWR from "swr";
import {
  GET_JOBSEARCH_HOTJOB,
  GET_MASTERDATA_REALMS,
  GET_PROVINCE,
} from "@/utils/api-url";
import { fetcher } from "@/utils/axios";

const JobsPage = () => {
  const [provicesOptionData, setProvicesOptionData] = useState<Option[]>([]);
  const [dataInfoRealms, setdataInfoRealms] = useState<Option[]>([]);
  const { data: allProvinces } = useSWR(`${GET_PROVINCE}`, fetcher);
  const { data: allRealms } = useSWR(`${GET_MASTERDATA_REALMS}`, fetcher);
  const { data: allJobs, mutate: mutateGetAllJobs } = useSWR(
    `${GET_JOBSEARCH_HOTJOB}`,
    fetcher
  );

  useEffect(() => {
    if (allProvinces) {
      setProvicesOptionData([
        { label: "Địa điểm làm việc", value: "" },
        ...allProvinces.data.map((item: any) => {
          return {
            label: item.name,
            value: item.code,
          };
        }),
      ]);
    }

    if (allRealms) {
      setdataInfoRealms([
        { label: "Tất cả ngành nghề", value: "" },
        ...allRealms.map((item: any) => {
          return {
            label: item.text,
            value: item.id,
          };
        }),
      ]);
    }
  }, [allProvinces, allRealms]);

  return (
    <div>
      <SliderJobs
        allProvinces={provicesOptionData}
        allRealms={dataInfoRealms}
      />
      <SearchJobs allJobs={allJobs} />
      <Image />
      <JobType />
      <JobTypePage />
    </div>
  );
};

export default JobsPage;
