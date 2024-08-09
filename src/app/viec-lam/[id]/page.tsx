"use client";
import { ImfomationBasic } from "@/component/jobs/detail/imfomation-basic";
import { ImfomationCompany } from "@/component/jobs/detail/infomation-company";
import { JobSame } from "@/component/jobs/detail/job-same";
import { JobLike } from "@/component/jobs/detail/joblike";
import { KeyWord } from "@/component/jobs/detail/keyword";
import { SliderDetail } from "@/component/jobs/detail/slider-detail";
import { jobSlider } from "@/mockup-data/data";
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
import { useState } from "react";

export default function DetailJob({ params }: { params: { id: any } }) {
  const { id } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative z-[2] py-6 max-1280:px-2">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-4 ">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="bg-white rounded-lg p-8 mb-8">
              <div className="text-xl font-bold mb-6">
                Performance Marketing
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
                      15 - 20 triệu/tháng
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <MapPinIcon className="w-6 mr-2" />
                  <div>
                    <div className="text-xs font-medium">Địa điểm</div>
                    <div className="text-xs font-medium">TP.Hồ Chí Minh</div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <HourClockSpitBootstrapICon className="w-6 mr-2" />
                  <div className="">
                    <div className="text-xs font-medium">Kinh nghiệm</div>
                    <div className="text-xs font-medium">2 năm</div>
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
                  <button
                    className="flex justify-center items-center w-full py-2 bg-[#F37A20] rounded"
                    onClick={openModal}
                  >
                    <SendFillBootstrapIcon className="w-6 mr-2 text-white" />
                    <div className="text-xs font-bold text-white">
                      Ứng tuyển ngay
                    </div>
                  </button>
                </div>
                <div>
                  <button className="flex whitespace-nowrap justify-center py-2 border-[#F37A20] border-solid border-[1px] rounded px-6">
                    <HeartIcon className="w-4 mr-2 text-[#F37A20]" />
                    <div className="text-xs font-bold text-[#F37A20]">
                      Lưu tin
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="block sm:hidden">
              <ImfomationCompany />
              <ImfomationBasic />
            </div>
            <div className="bg-white p-8 rounded-lg mb-8">
              <div className="text-lg font-bold pl-4 relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-1 after:h-[70%] after:my-auto after:bg-[#F37A20]">
                Thông tin công việc
              </div>
              <div className="mt-6">Content</div>
              <div className="flex items-center mt-6 ">
                <div className="mr-2">
                  <button
                    className="flex justify-center items-center w-full py-2 bg-[#F37A20] rounded px-4 py-2"
                    onClick={openModal}
                  >
                    <SendFillBootstrapIcon className="w-4 mr-2 text-white" />
                    <div className="text-xs font-bold text-white">
                      Ứng tuyển ngay
                    </div>
                  </button>
                </div>
                <div>
                  <button className="flex whitespace-nowrap justify-center py-2 border-[#F37A20] border-solid border-[1px] rounded px-6">
                    <HeartIcon className="w-4 mr-2 text-[#F37A20]" />
                    <div className="text-xs font-bold text-[#F37A20]">
                      Lưu tin
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <KeyWord />
            <JobSame />
            <div className="block sm:hidden">
              <SliderDetail />
              <JobLike item={jobSlider} />
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5 sm:block hidden">
            <ImfomationCompany />
            <ImfomationBasic />
            <SliderDetail />
            <JobLike item={jobSlider} />
          </div>
        </div>
      </div>
      <PopupApplyJob isModalOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
