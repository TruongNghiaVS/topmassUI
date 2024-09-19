"use client";
import { CreateCv } from "@/component/create-cv";
import { InfomationJobLike } from "@/component/infomation-job/infomation-job-like";
import { jobSlider } from "@/mockup-data/data";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { NewInfomation } from "../../new-infomation";
import { InfomationJobSame } from "@/component/infomation-job/infomation-job-same";
import { TitleCustom } from "@/component/custom-title";
import useSWR from "swr";
import { RELATION_JOB } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { IJobSame } from "@/app/interface/interface";

const NewDetail = () => {
  const { data: jobSame, error: errorJobSame } = useSWR(
    `${RELATION_JOB}?JobId=12`,
    fetcher
  );
  const list = [1, 2, 3, 4];
  return (
    <div className="">
      <div className="mx-auto container">
        <div className="sm:grid grid-cols-12 gap-4 mt-4 max-1280:px-2">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="text-xs font-normal">Cẩm nang nghề nghiệp</div>
            <div className="text-2xl font-bold">
              KOL là gì? Bật mí 7 bước trở thành KOL chuyên nghiệp thu hút triệu
              fans
            </div>
            <div className="flex text-xs">
              <div className="mr-4">By Minh Phạm</div>
              <div className="pl-2 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:w-1 before:h-1 before:rounded-full before:bg-black">
                25/05/2023
              </div>
            </div>
            <div className="my-4">
              <img
                src="/imgs/img-detail-new.png"
                alt=""
                className="w-full rounded-lg"
              />
            </div>
            <div>content</div>
            <div className="mt-6 m-3 p-3 bg-[#FFF9F3] rounded-xl">
              <div className="text-center">
                <TitleCustom title="Việc làm liên quan" />
                <div className="mt-2">
                  {jobSame?.data.map((item: IJobSame, index: number) => {
                    return (
                      <div className="mt-4" key={index}>
                        <InfomationJobSame item={jobSame} />
                      </div>
                    );
                  })}
                </div>
                <Link href="#">
                  <div className="mt-2 text-default flex justify-center mt-4">
                    Xem thêm{" "}
                    <ChevronDoubleRightIcon className="w-4 text-default" />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <CreateCv />
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5 ">
            <TitleCustom
              title="Top Công việc mới nhất"
              className="font-normal text-xl	mt-8"
            />

            <div>
              {list.map((item) => {
                return (
                  <div className="mt-4" key={item.toString() + jobSlider.title}>
                    <InfomationJobLike item={jobSlider} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4 bg-[#E0E0E0] max-1280:px-2">
        <div className="container mx-auto">
          <TitleCustom title="Cùng chuyên mục" />
          <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4">
            {list.map((value, idx) => {
              return <NewInfomation key={value.toString() + idx.toString()} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;

export const revalidate = 100;
