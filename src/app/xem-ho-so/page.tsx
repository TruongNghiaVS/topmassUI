"use client";
import Link from "next/link";
import { CompanySeenCV } from "./company-see-cv";
import { InfomationJobSee } from "@/component/infomation-job/infomation-job-see";
import { InfomationUser } from "@/component/infomation-user-right";
import { GET_SUITABLEJOB } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import useSWR from "swr";
import { IJob } from "@/interface/job";
import { PopupApplyJob } from "../viec-lam/[id]/popup-apply-job";
import { useState } from "react";

export default function EmployeeSeeCv() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slugItem, setSlugItem] = useState("");

  const { data: jobs, mutate } = useSWR(GET_SUITABLEJOB, fetcher);
  const list = [1, 2, 3, 4];
  return (
    <div className="bg-[#F4F5F5] max-1280:px-2">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-6 py-8">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="p-4 bg-white rounded-lg">
              <div className="text-center font-normal text-xl">
                Chưa có nhà tuyển dụng nào xem hồ sơ của bạn
              </div>
              <div className="mt-4 text-center font-normal">
                Để dễ dàng kết nối với nhà tuyển dụng, hãy{" "}
                <span className="text-default">tạo CV</span> thật ấn tượng và{" "}
                <span className="text-default">cài đặt gợi ý việc làm</span>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/quan-ly-cv"
                  className="mr-2 px-4 py-2 text-white bg-[#F37A20] rounded"
                >
                  Tạo CV
                </Link>
                <Link
                  href="/viec-lam"
                  className="mr-2 px-4 py-2 text-white bg-[#F37A20] rounded"
                >
                  Gợi ý tìm việc làm
                </Link>
              </div>
              {list.map((value) => {
                return (
                  <div className="mt-4" key={value}>
                    <CompanySeenCV />
                  </div>
                );
              })}
            </div>
            <div className="p-4 rounded-lg mt-8 bg-white">
              {jobs?.data.map((item: IJob, index: number) => {
                return (
                  <div className="mt-4" key={index}>
                    <InfomationJobSee
                      item={item}
                      onOpen={() => setIsModalOpen(true)}
                      setSlugItem={setSlugItem}
                      mutate={mutate}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <div>
              <InfomationUser />
              <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-[#F15A24] to-[#F7931E]">
                <img
                  src="/imgs/banner-2.png"
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupApplyJob
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobId={slugItem}
      />
    </div>
  );
}
