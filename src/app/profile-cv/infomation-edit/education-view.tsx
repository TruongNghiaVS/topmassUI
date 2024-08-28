import { AcademicCapIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

interface IEducation {
  school: string;
  date_from: string;
  date_to: string;
  isStudied: boolean;
  specialized: string;
  rank: string;
  rating: string;
  description: string;
}

interface IProps {
  data: IEducation[];
}

export const EducationView = ({ data }: IProps) => {
  return (
    <div className="mt-4">
      {data.map((item) => {
        return (
          <div key={item.school} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <AcademicCapIcon className="w-4 mr-2" />
                <div>{item.school}</div>
              </div>
              <div className="flex space-x-2">
                <div>
                  {dayjs(item.date_from, "DD-MM-YYYY").format("MM-YYYY")}
                </div>
                <div>-</div>
                <div>
                  {item.isStudied ? (
                    <div>Còn học</div>
                  ) : (
                    dayjs(item.date_to, "DD-MM-YYYY").format("MM-YYYY")
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Chuyên ngành:</div>
                <div className="col-span-2">{item.specialized}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Cấp bậc:</div>
                <div className="col-span-2">{item.rank}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Xếp loại:</div>
                <div className="col-span-2">{item.rating}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Mô tả:</div>
                <div className="col-span-2">{item.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
