"use client";
import { CreateCv } from "@/component/create-cv";
import { InfomationJobLike } from "@/component/infomation-job/infomation-job-like";
import { NewInfomation } from "../../new-infomation";
import { TitleCustom } from "@/component/custom-title";
import useSWR from "swr";
import {
  GET_BLOG_DETAIL,
  GET_BLOG_REATION,
  GET_JOBSEARCH_HOTJOB,
} from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { IJob } from "@/interface/job";
import { IBlog } from "@/interface/blog";
import dayjs from "dayjs";
import TableOfContents from "@/component/table-content-blog";
import { NewRelative } from "./new-relatied";

const NewDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data: blogDetail } = useSWR(
    `${GET_BLOG_DETAIL}?articleSlug=${id}`,
    fetcher
  );

  const { data: listBlog } = useSWR(
    `${GET_BLOG_REATION}?articleSlug=${id}`,
    fetcher
  );

  return (
    <div className="pt-2">
      <div className="mx-auto container">
        <div className="sm:grid grid-cols-12 gap-4 mt-4 max-1280:px-2">
          <div className="xl:col-span-8 md:col-span-7 bg-white p-4 rounded-lg">
            <h1>{blogDetail?.title}</h1>
            <div className="flex text-xs">
              <div className="mr-4">Tạo bởi Minh Phạm</div>
              <div className="pl-2 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:w-1 before:h-1 before:rounded-full before:bg-black">
                {dayjs(blogDetail?.createAt).format("DD-MM-YYYY")}
              </div>
            </div>
            <div className="my-4">
              <img
                src={`${blogDetail?.coverFullLink}`}
                alt=""
                className="w-full rounded-lg"
              />
            </div>
            {blogDetail?.content ? (
              <div className="mt-4">
                <TableOfContents content={blogDetail.content} />
              </div>
            ) : (
              ""
            )}
            <div>
              <img
                src="/imgs/banner-detail-new.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5 ">
            <TitleCustom
              title="Bài viết liên quan"
              className="font-normal text-xl mt-8"
            />

            <div>
              {listBlog?.data.map((item: IBlog, idx: number) => {
                return (
                  <div className="mt-4" key={idx}>
                    <NewRelative key={idx} item={item} />
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
            {listBlog?.data.map((item: IBlog, idx: number) => {
              return <NewInfomation key={idx} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
