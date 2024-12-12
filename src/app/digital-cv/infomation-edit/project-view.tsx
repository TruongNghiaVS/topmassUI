import { IInfomationProjectProps } from "@/interface/interface";
import { slugify } from "@/utils/business/custom-hook";
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
                <div id={slugify(item.projectName)}>{item.projectName}</div>
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
            <div className="mt-4">
              <div className="grid grid-cols-4 mt-2">
                <div className="col-span-1">Khách hàng:</div>
                <div className="col-span-3">{item.customerName}</div>
              </div>
              <div className="grid grid-cols-4 mt-2">
                <div className="col-span-1">Số thành viên:</div>
                <div className="col-span-3">{item.numOfMember}</div>
              </div>
              <div className="grid grid-cols-4 mt-2">
                <div className="col-span-1">Vị trí:</div>
                <div className="col-span-3">{item.position}</div>
              </div>
              <div className="grid grid-cols-4 mt-2">
                <div className="col-span-1">Công cụ:</div>
                <div className="col-span-3">{item.technology}</div>
              </div>
              <div className="grid grid-cols-4 mt-2">
                <div className="col-span-1">Mô tả:</div>
                <div
                  className="col-span-3"
                  dangerouslySetInnerHTML={{ __html: item.introduction }}
                ></div>
              </div>
              {/* <div className="grid grid-cols-3 text-xs mt-2">
                <div className="col-span-1">Hình ảnh:</div>
                <div className="col-span-3">
                  {item.linkFile &&
                    item.linkFile.length > 0 &&
                    item.linkFile.split(",").map((link, index) => {
                      return (
                        <img
                          key={index}
                          src={link}
                          alt=""
                          className="w-[400px] mt-2"
                        />
                      );
                    })}
                </div>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
