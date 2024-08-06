import { Career } from "@/component/career";
import { CreateCv } from "@/component/create-cv";
import { Description } from "@/component/description";
import { HotCompany } from "@/component/hot-company";
import { HotJob } from "@/component/hot-job";
import { JobSuggest } from "@/component/job-suggest";
import { JobType } from "@/component/job-type";
import { Slider } from "@/component/slider";
import { Ultil } from "@/component/ultil";

export default function Home() {
  return (
    <>
      <Slider />
      <HotJob />
      <HotCompany />
      <CreateCv />
      <JobSuggest />
      <JobType />
      <Career />
      <Ultil />
      <Description />
    </>
  );
}
