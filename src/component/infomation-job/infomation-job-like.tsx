"use client";

import { IInfomationJobProps } from "@/interface/job";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { toast } from "react-toastify";

export const InfomationJobLike = ({ item }: IInfomationJobProps) => {
  const likeJob = () => {
    toast.success("Thích tin thành công");
  };

  return (
    <div className="border-[1px] border-[#d9dbe9]  bg-white p-2 sm:mt-0 mt-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="xl:flex grid sm:justify-start justify-center items-center my-2">
        <div className="w-20 lg:mx-0 lg:mr-8 mx-auto lg:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img src="/imgs/logo-work.png" alt="" className="w-full" />
          </Link>
        </div>
        <div className="text-center sm:text-start grow">
          <div className="text-[16px]	leading-[22px] font-bold ">
            <Link href={`/viec-lam/${item.jobSlug}`}>
              <span className="text-xs uppercase px-1 py-1 mr-2 text-white rounded-[10px] bg-[#F90808]">
                hot
              </span>
              {item.positionText}
            </Link>
          </div>
          <div className="text-sm font-normal mt-2.5 ">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
          </div>
          <div className="flex mt-4 justify-between items-center	">
            <Link href={`/viec-lam/${item.jobSlug}`}>
              <div>
                <div className="rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2">
                  {item.rangeSalary}
                </div>
                <div className="rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em]">
                  {item.locationText}
                </div>
              </div>
            </Link>
            <div className="cursor-pointer" onClick={likeJob}>
              <HeartIcon className="w-6 text-[#CCCACA]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
