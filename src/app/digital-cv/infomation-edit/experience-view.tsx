import { IInfomationExperienceProps } from "@/interface/interface";
import { slugify } from "@/utils/business/custom-hook";
import { CogIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

export const ExperienceView = ({ experiences }: IInfomationExperienceProps) => {
  return (
    <div className="mt-4">
      {experiences?.map((item, idx) => {
        return (
          <div key={idx} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <CogIcon className="w-4 mr-2" />
                <div id={slugify(item.position)}>{item.position}</div>
              </div>
              <div className="flex space-x-2">
                <div>
                  {dayjs(`${item.fromYear}-${item.fromMonth}-1`).format(
                    "MM-YYYY"
                  )}
                </div>
                <div>-</div>
                <div>
                  {item.isEnd ? (
                    <div>Còn làm</div>
                  ) : (
                    dayjs(`${item.toYear}-${item.toMonth}-1`).format("MM-YYYY")
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2">{item.companyName}</div>
            <div className="mt-2">
              <div className="grid grid-cols-4">
                <div className="col-span-1">Mô tả công việc:</div>
                <div
                  className="col-span-3"
                  dangerouslySetInnerHTML={{ __html: item.introduction }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
