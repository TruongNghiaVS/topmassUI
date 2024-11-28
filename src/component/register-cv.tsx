"use client";

import { CloudArrowUpFillBootstrapIcon } from "@/theme/icons/cloudArrowUpFillBootstrapIcon";
import { ClipboardDocumentListIcon, EyeIcon } from "@heroicons/react/16/solid";
import { InfomationJobCV } from "./infomation-job/infomation-job-cv";
import { InfomationUser } from "./infomation-user-right";
import Link from "next/link";
import useSWR from "swr";
import { GET_ALL_CV, GET_SUITABLEJOB } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { ICvCreate } from "@/interface/interface";
import { useEffect, useState } from "react";
import { PopupUploadCv } from "./popup-upload-cv";
import { IJob } from "@/interface/job";
import { PopupApplyJob } from "@/modules/detail-jobs/popup-apply-job";

export const RegisterCV = () => {
  const [cvCreate, setCvCreate] = useState<ICvCreate[]>([]);
  const [cvUpdate, setCvUpdate] = useState<ICvCreate[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalApply, setIsOpenModalApply] = useState(false);
  const [slugItem, setSlugItem] = useState("");

  const { data: listCv, error, mutate } = useSWR(GET_ALL_CV, fetcher);
  const { data: jobs, mutate: mutateJob } = useSWR(GET_SUITABLEJOB, fetcher);

  useEffect(() => {
    if (listCv) {
      setCvCreate(
        listCv.filter(
          (item: ICvCreate) => item.typeData === 1 || item.typeData === 5
        )
      );
      setCvUpdate(listCv.filter((item: ICvCreate) => item.typeData === 2));
    }
  }, [listCv]);

  const getNameCv = (link: string) => {
    const arr = link.split("/");
    return arr[arr.length - 1];
  };

  const list = [1, 2, 3];
  return (
    <div className="py-2 bg-[#EAE9E8] pb-10">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-4 my-6 max-1280:px-2">
          <div className="col-span-8">
            <div className="">
              <img
                src="/imgs/img-register-cv.png"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="bg-white rounded-2xl p-6 pb-10 mt-4">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-lg">
                  CV đã tạo trên Topmass
                </div>
                <Link
                  href="/digital-cv"
                  className="py-2 px-4 text-white bg-gradient-to-r from-[#F89D1B] to-[#F37B20] font-medium rounded-3xl"
                >
                  + Tạo mới
                </Link>
              </div>
              {cvCreate?.length > 0 ? (
                <div className="p-2 border rounded">
                  {cvCreate?.map((item: ICvCreate, index: number) => {
                    return (
                      <div className="flex justify-between mt-2" key={index}>
                        <div>{getNameCv(item.linkFile)}</div>
                        <Link href={item.linkFile} target="_blank">
                          <div className="flex hover:text-[#F37A20]">
                            Xem <EyeIcon className="w-4 ml-2" />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <div className="flex justify-center mt-6">
                    <ClipboardDocumentListIcon className="w-20 text-default" />
                  </div>
                  <div className="text-center mt-3">Chưa tạo CV</div>
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl p-6 pb-10 mt-8">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-lg">
                  CV đã tải trên Topmass
                </div>
                <button
                  className="py-2 px-4 text-white bg-gradient-to-r from-[#F89D1B] to-[#F37B20] font-medium rounded-3xl flex items-center "
                  onClick={() => setIsOpenModal(true)}
                >
                  <CloudArrowUpFillBootstrapIcon className="w-6 mr-2" />
                  Tải lên
                </button>
              </div>
              {cvUpdate?.length > 0 ? (
                <div className="p-2 border rounded">
                  {cvUpdate?.map((item: ICvCreate, index: number) => {
                    return (
                      <div className="flex justify-between mt-2" key={index}>
                        <div>{getNameCv(item.linkFile)}</div>
                        <Link href={item.linkFile} target="_blank">
                          <div className="flex hover:text-[#F37A20]">
                            Xem <EyeIcon className="w-4 ml-2" />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <div className="flex justify-center mt-6">
                    <ClipboardDocumentListIcon className="w-20 text-default" />
                  </div>
                  <div className="text-center mt-3">Chưa tải CV</div>
                </div>
              )}
            </div>
            <div className="mt-4">
              <div className="font-medium text-lg">
                Việc làm phù hợp với bạn
              </div>
              <div className="text-lg font-normal">
                Để nhận được nhiều gợi ý phù hợp hơn, hãy bật &quot;tìm
                việc&quot; bạn nhé
              </div>
            </div>
            <div className="mt-4">
              {jobs?.data.map((item: IJob, idx: number) => {
                return (
                  <div key={idx} className="mt-2">
                    <InfomationJobCV
                      item={item}
                      onOpen={() => setIsOpenModalApply(true)}
                      setSlugItem={setSlugItem}
                      mutate={mutateJob}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-4 hidden sm:block">
            <InfomationUser />
          </div>
        </div>
      </div>
      <PopupUploadCv
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        mutate={mutate}
      />

      <PopupApplyJob
        isModalOpen={isOpenModalApply}
        onClose={() => setIsOpenModalApply(false)}
        jobId={slugItem}
      />
    </div>
  );
};
