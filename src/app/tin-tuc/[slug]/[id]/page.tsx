import { CreateCv } from "@/component/create-cv";
import { InfomationJobLike } from "@/component/infomation-job-like";
import { InfomationJobSame } from "@/component/job-same-infomation";
import { jobSame, jobSlider } from "@/mockup-data/data";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { NewInfomation } from "../../new-infomation";

const NewDetail = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="max-1280:px-2">
      <div className="mx-auto container">
        <div className="sm:grid grid-cols-12 gap-4 mt-4">
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
                <div className="inline-block px-4 py-2 bg-gradient-to-r text-white from-[#D14B00] to-[#F89E1B] rounded">
                  Việc làm liên quan
                </div>
                <div className="mt-2">
                  {data.map((item) => {
                    return (
                      <InfomationJobSame
                        key={item.toString() + jobSame.title}
                        item={jobSame}
                      />
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
            <div className="font-normal text-xl	mt-8">
              Top Công việc mới nhất
            </div>
            <div>
              {data.map((item) => {
                return (
                  <InfomationJobLike
                    item={jobSlider}
                    key={item.toString() + jobSlider.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4 bg-[#E0E0E0]">
        <div className="container mx-auto">
          <div className="font-medium text-2xl">Cùng chuyên mục</div>
          <div className="grid xl:grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4">
            {data.map((value, idx) => {
              return <NewInfomation key={value.toString() + idx.toString()} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;