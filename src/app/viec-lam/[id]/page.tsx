"use client";
import { ImfomationBasic } from "@/component/jobs/detail/imfomation-basic";
import { ImfomationCompany } from "@/component/jobs/detail/infomation-company";
import { JobSame } from "@/component/jobs/detail/job-same";
import { JobLike } from "@/component/jobs/detail/joblike";
import { KeyWord } from "@/component/jobs/detail/keyword";
import { SliderDetail } from "@/component/jobs/detail/slider-detail";
import { HourClockSpitBootstrapICon } from "@/theme/icons/hourClockSpitBootstrapICon";
import { SendFillBootstrapIcon } from "@/theme/icons/sendFillBootstrapIcon";
import {
  CurrencyEuroIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PopupApplyJob } from "./popup-apply-job";
import { useCallback, useEffect, useState } from "react";
import { useLoading } from "@/app/context/loading";
import axiosInstance, { fetcher } from "@/utils/axios";
import {
  ADD_SAVE_JOB,
  ADD_VIEW_JOB,
  DETAIL_JOB,
  JOB_LIKE,
  RELATION_JOB,
  REMOVE_SAVE_JOB,
} from "@/utils/api-url";
import useSWR from "swr";
import { WrapButtonLogin } from "@/component/button-modal-login";
import { toast } from "react-toastify";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";

