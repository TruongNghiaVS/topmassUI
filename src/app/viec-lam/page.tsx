import { JobType } from "@/component/job-type";
import { Image } from "@/component/jobs/img";
import { JobTypePage } from "@/component/jobs/job-company";
import { SearchJobs } from "@/component/jobs/search-job";
import SliderJobs from "@/component/jobs/slider-job";

const JobsPage = () => {
  return (
    <div>
      <SliderJobs />
      <SearchJobs />
      <Image />
      <JobType />
      <JobTypePage />
    </div>
  );
};

export default JobsPage;
