"use client";
import { BoxCV } from "@/component/box-cv";
import CustomSelectSearch from "@/component/hook-form/customSelectSearch";
import { useState } from "react";
import { NewInfomation } from "../tin-tuc/new-infomation";
import useSWR from "swr";
import { GET_BLOG_REATION } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { IBlog } from "@/interface/blog";

export default function CreateNewCv() {
  const data = [1, 2, 3, 4];

  const [selectedValue, setSelectedValue] = useState("");
  const { data: listBlog } = useSWR(
    `${GET_BLOG_REATION}?articleSlug=test`,
    fetcher
  );
  const options = [
    { value: "", label: "Tất cả thiết kế" },
    { value: "don-gian", label: "Đơn giản" },
    { value: "hien-dai", label: "Hiện đại" },
    { value: "phong-cach", label: "Phong cách" },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
  };

  return (
    <div className="bg-[#F4F5F5]">
      <div className="container mx-auto max-1280:px-2">
        <div className="px-10 py-8 text-white rounded-lg overflow-hidden bg-[url(/imgs/bg-img-create-cv.png)] bg-no-repeat bg-[length:100%_100%]">
          <div className="text-2xl font-bold ">
            Danh sách các mẫu CV xin việc <br />
            Áp dụng hầu hết cho các ngành nghề chuẩn 2025
          </div>
          <div className="text-lg font-normal mt-4">
            Cùng khởi đầu sự thành công của bạn với một chiếc CV <br /> chuyên
            nghiệp và đầy đủ những thông tin cần thiết nhé!
          </div>
        </div>
        <div className="mt-8 bg-white rounded">
          <div className="px-4 py-2 border-b text-default text-lg font-medium relative after:absolute after:left-2 after:bottom-[-1px]  after:h-[3px] after:bg-[#F37A20] after:w-20 ">
            Mẫu CV
          </div>
          <div className="p-4 mt-4">
            <div className="mb-4">
              <CustomSelectSearch
                options={options}
                onChange={handleSelectChange}
              />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              <BoxCV />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4">
        <div className="mx-auto container max-1280:px-2">
          <div className="pt-4">
            <img
              src="/imgs/img-header-jobs.png"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div className="mt-4">
            <div className="font-medium text-2xl">Bài viết được đề xuất</div>
            <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4">
              {listBlog?.map((item: IBlog, idx: number) => {
                return <NewInfomation key={idx} item={item} />;
              })}
            </div>
          </div>
          <div className="mt-4 border p-4 rounded ">content</div>
        </div>
      </div>
    </div>
  );
}