export default function DetailJob({ params }: { params: { id: any } }) {
  const { id } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoading } = useLoading();

  const { data: detail, error, mutate: mutateDetail } = useSWR(
    `${DETAIL_JOB}?JobId=${id}`,
    fetcher
  );
  const { data: jobSame, error: errorJobSame, mutate: mutateJobSame } = useSWR(
    `${RELATION_JOB}?JobId=${id}`,
    fetcher
  );

  const { data: jobLike, error: errorJobLike } = useSWR(
    `${JOB_LIKE}?JobId=${id}`,
    fetcher
  );

  const viewJobs = useCallback(async () => {
    try {
      await axiosInstance.post(ADD_VIEW_JOB, {
        jobId: id,
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    viewJobs();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    openModal();
  };

  const handleSaveJob = async () => {
    setLoading(true);
    try {
      const url = detail?.jobExtra.isSave ? REMOVE_SAVE_JOB : ADD_SAVE_JOB;
      await axiosInstance.post(url, {
        jobId: detail?.jobExtra.isSave ? detail?.jobId : id,
      });
      if (detail?.jobExtra.isSave) {
        toast.success("Bỏ lưu tin thành công");
      } else {
        toast.success("Lưu tin thành công");
      }
      mutateDetail();
    } catch (error) {
      if (detail?.jobExtra.isSave) {
        toast.success("Bỏ lưu tin thất bại");
      } else {
        toast.success("Lưu tin thất bại");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="relative z-[2] py-6 max-1280:px-2">
        <div className="container mx-auto">
          <div className="sm:grid grid-cols-12 gap-4 ">
            <div className="xl:col-span-8 md:col-span-7">
              <div className="bg-white rounded-lg p-8 mb-8">
                <div className="text-xl font-bold mb-6">
                  {detail?.dataJob.jobName}
                </div>
                <div className="flex justify-between  mb-6 px-4 whitespace-nowrap flex-wrap">
                  <div className="flex items-center mb-2">
                    <div className="relative mr-4 ">
                      <CurrencyEuroIcon className="w-6" />
                      <CurrencyDollarIcon className="w-6 absolute right-[-10px] bottom-[-10px] p-[1px] rounded-full bg-white" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">Mức lương</div>
                      <div className="text-xs font-medium text-default">
                        {detail?.dataJob.aggrement
                          ? "Thoả thuận"
                          : `${convertToMillionDongFixed(
                              detail?.dataJob.salaryFrom,
                              detail?.dataJob.currencyCode
                            )} - ${convertToMillionDongFixed(
                              detail?.dataJob.salaryTo,
                              detail?.dataJob.currencyCode
                            )} ${
                              detail?.dataJob.currencyCode === "0"
                                ? "Triệu"
                                : detail?.dataJob.currencyCode === "1"
                                ? "USD"
                                : ""
                            }`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="w-6 mr-2" />
                    <div>
                      <div className="text-xs font-medium">Địa điểm</div>
                      <div className="text-xs font-medium">
                        {detail?.dataJob.locationText}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <HourClockSpitBootstrapICon className="w-6 mr-2" />
                    <div className="">
                      <div className="text-xs font-medium">Kinh nghiệm</div>
                      <div className="text-xs font-medium">
                        {detail?.dataJob.experienceText}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex px-4 py-2 bg-[#E2E2E2] rounded mb-6 ml-4">
                  <ClockIcon className="w-4 mr-2" />
                  <div className="text-xs font-normal">
                    Hạn nộp hồ sơ: 30/07/2024
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 ">
                  <div className="w-[67%] mr-8">
                    {detail?.jobExtra.isAply ? (
                      <div className="flex text-white justify-center items-center w-full py-2 bg-[#F37A20] rounded px-4 py-2 font-medium">
                        Đã ứng tuyển
                      </div>
                    ) : (
                      <WrapButtonLogin
                        className="flex justify-center items-center w-full py-2 bg-[#F37A20] rounded px-4 py-2"
                        onClick={() => {
                          handleOpenModal();
                        }}
                      >
                        <SendFillBootstrapIcon className="w-4 mr-2 text-white" />
                        <div className="text-xs font-bold text-white">
                          Ứng tuyển ngay
                        </div>
                      </WrapButtonLogin>
                    )}
                  </div>
                  <div>
                    <WrapButtonLogin
                      className={`flex whitespace-nowrap justify-center py-2 border-[#F37A20] border-solid border-[1px] rounded px-6 ${
                        detail?.jobExtra.isSave && "bg-[#F37A20]"
                      }`}
                      onClick={() => handleSaveJob()}
                    >
                      <HeartIcon
                        className={`w-4 mr-2 ${
                          detail?.jobExtra.isSave
                            ? "text-white"
                            : "text-[#F37A20]"
                        }`}
                      />
                      <div
                        className={`text-xs font-bold ${
                          detail?.jobExtra.isSave
                            ? "text-white"
                            : "text-[#F37A20]"
                        }`}
                      >
                        {detail?.jobExtra.isSave ? "Đã lưu tin" : "Lưu tin"}
                      </div>
                    </WrapButtonLogin>
                  </div>
                </div>
              </div>
              <div className="block sm:hidden">
                <ImfomationCompany company={detail?.companyData} />
                <ImfomationBasic infomation={detail?.dataJob.commonData} />
              </div>
              <div className="bg-white p-8 rounded-lg mb-8">
                <div className="text-lg font-bold pl-4 relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:h-[70%] after:my-auto after:bg-[#F37A20] mt-4">
                  Mô tả công việc
                </div>
                <div className="mt-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detail?.dataJob.description,
                    }}
                  ></div>
                </div>
                <div className="text-lg font-bold pl-4 relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:h-[70%] after:my-auto after:bg-[#F37A20] mt-4">
                  Nội dụng
                </div>
                <div className="mt-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detail?.dataJob.content,
                    }}
                  ></div>
                </div>
                <div className="text-lg font-bold pl-4 relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:h-[70%] after:my-auto after:bg-[#F37A20] mt-4">
                  Yêu cầu
                </div>
                <div className="mt-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detail?.dataJob.requirement,
                    }}
                  ></div>
                </div>
                <div className="text-lg font-bold pl-4 relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:h-[70%] after:my-auto after:bg-[#F37A20] mt-4">
                  Quyền lợi ứng viên
                </div>
                <div className="mt-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detail?.dataJob.benefit,
                    }}
                  ></div>
                </div>
                <div className="flex items-center mt-6 ">
                  <div className="mr-2">
                    {detail?.jobExtra.isAply ? (
                      <div className="flex text-white justify-center items-center w-full py-2 bg-[#F37A20] rounded px-4 py-2 font-medium">
                        Đã ứng tuyển
                      </div>
                    ) : (
                      <WrapButtonLogin
                        className="flex justify-center items-center w-full py-2 bg-[#F37A20] rounded px-4 py-2"
                        onClick={() => {
                          handleOpenModal();
                        }}
                      >
                        <SendFillBootstrapIcon className="w-4 mr-2 text-white" />
                        <div className="text-xs font-bold text-white">
                          Ứng tuyển ngay
                        </div>
                      </WrapButtonLogin>
                    )}
                  </div>
                  <div>
                    <WrapButtonLogin
                      className={`flex whitespace-nowrap justify-center py-2 border-[#F37A20] border-solid border-[1px] rounded px-6 ${
                        detail?.jobExtra.isSave && "bg-[#F37A20]"
                      }`}
                      onClick={() => handleSaveJob()}
                    >
                      <HeartIcon
                        className={`w-4 mr-2 ${
                          detail?.jobExtra.isSave
                            ? "text-white"
                            : "text-[#F37A20]"
                        }`}
                      />
                      <div
                        className={`text-xs font-bold ${
                          detail?.jobExtra.isSave
                            ? "text-white"
                            : "text-[#F37A20]"
                        }`}
                      >
                        {detail?.jobExtra.isSave ? "Đã lưu tin" : "Lưu tin"}
                      </div>
                    </WrapButtonLogin>
                  </div>
                </div>
              </div>
              {detail?.dataJob.hashtags.length > 0 && (
                <KeyWord hagtags={detail?.dataJob.hashtags} />
              )}
              <JobSame jobs={jobSame?.data} mutate={mutateJobSame} />
              <div className="block sm:hidden">
                <SliderDetail />
                <JobLike jobs={jobLike?.data} />
              </div>
            </div>
            <div className="xl:col-span-4 md:col-span-5 sm:block hidden">
              <ImfomationCompany company={detail?.companyData} />
              <ImfomationBasic infomation={detail?.dataJob.commonData} />
              <SliderDetail />
              <JobLike jobs={jobLike?.data} />
            </div>
          </div>
        </div>
      </div>
      <PopupApplyJob
        isModalOpen={isModalOpen}
        onClose={closeModal}
        jobId={id}
        mutate={mutateDetail}
      />
    </div>
  );
}
