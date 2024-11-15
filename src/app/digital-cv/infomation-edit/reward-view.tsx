import { IInfomationRewardProps } from "@/interface/interface";
import { slugify } from "@/utils/business/custom-hook";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

export const PrizeView = ({ rewards }: IInfomationRewardProps) => {
  return (
    <div className="mt-4">
      {rewards?.map((item, index) => {
        return (
          <div key={index} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <AcademicCapIcon className="w-4 mr-2" />
                <div id={slugify(item.fullName)}>{item.fullName}</div>
              </div>
              <div className="flex space-x-2">
                <div>
                  {dayjs(new Date(+item.yearGet, +item.monthGet, 1)).format(
                    "MM-YYYY"
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="mt-2">{item.companyName}</div>
              <div className="mt-4 flex justify-center">
                {item.linkFile &&
                  item.linkFile.length > 0 &&
                  item.linkFile.split(",").map((link, index) => {
                    return (
                      <img key={index} src={link} className="mt-2 w-[200px]" />
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
