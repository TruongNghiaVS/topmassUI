import { IInfomationProjectProps } from "@/app/interface/interface";
import { BeakerIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";

export const ProjectView = ({ projects }: IInfomationProjectProps) => {
  return (
    <div className="mt-4">
      {projects?.map((item, index) => {
        return (
          <div key={index} className="mt-4">
            <div className="flex justify-between">
              <div className="flex  text-default">
                <BeakerIcon className="w-4 mr-2" />
                <div>{item.projectName}</div>
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
                    dayjs(new Date(+item.toMonth, +item.toMonth, 1)).format(
                      "MM-YYYY"
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Khách hàng:</div>
                <div className="col-span-2">{item.customerName}</div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Số thành viên:</div>
                <div className="col-span-2">{item.numOfMember}</div>
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
                <div
                  className="col-span-2"
                  dangerouslySetInnerHTML={{ __html: item.introduction }}
                ></div>
              </div>
              <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Hình ảnh:</div>
                <div className="col-span-2">
                  {item.linkFile &&
                    item.linkFile.length > 0 &&
                    item.linkFile.split(",").map((link, index) => {
                      return (
                        <img
                          key={index}
                          src={link}
                          alt=""
                          className="w-full mt-2"
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
