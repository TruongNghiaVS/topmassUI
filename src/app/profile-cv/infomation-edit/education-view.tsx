import { IInfoEducationProps } from "@/interface/interface";
import { AcademicCapIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

export const EducationView = ({ educations }: IInfoEducationProps) => {
  return (
    <div className="mt-4">
      {educations?.map((item, idx) => {
        return (
          <div key={idx} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <AcademicCapIcon className="w-4 mr-2" />
                <div>{item.schoolName}</div>
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
                    <div>Còn học</div>
                  ) : (
                    dayjs(new Date(+item.toYear, +item.toMonth, 1)).format(
                      "MM-YYYY"
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Chuyên ngành:</div>
                <div className="col-span-2">{item.major}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Cấp bậc:</div>
                <div className="col-span-2">{item.position}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Xếp loại:</div>
                <div className="col-span-2">{item.rank}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Mô tả:</div>
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
