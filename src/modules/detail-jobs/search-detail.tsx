"use client";
import TmInput from "@/component/hook-form/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IFormSearchDetail {
  KeyWord?: string;
}

export const SearchDetail = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<IFormSearchDetail>();
  const onSubmit: SubmitHandler<IFormSearchDetail> = (data: any) => {
    const queryString = new URLSearchParams(data).toString();
    router.push(`/tim-kiem-viec-lam?${queryString}`);
  };
  return (
    <div className="bg-bgHeaderJobCustom">
      <div className="container mx-auto">
        <div className="lg:px-[136px] md:px-16 px-2 pt-5 pb-12 relative z-[2]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	sm:flex-row flex-col space-y-1 sm:space-y-0"
          >
            <div className="flex-1">
              <TmInput
                control={control}
                name="KeyWord"
                className="border-0"
                placeholder="Tìm kiếm việc làm, công ty, ngành nghề"
              />
            </div>
            <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
              <button type="submit" className="px-4 py-2">
                <MagnifyingGlassIcon className="w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
