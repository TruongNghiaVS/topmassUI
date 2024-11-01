import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
import { IjobCompanyDisplay } from "@/interface/job";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";
import { WrapButtonLogin } from "../button-modal-login";
import { ADD_SAVE_JOB, REMOVE_SAVE_JOB } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { toast } from "react-toastify";
import { useLoading } from "@/app/context/loading";

export const InfomationJobCompany = ({
  item,
  mutate,
  onOpen,
  setSlugItem,
}: IjobCompanyDisplay) => {
  const { setLoading } = useLoading();
  const likeJob = async () => {
    setLoading(true);
    try {
      const url = item.isSave ? REMOVE_SAVE_JOB : ADD_SAVE_JOB;
      await axiosInstance.post(url, {
        jobId: item.isSave ? item.jobId : item.jobSlug,
      });
      if (!item.isSave) {
        toast.success("Lưu tin thành công");
      } else {
        toast.success("Bỏ lưu tin thành công");
      }
      if (mutate) mutate();
    } catch (error) {
      if (!item.isSave) {
        toast.error("Lưu tin thất bại");
      } else {
        toast.error("Bỏ lưu tin thất bại");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-[1px] border-[#d9dbe9] bg-white p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="sm:flex items-center my-2 h-full">
        <div className="w-20 sm:mx-0 sm:mr-8 mx-auto sm:mb-0 mb-2">
          <Link href={`/viec-lam/${item.jobSlug}`}>
            <img src={`${item.logoImage}`} alt="" className="w-full" />
          </Link>
        </div>
        <div className="text-center sm:text-start w-full">
          <div className="sm:flex justify-between">
            <div className="flex-auto	leading-[18px] font-bold ">
              <Link href={`/viec-lam/${item.jobSlug}`}>
                {item.positionText}
              </Link>
            </div>
            <div className="text-sm font-normal whitespace-nowrap text-default">
              {item.salaryFrom === 0 && item.salaryTo === 0
                ? "Thoả thuận"
                : `${convertToMillionDongFixed(
                    item.salaryFrom,
                    item.currencyCode
                  )} - ${convertToMillionDongFixed(
                    item.salaryTo,
                    item.currencyCode
                  )} ${
                    item.currencyCode === "0"
                      ? "Triệu"
                      : item.currencyCode === "1"
                      ? "USD"
                      : ""
                  }`}
            </div>
          </div>
          <div className="font-normal mt-2.5 ">
            <Link href={`/viec-lam/${item.jobSlug}`}>{item.companyName}</Link>
          </div>
          <div className="mt-4 sm:flex grid sm:items-end justify-center sm:justify-between">
            <div>
              <div className="inline-block rounded-[3px] bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 mt-2">
                {item.locationText}
              </div>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              {item.isApply == true ? (
                <button className="bg-[#F37A20] py-1 px-2 text-white rounded mr-2">
                  Đã ứng tuyển
                </button>
              ) : (
                <WrapButtonLogin
                  className="bg-[#F37A20] py-1 px-2 text-white rounded mr-2"
                  onClick={() => {
                    setSlugItem(item.jobSlug);
                    onOpen();
                  }}
                >
                  Ứng tuyển
                </WrapButtonLogin>
              )}

              <WrapButtonLogin onClick={() => likeJob()}>
                {item.isSave ? (
                  <HeartIconSolid className="w-6 text-[#FC7E00]" />
                ) : (
                  <HeartIcon className="w-6 text-[#FC7E00]" />
                )}
              </WrapButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
