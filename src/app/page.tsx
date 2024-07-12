import { Candidate } from "@/component/candidate";
import { Employee } from "@/component/employee";
import { HotJob } from "@/component/hot-job";
import { JobIndustry } from "@/component/job-industry";
import { Slider } from "@/component/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <HotJob />
      <Candidate />
      <Employee />
      <JobIndustry />
    </>
  );
}
