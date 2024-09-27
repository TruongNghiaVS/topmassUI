import { IJobApplyProps } from "@/app/interface/interface";
import dayjs from "dayjs";
import Link from "next/link";

export const InfomationJobApply = ({ item }: IJobApplyProps) => {
  const groupType = item.fieldArray.split(",");
  let listShow = groupType.length > 3 ? groupType.slice(0, 3) : groupType;
  let count = groupType.length > 3 ? groupType.length - 3 : 0;
  return (
    <div className="border-[1px] border-[#d9dbe9] bg-white p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="sm:flex items-center my-2 h-full">
        <div className="w-20 sm:mx-0 sm:mr-8 mx-auto sm:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img
              src={
                item.logoImage.length > 0
                  ? item.logoImage
                  : `/imgs/logo-work.png`
              }
              alt=""
              className="w-full"
            />
          </Link>
        </div>
        <div className="text-center sm:text-start w-full">
          <div className="sm:flex justify-between">
            <div className="text-[16px]	leading-[18px] font-bold text-[#FF3600] ">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {item.positionText}
              </Link>
            </div>
            <div className="text-sm font-normal text-default">
              {item.salaryFrom > 0 && item.salaryTo > 0
                ? `${item.salaryFrom} - ${item.salaryTo} triệu`
                : "Thoả thuận"}
            </div>
          </div>
          <div className="text-sm font-medium font-normal mt-2 ">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
          </div>
          <div className="flex items-center mt-2 ">
            <div className="text-xs pr-[0.65em] mr-2 relative lg:after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                Thời gian ứng tuyển:{" "}
                {dayjs(item.businessDate).format("DD-MM-YYYY HH:mm")}
              </Link>
            </div>
            <div className="text-xs font-normal hover:text-[#F37A20]">
              <Link href={item.linkFile} target="_blank">
                Xem cv
              </Link>
            </div>
          </div>

          <div className="mt-2 sm:flex grid sm:items-end justify-center sm:justify-between">
            <div>
              <div className="text-sm flex items-center flex-wrap">
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
    </div>
  );
};
