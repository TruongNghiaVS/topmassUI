import { IInfomationJobCVProps } from "@/interface/infomation-job";
import { TrashIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const InfomationJobCV = ({ item }: IInfomationJobCVProps) => {
  return (
    <div className="border-[1px] border-[#d9dbe9] bg-white p-4 rounded-md	hover:bg-hoverJob hover:outline-[#e5a2a3] hover:outline-[0.5px]">
      <div className="sm:flex items-center my-2 h-full">
        <div className="w-20 sm:mx-0 sm:mr-8 mx-auto sm:mb-0 mb-2">
          <Link href={`/viec-lam/${item.slug}`}>
            <img src="/imgs/logo-work.png" alt="" className="w-full" />
          </Link>
        </div>
        <div className="text-center sm:text-start w-full">
          <div className="sm:flex justify-between">
            <div className="text-[16px]	leading-[18px] font-bold ">
              <Link href={`/viec-lam/${item.slug}`}>
                <span className="text-xs uppercase px-1 py-1 mr-2 text-white rounded-[10px] bg-[#F90808]">
                  hot
                </span>
                {item.title}
              </Link>
            </div>
            <div className="text-sm font-normal text-default">{item.price}</div>
          </div>
          <div className="text-sm font-normal mt-2.5 ">
            <Link href={`/viec-lam/${item.slug}`}>{item.company}</Link>
          </div>
          <div className="mt-4 sm:flex grid sm:items-end justify-center sm:justify-between">
            <div>
              <div className="inline-block rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 mt-2">
                {item.city}
              </div>
              <div className="inline-block rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 mt-2">
                còn <span className="font-semibold">{item.date}</span> ngày để
                ứng tuyển
              </div>
              <div className="inline-block rounded-[3px] text-sm bg-[#E2E2E2] inline-block py-[0.35em] px-[0.65em] mr-2 mt-2">
                Cập nhật 50 phút trước
              </div>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <button className="bg-[#F37A20] py-1 px-2 text-white rounded mr-2">
                Ứng tuyển
              </button>
              <button>
                <HeartIcon className="w-6 mr-2 text-default" />
              </button>
              <button>
                <TrashIcon className="w-6 text-default" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
