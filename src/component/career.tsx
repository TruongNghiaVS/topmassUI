import Link from "next/link";
import { TitleCustom } from "./custom-title";
import { ICareerBlogProps } from "@/interface/blog";

export const Career = ({ blogs }: ICareerBlogProps) => {
  return (
    <div className="mt-12 px-2 max-1280:px-2">
      <div className="container mx-auto">
        <TitleCustom title="Cẩm nang nghề nghiệp" className="mb-9" />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-2 lg:px-0">
          {blogs?.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-md border-[1px] border-solid boder-[#DBDBDB]"
              >
                <div className="">
                  <Link href={`/tin-tuc/cam-nang-nghe-nghiep/${item.slug}`}>
                    <img
                      src={
                        item.coverFullLink.length > 0
                          ? item.coverFullLink
                          : "/imgs/img-detail-new.png"
                      }
                      alt=""
                      className="w-full"
                    />
                  </Link>
                </div>
                <div className="px-4 py-5">
                  <div className="text-xl font-bold line-clamp-3 ">
                    <Link href={`/tin-tuc/cam-nang-nghe-nghiep/${item.slug}`}>
                      {item.title}
                    </Link>
                  </div>
                  <div className="line-clamp-4 mt-2">
                    <Link href={`/tin-tuc/cam-nang-nghe-nghiep/${item.slug}`}>
                      {item.shortDes}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <div className="inline-block py-2 px-6  rounded-lg border-[1px] border-solid border-[#F9BA06] text-default bg-[#F3F5F7]">
            <Link href="/tin-tuc/cam-nang-nghe-nghiep">
              Xem thêm cẩm nang nghề nghiệp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
