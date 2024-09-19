import { useLoading } from "@/app/context/loading";
import { IJobApplyProps, IJobSaveProps } from "@/app/interface/interface";
import { PopupApplyJob } from "@/app/viec-lam/[id]/popup-apply-job";
import { REMOVE_SAVE_JOB } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { TrashIcon } from "@heroicons/react/16/solid";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export const InfomationJobSave = ({ item, mutate }: IJobSaveProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoading } = useLoading();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const groupType = item.fieldArray.split(",");
  let listShow = groupType.length > 3 ? groupType.slice(0, 3) : groupType;
  let count = groupType.length > 3 ? groupType.length - 3 : 0;

  const getDay = (dayString: string) => {
    const day = dayjs().diff(dayString, "d");
    return day === 0 ? "Mới cập nhật" : `Cập nhật ${day} trước`;
  };

  const handleRemoveSaveJob = async (id: number) => {
    setLoading(true);
    try {
      await axiosInstance.post(REMOVE_SAVE_JOB, {
        jobId: 12,
      });
      toast.success("Bỏ lưu tin thành công");
      mutate();
    } catch (error) {
      toast.error("Bỏ lưu tin thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-[1px] border-[#d9dbe9] bg-white p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="sm:flex items-center my-2">
        <div className="w-20 sm:mx-0 sm:mr-8 mx-auto sm:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img src="/imgs/logo-work.png" alt="" className="w-full" />
          </Link>
        </div>
        <div className="text-center sm:text-start w-full">
          <div className="sm:flex justify-between">
            <div className="text-[16px]	leading-[18px] font-bold text-[#FF3600] ">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {item.positionText}
              </Link>
            </div>
            <div className="text-sm font-normal text-default">
              {" "}
              {item.salaryFrom > 0 && item.salaryTo > 0
                ? `${item.salaryFrom} - ${item.salaryTo} triệu`
                : "Thoả thuận"}
            </div>
          </div>
          <div className="text-sm font-medium font-normal mt-2 ">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
          </div>
          <div className="flex items-center mt-2 ">
            <div className="text-xs pr-[0.65em] mr-2 relative lg:after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {getDay(item.lastUpdate)}
              </Link>
            </div>
            <div className="text-xs font-normal">
              Đã lưu: {dayjs(item.businessDate).format("DD-MM-YYYY HH:mm")}
            </div>
          </div>

          <div className="mt-2 sm:flex grid sm:items-end justify-center sm:justify-between">
            <div>
              <div className="text-sm flex items-center flex-wrap">
                {listShow.map((item) => {
                  return (
                    <div
                      key={item}
                      className="inline-block px-2 py-1 mr-2 font-normal text-sx bg-[#EFEFEF] rounded lg:mt-0 mt-2"
                    >
                      {item}
                    </div>
                  );
                })}
                {count > 0 && (
                  <div className="inline-block px-2 py-1 mr-2 font-normal text-sx bg-[#EFEFEF] rounded mt-2 lg:mt-0">
                    + {count}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <button
                className="bg-[#F37A20] py-1 px-2 text-white rounded mr-2"
                onClick={openModal}
              >
                Ứng tuyển
              </button>
              <button
                className=" px-2 py-1 bg-[#EFEFEF] flex items-center"
                onClick={() => {
                  handleRemoveSaveJob(item.jobId);
                }}
              >
                <TrashIcon className="w-4 mr-2" /> Bỏ lưu
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopupApplyJob isModalOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
