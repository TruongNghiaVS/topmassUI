"use client";

import { GET_ALL_BLOG_WITH_CATEGORY } from "@/utils/api-url";
import { fetcher } from "@/utils/axios";
import Link from "next/link";
import useSWR from "swr";

export default function News() {
  const { data: blogs, error } = useSWR(GET_ALL_BLOG_WITH_CATEGORY, fetcher);

  return (
    <div className="bg-white min-h-screen">
      <div className="">
        <img src="/imgs/banner-tin-tuc.png" className="w-full" alt="" />
      </div>
      <div className="container mx-auto">
        <div className="mt-4">
          {blogs?.map((item: any, idx: number) => {
            return (
              <div key={idx}>
                <div className="font-medium text-base">{item.title}</div>
                <div className="mt-4">
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {item.dataBlog.map((detail: any, index: number) => {
                      return (
                        <div key={index}>
                          <div className="rounded-lg bg-white overflow-hidden ">
                            <div className="w-full h-[200px] object-fill">
                              <Link
                                href={`/tin-tuc/${item.slug}/${detail.slug}`}
                              >
                                <img
                                  src={`${detail.coverFullLink}`}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </Link>
                            </div>
                            <Link href={`/tin-tuc/${item.slug}/${detail.slug}`}>
                              <div className="m-5 font-semibold line-clamp-3 h-[84px]">
                                {detail.title}
                              </div>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
