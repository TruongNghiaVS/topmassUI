"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import TmInput from "./hook-form/input";
import TmSelect from "./hook-form/select";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import { Career, Provinces, Rank, Realm } from "@/module/helper/master-data";
import { IFormSearchJob, ISearchJobProps } from "@/interface/search-job";
import { useEffect } from "react";

export const SearchJobForm = ({ search, setSearch }: ISearchJobProps) => {
  const { listRealms } = Realm();
  const { listProvinces } = Provinces();
  const { listCareers } = Career();
  const { listRanks } = Rank();

  useEffect(() => {
    reset(search);
  }, [search.KeyWord, search.Location, search.Field]);

  const { handleSubmit, control, reset } = useForm<IFormSearchJob>({
    defaultValues: search,
  });

  const onSubmit: SubmitHandler<IFormSearchJob> = async (data) => {
    await setSearch(data);
  };
  return (
    <div className="xl:px-44 lg:px-40 px-2">
      <div className="w-full mt-4 relative ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	">
            <div className="flex-1 ">
              <TmInput
                control={control}
                name="KeyWord"
                className="border-0"
                placeholder="Tìm kiếm việc làm"
              />
            </div>
            <div className="">
              <TmSelect
                icon={<MapPinIcon className="w-6 mr-2" />}
                name="Location"
                className="border-0 !rounded-3xl bg-[#DDDDDD] mr-2"
                placeholder="Địa điểm làm việc"
                control={control}
                options={listProvinces}
              />
            </div>
            <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
              <button type="submit" className="px-4 py-2 flex">
                <MagnifyingGlassIcon className="mr-2 w-6" />
              </button>
            </div>
          </div>
          <div className=" px-2">
            <div className="w-full mt-8 relative ">
              <div className="p-1 border rounded-lg shadow-md grid sm:grid-cols-4 grid-cols-1 items-center bg-white gap-1 ">
                <TmSelect
                  name="Field"
                  control={control}
                  className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                  placeholder="Ngành nghề/ Cấp bậc"
                  options={listCareers}
                />
                <TmSelect
                  name="RankLevel"
                  control={control}
                  className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                  placeholder="Tất cả cấp bậc"
                  options={listRanks}
                />
                <button
                  type="button"
                  className="px-3 py-2 border text-start rounded border-[#DDDDDD] sm:mt-0 mt-2 mr-2"
                >
                  Tuyển gấp
                </button>

                <button
                  type="button"
                  className="px-3 py-2 border rounded border-[#DDDDDD] flex items-center sm:mt-0 mt-2"
                >
                  <AdjustmentsHorizontalIcon className="w-6 mr-2" />
                  Tất cả bộ lọc
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-10">
          <div className="flex sm:justify-between flex-wrap">
            <button className="font-normal mr-2 ">Sắp xếp theo</button>
            <button className="font-normal mr-2 ">Tất cả</button>
            <button className="font-normal mr-2 ">Liên quan nhất</button>
            <button className="font-normal mr-2 ">Lương (cao - thấp)</button>
            <button className="font-normal mr-2 ">Ngày đăng mới nhất</button>
            <button className="font-normal mr-2 ">Ngày đăng củ nhất</button>
          </div>
        </div>
      </div>
    </div>
  );
};
