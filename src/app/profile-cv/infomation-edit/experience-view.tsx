import { IInfomationExperienceProps } from "@/app/interface/interface";
import { CogIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

export const ExperienceView = ({ experiences }: IInfomationExperienceProps) => {
  return (
    <div className="mt-4">
      {experiences.map((item) => {
        return (
          <div key={item.position} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <CogIcon className="w-4 mr-2" />
                <div>{item.position}</div>
              </div>
              <div className="flex space-x-2">
                <div>
                  {dayjs(new Date(+item.fromYear, +item.fromMonth, 1)).format(
                    "MM-YYYY"
                  )}
                </div>
                <div>-</div>
                <div>
                  {item.isEnd ? (
                    <div>Còn làm</div>
                  ) : (
                    dayjs(new Date(+item.toYear, +item.toMonth, 1)).format(
                      "MM-YYYY"
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2">{item.companyName}</div>
            <div className="mt-2">
              <div className="grid grid-cols-3 text-xs">
                <div className="col-span-1">Mô tả công việc:</div>
                <div
                  className="col-span-2"
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
