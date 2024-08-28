import { AcademicCapIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

interface IProject {
  prize_name: string;
  organization: string;
  date: string;
  description?: string;
  files?: FileList;
}

interface IProps {
  data: IProject[];
}

export const PrizeView = ({ data }: IProps) => {
  return (
    <div className="mt-4">
      {data.map((item) => {
        return (
          <div key={item.prize_name} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <AcademicCapIcon className="w-4 mr-2" />
                <div>{item.prize_name}</div>
              </div>
              <div className="flex space-x-2">
                <div>{dayjs(item.date, "DD-MM-YYYY").format("MM-YYYY")}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="mt-2">{item.organization}</div>
              <div className="mt-4 flex justify-center">
                <img
                  src="/imgs/prize.png"
                  alt=""
                  className="w-auto h-[250px]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
