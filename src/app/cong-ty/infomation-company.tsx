import Link from "next/link";
import { PopupLoginDetailJob } from "../viec-lam/[id]/popup-login-detail-job";
import { useCallback, useEffect, useState } from "react";
import { IInfomationCompany } from "../interface/interface";

export const InfomationCompany = ({ item , handleOpenModal } : IInfomationCompany ) => {

 
  
  let slugCompany = "/cong-ty/" + item.slug;
  return (
    <div className="overflow-hidden rounded-lg md:mb-10 mb-4 border border-[#F37A20]">
      <div>
        <Link href={`${slugCompany}`}>
          <img src={`${item.coverFullLink}`} alt="" className="w-full" />
        </Link>
      </div>
      <div className="p-2 bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-[#EAE9E8] rounded mr-4">
            <Link href={`${slugCompany}`}>
              <img src={`${item.logoFullLink}`} alt="" className="w-20" />
            </Link>
          </div>
          <div>
            <Link href={`${slugCompany}`}>
              <div className="text-lg font-medium line-clamp-2">
                {item.fullName}
              </div>
            </Link>
            <div className="flex justify-between">
              <div className="font-normal text-[10px]">
                {item.followCount} lượt theo dõi
              </div>
              <button  onClick={() => {
                        handleOpenModal();
                      }} className="text-default text-xs ">+ Theo dõi</button>
            </div>
          </div>
        </div>
        <div>
          {/* {item.data.map((value: any, index: number) => {
            return (
              <div
                key={index.toString() + value.name}
                className="mt-2 p-4 border rounded-lg"
              >
                <div className="text-[16px]	leading-[18px] font-bold ">
                  <Link href={`/viec-lam/${value.slug}`}>{item.title}</Link>
                </div>
                <div className="flex">
                  <div className="flex mt-2	justify-center sm:justify-start">
                    <div className="text-xs text-[#FF5500] pr-[0.65em] mr-2 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]">
                      <Link href={`/viec-lam/${value.slug}`}>
                        {value.price}
                      </Link>
                    </div>
                    <div className="text-xs px-[0.65em]">
                      <Link href={`/viec-lam/${value.slug}`}>{value.city}</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })} */}
        </div>
        <div className="px-4 py-4">
          <Link href={`/cong-ty/${item.slug}`} className="p-0">
            <p className="py-1 rounded-lg border border-[#F37A20] text-default text-center">
              Xem công ty
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
