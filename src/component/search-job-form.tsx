"use client";

import { IFormSearchJob } from "@/interface/form-slider";
import { SubmitHandler, useForm } from "react-hook-form";
import TmInput from "./hook-form/input";
import TmSelect from "./hook-form/select";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { optionsLocation } from "@/mockup-data/data";
import { useSearchParams } from "next/navigation";

export const SearchJobForm = () => {
  const onSubmit: SubmitHandler<IFormSearchJob> = (data) => console.log(data);

  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const { handleSubmit, control } = useForm<IFormSearchJob>({
    defaultValues: params,
  });

  return (
    <div className="xl:px-48 lg:px-40 px-2">
      <div className="w-full mt-4 relative ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	"
        >
          <div className="flex-1 ">
            <TmInput
              control={control}
              name="work"
              className="border-0"
              placeholder="Tìm kiếm việc làm"
            />
          </div>
          <div className="">
            <TmSelect
              icon={<MapPinIcon className="w-6 mr-2" />}
              name="location"
              className="border-0 !rounded-3xl bg-[#DDDDDD] mr-2"
              placeholder="Địa điểm làm việc"
              control={control}
              options={optionsLocation}
            />
          </div>

          <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
            <button type="submit" className="px-4 py-2 flex">
              <MagnifyingGlassIcon className="mr-2 w-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
