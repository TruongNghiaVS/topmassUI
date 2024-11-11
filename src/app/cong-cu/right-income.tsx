"use client";

import { IBlog } from "@/interface/blog";
import { GET_ALLBLOGS_BYCATEGORY } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import useSWR from "swr";

export const RightIncome = () => {
  const { data: blogs } = useSWR(
    `${GET_ALLBLOGS_BYCATEGORY}?SlugCategory=cam-nang-nghe-nghiep&limit=4`,
    fetcher
  );
  const list = [1, 2, 3, 4];
  return (
    <div>
      <div>
        <img src="/imgs/banner-5.png" alt="" className="w-full rounded-lg" />
      </div>
      <div className="mt-4 p-4 rounded-lg bg-white">
        <div className="flex text-default text-xl">
          <ClipboardDocumentListIcon className="w-6 mr-2" /> Bài viết liên quan
        </div>
        <div className="mt-2">
          {blogs?.data.map((blog: IBlog, idx: number) => {
            return (
              <div key={idx} className="mt-2">
                <Link href={`/tin-tuc/${blog.fullSlug}`}>{blog.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <img src="/imgs/banner-6.png" alt="" className="w-full rounded-lg" />
      </div>
      <div className="mt-4">
        <img src="/imgs/banner-7.png" alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
};
