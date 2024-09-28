import { ICompanyDetailJobProps } from "@/interface/interface";
import { BuildingFillUpBootstrapIcon } from "@/theme/icons/buildingFillUpBootstrapIcon";
import { PeopleFillBootstrapIcon } from "@/theme/icons/peopleFillBootstrapIcon";
import { MapPinIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const ImfomationCompany = ({ company }: ICompanyDetailJobProps) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <div className="flex mb-4">
        <div className="p-1 rounded-full border-[1px] border-solid border-[#EAE9E8] mr-2 text-[#514F4E]">
          <img src={company?.avatarLink} alt="" className="w-20 " />
        </div>
        <div className="text-lg font-bold line-clamp-2">
          {company?.companyName}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <PeopleFillBootstrapIcon className="w-6 mr-2" />
        <div className="text-xs font-semibold">Quy mô: {company?.capacity}</div>
      </div>
      <div className="flex items-center mb-8">
        <MapPinIcon className="w-6 mr-2" />
        <div className="text-xs font-semibold">
          Địa điểm: {company?.addressInfo}
        </div>
      </div>
      <div className="flex justify-center items-center text-[#F37A20]">
        <BuildingFillUpBootstrapIcon className="w-6 mr-2" />
        <Link href={`/cong-ty/${company?.companyId}`}>
          <div className="text-xs font-medium">Xem trang công ty</div>
        </Link>
      </div>
    </div>
  );
};
