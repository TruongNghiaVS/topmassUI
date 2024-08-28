import { CogIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

interface IExperience {
  company: string;
  position: string;
  date_from: string;
  date_to: string;
  isStudied?: boolean;
  description?: string;
  files?: FileList;
}

interface IProps {
  data: IExperience[];
}

export const ExperienceView = ({ data }: IProps) => {
  return (
    <div className="mt-4">
      {data.map((item) => {
        return (
          <div key={item.position} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <CogIcon className="w-4 mr-2" />
                <div>{item.position}</div>
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
            <div className="mt-2">{item.company}</div>
            <div className="mt-2">
              <div className="grid grid-cols-3 text-xs">
                <div className="col-span-1">Mô tả công việc:</div>
                <div className="col-span-2">{item.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
