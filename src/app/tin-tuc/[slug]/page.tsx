"use client";
import { news } from "@/mockup-data/data";
import { New } from "./new";
import { TitleCustom } from "@/component/custom-title";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";
import { GET_ALL_COMPANY } from "@/utils/api-url";

export default function NewCategory({ params }: { params: { slug: string } }) {
  debugger;
  const { slug } = params;

  const { data: DatallCompany, error: ErrorDataAllCompany, mutate } = useSWR(
    `${GET_ALL_COMPANY}?SlugCategory=${slug}`,
    fetcher
  );

  return (
    <div className="bg-[#f0f0f0] pb-10 max-1280:px-2">
      <div className="mx-auto container">
        <TitleCustom title="Bí quyết tìm việc" className="py-8 text-3xl" />
        <div className="grid grid-cols-4 gap-6">
          {news.map((item, index) => {
            return (
              <div key={index.toString() + item.title} className="col-span-1">
                <New item={item} slug="bi-quyet-tim-viec" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
