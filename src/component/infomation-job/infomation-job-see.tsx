import { IInfomationJobProps } from "@/interface/job";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const InfomationJobSee = ({ item }: IInfomationJobProps) => {
  return (
    <div className="border-[1px] border-[#d9dbe9] bg-white p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="sm:flex items-center my-2 h-full">
        <div className="w-20 sm:mx-0 sm:mr-8 mx-auto sm:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img src="/imgs/logo-work.png" alt="" className="w-full" />
          </Link>
        </div>
        <div className="text-center sm:text-start w-full">
          <div className="sm:flex justify-between">
            <div className="text-[16px]	leading-[18px] font-bold ">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {item.positionText}
              </Link>
            </div>
            <div className="text-sm font-normal text-default">
              {item.salaryFrom} - {item.salaryTo} triệu
            </div>
          </div>
          <div className="text-sm font-normal mt-2.5 ">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
          </div>
          <div className="text-sm pr-[0.65em] mr-2">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.businessDate}</Link>
          </div>
          <div className="mt-4 sm:flex grid sm:items-end justify-center sm:justify-between">
            <div>
              <div className="inline-block rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 mt-2">
                {item.locationText}
              </div>
              <div className="inline-block rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 mt-2">
                còn <span className="font-semibold">{item.businessDate}</span>{" "}
                ngày để ứng tuyển
              </div>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <button className="bg-[#F37A20] py-1 px-2 text-white rounded mr-2">
                Ứng tuyển
              </button>
              <button>
                <HeartIcon className="w-6 mr-2 text-default" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
