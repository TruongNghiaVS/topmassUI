"use client";
import { New } from "./new";
import { TitleCustom } from "@/component/custom-title";
import { GET_ALLBLOGS_BYCATEGORY } from "@/utils/api-url";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";
import { IBlogDataItem } from "@/interface/interface";

export default function NewCategory({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data: DataAllBlogs } = useSWR(
    `${GET_ALLBLOGS_BYCATEGORY}?SlugCategory=${slug}`,
    fetcher
  );

  let categoryName = "";

  switch (slug) {
    case "bi-quyet-tim-viec":
      categoryName = "Bí Quyết Tìm Việc";
      break;
    case "thi-truong-xu-huong":
      categoryName = "Thị Trường - Xu Hướng";
      break;
    case "goc-thu-gian":
      categoryName = "Góc thư giản";
      break;
    case "tien-ich":
      categoryName = "Tiện Ích";
      break;
    case "goc-bao-chi":
      categoryName = "Góc Báo Chí";
      break;
    case "thi-truong-luong":
      categoryName = "Thị Trường Lương";
      break;
    case "cam-nang-nghe-nghiep":
      categoryName = "Cẩm Nang Nghề Nghiệp";
      break;
    case "thi-truong-xu-huong-tim-viec":
      categoryName = "Thị Trường - Xu Hướng Tìm Việc";
      break;
    case "ky-nang-phong-van":
      categoryName = "Kỹ Năng Phỏng Vấn";
      break;
    default:
      break;
  }

  return (
    <div className="bg-[#f0f0f0] pb-10 max-1280:px-2">
      <div className="mx-auto container">
        <TitleCustom title={categoryName} className="py-8 text-3xl" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {DataAllBlogs?.data?.map((item: IBlogDataItem, index: number) => {
            return (
              <div key={index} className="col-span-1">
                <New item={item} slug={slug} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
