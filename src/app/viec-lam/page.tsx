"use client";
import { JobType } from "@/component/job-type";
import { Image } from "@/component/jobs/img";
import { JobTypePage } from "@/component/jobs/job-company";
import { SearchJobs } from "@/component/jobs/search-job";
import SliderJobs from "@/component/jobs/slider-job";
import { useState } from "react";
import useSWR from "swr";
import { GET_ALL_COMPANY, GET_JOBSEARCH_HOTJOB } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";

const JobsPage = () => {
  const [selectedValue, setSelectedValue] = useState("0");
  const [search, setSearch] = useState("");
  const { data: allJobs } = useSWR(
    `${GET_JOBSEARCH_HOTJOB}?TypeSearch=${selectedValue}&ValueType=${search}`,
    fetcher
  );
  const { data: companys } = useSWR(GET_ALL_COMPANY, fetcher);

  return (
    <div>
      <SliderJobs />
      <SearchJobs
        jobs={allJobs?.data}
        search={search}
        setSearch={setSearch}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <Image />
      <JobType />
      <JobTypePage companys={companys?.data} />
    </div>
  );
};

export default JobsPage;
