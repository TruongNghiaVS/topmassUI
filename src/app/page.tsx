"use client";

import { Career } from "@/component/career";
import { CreateCv } from "@/component/create-cv";
import { Description } from "@/component/description";
import { HotCompany } from "@/component/hot-company";
import { HotJob } from "@/component/hot-job";
import { JobSuggest } from "@/component/job-suggest";
import { JobType } from "@/component/job-type";
import { Slider } from "@/component/slider";
import { Ultil } from "@/component/ultil";
import {
  GET_ALL_COMPANY,
  GET_ALLBLOGS_BYCATEGORY,
  GET_HOT_JOB,
  GET_SUITABLEJOB,
} from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [search, setSearch] = useState("-1");
  const { data: companys } = useSWR(GET_ALL_COMPANY, fetcher);
  const { data: allJobs, mutate: mutateAllJobs } = useSWR(
    `${GET_HOT_JOB}?ModeGet=${search}`,
    fetcher
  );
  const { data: suitableJob, mutate: suitableMutate } = useSWR(
    `${GET_SUITABLEJOB}?Limit=9&Page=1`,
    fetcher
  );

  const { data: blogs } = useSWR(
    `${GET_ALLBLOGS_BYCATEGORY}?SlugCategory=cam-nang-nghe-nghiep&limit=4`,
    fetcher
  );

  return (
    <div className="bg-white">
      <Slider />
      <HotJob
        search={search}
        setSearch={setSearch}
        jobs={allJobs?.data}
        mutate={mutateAllJobs}
      />
      <HotCompany companys={companys?.data} />
      <CreateCv />
      <JobSuggest jobs={suitableJob?.data} mutate={suitableMutate} />
      <JobType />
      <Career blogs={blogs?.data} />
      <Ultil />
      {/* <Description /> */}
    </div>
  );
}
