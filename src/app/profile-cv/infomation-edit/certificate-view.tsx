import { AcademicCapIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

interface IProject {
  certificate_name: string;
  organization: string;
  date_from: string;
  date_to: string;
  isStudied?: boolean;
  description?: string;
}

interface IProps {
  data: IProject[];
}

export const CertificateView = ({ data }: IProps) => {
  return (
    <div className="mt-4">
      {data.map((item) => {
        return (
          <div key={item.certificate_name} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <AcademicCapIcon className="w-4 mr-2" />
                <div>{item.certificate_name}</div>
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
