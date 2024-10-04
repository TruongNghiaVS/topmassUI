"use client";

import { useLoading } from "@/app/context/loading";
import { IInfomationJobProps, IInfomationJobSameProps } from "@/interface/job";
import { ADD_SAVE_JOB, REMOVE_SAVE_JOB } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { toast } from "react-toastify";
import { WrapButtonLogin } from "../button-modal-login";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";

export const InfomationJobLike = ({
  item,
  mutate,
}: IInfomationJobSameProps) => {
  const { setLoading } = useLoading();

  const likeJob = async () => {
    setLoading(true);
    try {
      const url = item.isSave ? REMOVE_SAVE_JOB : ADD_SAVE_JOB;
      await axiosInstance.post(url, {
        jobId: item.jobSlug,
      });
      if (!item.isSave) {
        toast.success("Lưu tin thành công");
      } else {
        toast.success("Bỏ lưu tin thành công");
      }
      if (mutate) mutate();
    } catch (error) {
      if (!item.isSave) {
        toast.success("Lưu tin thất bại");
      } else {
        toast.success("Bỏ lưu tin thất bại");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-[1px] border-[#d9dbe9]  bg-white p-2 sm:mt-0 mt-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="xl:flex grid sm:justify-start justify-center items-center my-2">
        <div className="flex-auto w-20 lg:mx-0 lg:mr-8 mx-auto lg:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img src="/imgs/logo-work.png" alt="" className="w-full" />
          </Link>
        </div>
        <div className=" flex-auto w-72 text-center sm:text-start grow">
          <div className="text-[16px]	leading-[22px] font-bold line-clamp-2 ">
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
              <div className="flex">
                <div className="rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 text-xs">
                  {item.aggrement
                    ? "Thoả thuận"
                    : `${convertToMillionDongFixed(
                        item.salaryFrom,
                        item.currencyCode
                      )} - ${convertToMillionDongFixed(
                        item.salaryTo,
                        item.currencyCode
                      )} ${
                        item.currencyCode === "0"
                          ? "Triệu"
                          : item.currencyCode === "1"
                          ? "USD"
                          : ""
                      }`}
                </div>
                <div className="rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] text-xs">
                  {item.locationText}
                </div>
              </div>
            </Link>
            <WrapButtonLogin onClick={() => likeJob()}>
              {item.isSave ? (
                <HeartIconSolid className="w-6 text-[#FC7E00]" />
              ) : (
                <HeartIcon className="w-6 text-[#FC7E00]" />
              )}
            </WrapButtonLogin>
          </div>
        </div>
      </div>
    </div>
  );
};
