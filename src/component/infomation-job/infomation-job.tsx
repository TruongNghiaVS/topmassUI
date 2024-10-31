import { IInfomationJobProps } from "@/interface/job";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";
import Link from "next/link";

export const InfomationJob = ({ item }: IInfomationJobProps) => {
  return (
    <div className="relative bg-white border-[1px] border-[#d9dbe9] rounded-md overflow-hidden hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="bg-white p-4  hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px] rounded-md	">
        <div className="sm:flex items-center my-2 h-full">
          <div className="flex-auto w-28 sm:mx-0 sm:mr-2 mx-auto sm:mb-0 mb-2">
            <Link href={`/viec-lam/${item.jobSlug}`}>
              <img
                src={item.logoImage ? item.logoImage : "/imgs/logo-work.png"}
                alt=""
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex-auto w-72 text-center sm:text-start mx-auto">
            <div className="leading-6 font-bold line-clamp-2">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                <span className="text-xs uppercase px-1 py-1 mr-2 text-white rounded-[10px] bg-[#F90808]">
                  hot
                </span>
                {item.positionText}
              </Link>
            </div>
            <div className="text-sm font-normal mt-2.5 line-clamp-2 ">
              <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
            </div>
            <Link href={`/viec-lam/${item.jobSlug}`}>
              <div className="flex mt-4 justify-center items-cetner sm:justify-start	">
                <div className="rounded-[3px] text-xs bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 whitespace-nowrap">
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
                <div className="rounded-[3px] text-xs bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] whitespace-nowrap">
                  {item.locationText}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
