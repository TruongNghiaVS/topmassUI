"use client";

import { IInfomationJobSameProps } from "@/interface/job";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import dayjs from "dayjs";
import Link from "next/link";
import { toast } from "react-toastify";
import { WrapButtonLogin } from "../button-modal-login";
import { useLoading } from "@/app/context/loading";
import { ADD_SAVE_JOB, REMOVE_SAVE_JOB } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";

export const InfomationJobSame = ({
  item,
  mutate,
}: IInfomationJobSameProps) => {
  const groupType = item.fieldArray.split(",");
  let listShow = groupType.length > 3 ? groupType.slice(0, 3) : groupType;
  listShow = listShow.filter((item) => item.length > 0);
  let count = groupType.length > 3 ? groupType.length - 3 : 0;

  const getDay = (dayString: string) => {
    const day = dayjs().diff(dayString, "d");
    return day === 0 ? "Mới cập nhật" : `Cập nhật ${day} trước`;
  };

  const { setLoading } = useLoading();

  const handleSaveJob = async () => {
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

  const styleAfter =
    "after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]";
  const styleAfterArray =
    "lg:after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]";

  return (
    <div className="border-[1px] bg-white p-4 rounded-md hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px] relative border-solid border-[#FC7E00]">
      <WrapButtonLogin
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => handleSaveJob()}
      >
        {item.isSave ? (
          <HeartIconSolid className="w-6 text-[#FC7E00]" />
        ) : (
          <HeartIcon className="w-6 text-[#FC7E00]" />
        )}
      </WrapButtonLogin>
      <div className="sm:flex mt-4 ">
        <div className="w-24 sm:mx-0 sm:mr-8 mx-auto sm:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img
              src={
                item.logoImage && item.logoImage.length > 0
                  ? item.logoImage
                  : `/imgs/logo-work.png`
              }
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div className="text-center sm:text-start">
          <div className="text-[16px]	leading-6 font-bold line-clamp-2">
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
          <div className="flex mt-2	justify-center sm:justify-start">
            <div
              className={`text-sm text-[#F46800] pr-[0.65em] mr-2 relative  ${
                item.locationText.length > 0 && styleAfter
              }`}
            >
              <Link href={`/viec-lam/${item.jobSlug}`}>
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
              </Link>
            </div>
            <div className="text-sm px-[0.65em]">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {item.locationText}
              </Link>
            </div>
          </div>
          <div className="lg:flex mt-2	items-center">
            <div
              className={`text-sm pr-[0.65em] mr-2 relative ${
                listShow.length > 0 && styleAfterArray
              }`}
            >
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {getDay(item.lastUpdate)}
              </Link>
            </div>
            <div className="text-sm px-[0.65em] flex items-center flex-wrap">
              {listShow.map((item) => {
                return (
                  <div
                    key={item}
                    className="inline-block px-2 py-1 mr-2 font-normal text-sx bg-[#EFEFEF] rounded lg:mt-0 mt-2"
                  >
                    {item}
                  </div>
                );
              })}
              {count > 0 && (
                <div className="inline-block px-2 py-1 mr-2 font-normal text-sx bg-[#EFEFEF] rounded mt-2 lg:mt-0">
                  + {count}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
