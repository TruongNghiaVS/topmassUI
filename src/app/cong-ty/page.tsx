"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IFormSearchDetail } from "../viec-lam/[id]/search-detail";
import TmInput from "@/component/hook-form/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { companys } from "@/mockup-data/data";
import { InfomationCompany } from "./infomation-company";
import { Description } from "@/component/description";
import { TitleCustom } from "@/component/custom-title";

export default function CompanyPage() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSearchDetail>();
  const onSubmit: SubmitHandler<IFormSearchDetail> = (data) =>
    console.log(data);

  return (
    <div className="bg-[#EAE9E8]">
      <div className="bg-bgHeaderJobCustom max-1280:px-2">
        <div className="container mx-auto">
          <div className="lg:pt-14 pt-8 inline-grid">
            <div className="lg:text-4xl md:text-2xl text-xl font-bold">
              Tìm hiểu văn hoá công ty
            </div>
            <div className="font-normal mt-2">
              Tìm hiểu văn hóa công ty và chọn nơi làm việc phù hợp nhất
            </div>
            <div className="pt-5 pb-12 relative z-[2]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-stretch bg-white rounded-3xl py-2 px-4 border border-[#F89E1B] flex-wrap	"
              >
                <div className="flex-1">
                  <TmInput
                    register={register}
                    name="key"
                    icon={<MagnifyingGlassIcon className="w-6" />}
                    error={errors.key}
                    className="border-0"
                    placeholder="Nhập tên công ty"
                  />
                </div>
                <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
                  <button type="submit" className="px-4 py-2">
                    Tìm kiếm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-1280:px-2">
        <div className="mx-auto container">
          <TitleCustom title="Danh Sách công ty" className="mb-8" />
          <div className="mt-4 grid xl:grid-cols-3 md:grid-cols-2 gap-4">
            {list.map((value) => {
              return (
                <div key={value.toString() + companys.slug}>
                  <InfomationCompany item={companys} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
}
