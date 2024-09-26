"use client"
import { JobType } from "@/component/job-type";
import { Image } from "@/component/jobs/img";
import { JobTypePage } from "@/component/jobs/job-company";
import { SearchJobs } from "@/component/jobs/search-job";
import SliderJobs from "@/component/jobs/slider-job";
import { useEffect, useState } from "react";
import { Option } from "@/component/hook-form/interface/interface";
import useSWR from "swr";
import { GET_All_Provinces } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { IProvinceData } from "../interface/interface";


const JobsPage = () => {

  const [provicesOptionData, setProvicesOptionData]= useState<Option[]>([]);

  const [dataInfoRealms, setdataInfoRealms]= useState<Option[]>([]);
  const { data: allRealms} =   useSWR(`${GET_All_Provinces}`, fetcher);

  const { data: allProvinces} =   useSWR(`${GET_All_Provinces}`, fetcher);
  
  let arrayListprovices = [{
     value: -1, label: "Tất cả" 
  }];
  allProvinces?.data.map((value: IProvinceData)=> {

    arrayListprovices.push( {
      value :  value.code,
      label:  value.name
    });
  
  });

  if( allProvinces?.length >0)
  {
     setProvicesOptionData(allProvinces);
  }
  console.log(allProvinces);

  useEffect(() => {
    if(allProvinces) {
      setProvicesOptionData([{label: "Địa điểm làm việc",value: ""} ,...allProvinces.data.map((item:any) => {
        return {
          label: item.name,
          value: item.code
        }
      })])
    }
   
  }, [allProvinces]);

  

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

