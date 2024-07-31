"use client";
import TmInput from "@/component/hook-form/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormSearchDetail {
  key: string;
}

export const SearchDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSearchDetail>();
  const onSubmit: SubmitHandler<IFormSearchDetail> = (data) =>
    console.log(data);
  return (
    <div className="bg-bgHeaderJobCustom">
      <div className="container mx-auto">
        <div className="lg:px-[136px] md:px-16 px-2 pt-5 pb-12 relative z-[2]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	"
          >
            <div className="flex-1">
              <TmInput
                register={register}
                name="key"
                error={errors.key}
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
