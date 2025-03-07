import { ICompanyDetailJobProps } from "@/interface/interface";
import { BuildingFillUpBootstrapIcon } from "@/theme/icons/buildingFillUpBootstrapIcon";
import { PeopleFillBootstrapIcon } from "@/theme/icons/peopleFillBootstrapIcon";
import { MapPinIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const ImfomationCompany = ({ company }: ICompanyDetailJobProps) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <div className="flex mb-4">
        <div className="rounded-full border-[1px] border-solid border-[#EAE9E8] mr-2 text-[#514F4E] flex items-center justify-center overflow-hidden">
          <img src={company?.avatarLink} alt="" className="w-20 " />
        </div>
        <h2 className="font-bold line-clamp-2">{company?.companyName}</h2>
      </div>
      <div className="flex items-center mb-4">
        <PeopleFillBootstrapIcon className="w-6 mr-2" />
        <div className="text-xs font-semibold">
          Quy mô: {company?.capacity} nhân viên
        </div>
      </div>
      <div className="flex items-center mb-8">
        <MapPinIcon className="w-6 mr-2" />
        <div className="text-xs font-semibold">
          Địa điểm: {company?.addressInfo}
        </div>
      </div>
      <div className="flex justify-center items-center text-[#F37A20]">
        <BuildingFillUpBootstrapIcon className="w-6 mr-2" />
        <Link href={`/cong-ty/${company?.slug}`}>
          <div className="text-xs font-medium">Xem trang công ty</div>
        </Link>
      </div>
    </div>
  );
};
