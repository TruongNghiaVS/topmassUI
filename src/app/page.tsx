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
import { GET_ALL_COMPANY } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import useSWR from "swr";

export default function Home() {
  const { data: companys } = useSWR(GET_ALL_COMPANY, fetcher);
  return (
    <div className="bg-white">
      <Slider />
      <HotJob />
      <HotCompany companys={companys?.data} />
      <CreateCv />
      <JobSuggest />
      <JobType />
      <Career />
      <Ultil />
      <Description />
    </div>
  );
}
