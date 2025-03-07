import { IInfomationJobSameProps } from "@/interface/job";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";
import Link from "next/link";

export const InfomationJobLikeDetail = ({ item }: IInfomationJobSameProps) => {
  return (
    <div className="border-[1px] border-[#d9dbe9] bg-white p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="xl:flex grid justify-center items-center my-2">
        <div className="flex-auto w-28 lg:mx-0 lg:mr-8 mx-auto lg:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img
              src={item.logoImage ? item.logoImage : "/imgs/logo-work.png"}
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div className="text-center sm:text-start flex-auto w-72">
          <div className="leading-[22px] font-bold line-clamp-2">
            <Link href={`/viec-lam/${item.jobSlug}`}>
              <span className="text-xs uppercase px-1 py-1 mr-2 text-white rounded-[10px] bg-[#F90808]">
                hot
              </span>
              {item.positionText}
            </Link>
          </div>
          <div className="font-normal mt-2.5 ">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
          </div>
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <div className="flex mt-4 justify-center lg:justify-start	">
              <div className="rounded-[3px] text-xs bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2">
                {item.salaryFrom === 0 && item.salaryTo === 0
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
              <div className="rounded-[3px] text-xs bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em]">
                {item.locationText}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
