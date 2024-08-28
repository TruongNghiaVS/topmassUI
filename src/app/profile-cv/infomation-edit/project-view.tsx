import { BeakerIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

interface IProject {
  project_name: string;
  customer: string;
  count_member: number;
  position: string;
  technology: string;
  date_from: string;
  date_to: string;
  isStudied?: boolean;
  description?: string;
  files?: FileList;
}

interface IProps {
  data: IProject[];
}

export const ProjectView = ({ data }: IProps) => {
  return (
    <div className="mt-4">
      {data.map((item) => {
        return (
          <div key={item.project_name} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <BeakerIcon className="w-4 mr-2" />
                <div>{item.project_name}</div>
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
                <div className="col-span-1">Khách hàng:</div>
                <div className="col-span-2">{item.customer}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Số thành viên:</div>
                <div className="col-span-2">{item.count_member}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Vị trí:</div>
                <div className="col-span-2">{item.position}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Công cụ:</div>
                <div className="col-span-2">{item.technology}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Mô tả:</div>
                <div className="col-span-2">{item.description}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Hình ảnh:</div>
                <div className="col-span-2">
                  <img
                    src="/imgs/img-profile-cv.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
