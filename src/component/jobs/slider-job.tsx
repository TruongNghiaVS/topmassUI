import {  ISliderJobsParram } from "@/app/interface/interface";
import { SliderForm } from "@/component/slider";



const SliderJobs = ({ allProvinces ,allRealms  }: ISliderJobsParram) => {

 

  return (
    <div className="bg-bgHeaderJobCustom pb-10">
      <div className="container mx-auto">
        <div className="uppercase text-[26px] leading-[34px] text-center text-[#F26700] font-bold pt-8 pb-16">
          Tìm việc làm nhanh chóng, phù hợp với nhu cầu của bạn
        </div>
        <div className="mb-9">
          <SliderForm allProvinces = {allProvinces} allRealms = {allRealms}/>
        </div>
        <div>
          <img
            src="/imgs/img-header-jobs.png"
            alt=""
            className="w-full h-auto px-4 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderJobs;
