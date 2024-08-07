import { FilterSearchForm } from "@/component/filter-search-job";
import { ResutlSearchJob } from "@/component/jobs/results-search";
import { SearchJobForm } from "@/component/search-job-form";
import { jobSame } from "@/mockup-data/data";

const SearchJob = () => {
  const data = [1, 2, 3, 4, 5];
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
              <ResutlSearchJob item={jobSame} />
            </div>
            <div className="xl:col-span-4 md:col-span-5 pb-4 ">
              <div>
                {data.map((value) => {
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
};

export default SearchJob;

export const revalidate = 100;
