"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import TmInput from "./hook-form/input";
import TmSelect from "./hook-form/select";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import {
  Career,
  Experiences,
  JobType,
  Provinces,
  Rank,
} from "@/modules/helper/master-data";
import { IFormSearchJob, ISearchJobProps } from "@/interface/search-job";
import { useEffect, useState } from "react";
import { genderFilter, rankSalary } from "@/mockup-data/data";

export const SearchJobForm = ({
  search,
  setSearch,
  setModeOderby,
  modeOderby,
}: ISearchJobProps) => {
  const { listProvinces } = Provinces();
  const { listCareers } = Career();
  const { listRanks } = Rank();
  const { listExperiences } = Experiences();
  const { listJobType } = JobType();

  const [isShowExtentFilter, setIsShowExtentFilter] = useState(false);

  useEffect(() => {
    reset(search);
  }, [search.KeyWord, search.Location, search.Field]);

  const { handleSubmit, control, reset } = useForm<IFormSearchJob>({
    defaultValues: search,
  });

  const getRangeSalary = (data: IFormSearchJob) => {
    if (data.Salary) {
      switch (+data.Salary) {
        case -1:
          data.SalaryFrom = -1;
          data.SalaryTo = -1;
          break;
        case 1:
          data.SalaryFrom = 1;
          data.SalaryTo = 3;
          break;
        case 2:
          data.SalaryFrom = 3;
          data.SalaryTo = 5;
          break;
        case 3:
          data.SalaryFrom = 5;
          data.SalaryTo = 10;
          break;
        case 4:
          data.SalaryFrom = 10;
          data.SalaryTo = 15;
          break;
        case 5:
          data.SalaryFrom = 15;
          data.SalaryTo = 20;
          break;
        case 6:
          data.SalaryFrom = 20;
          data.SalaryTo = 30;
          break;
        case 7:
          data.SalaryFrom = 30;
          data.SalaryTo = 40;
          break;
        case 8:
          data.SalaryFrom = 40;
          data.SalaryTo = 50;
          break;
        case 9:
          data.SalaryFrom = 50;
          data.SalaryTo = 300;
          break;
      }
    }
    return data;
  };

  const onSubmit: SubmitHandler<IFormSearchJob> = async (data) => {
    data = getRangeSalary(data);
    setSearch(data);
  };
  return (
    <div className="xl:px-44 lg:px-40 px-2">
      <div className="w-full mt-4 relative ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	sm:flex-row flex-col space-y-1 sm:space-y-0">
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
                className="border-0 !rounded-3xl bg-[#DDDDDD] sm:mr-2"
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
            <div className="w-full mt-8 relative bg-white rounded-lg shadow-md p-1 border shadow-md ">
              <div className="grid sm:grid-cols-4 grid-cols-1 items-center gap-1 ">
                <TmSelect
                  name="Field"
                  control={control}
                  className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                  placeholder="Ngành nghề/lĩnh vực"
                  options={listCareers}
                />
                <TmSelect
                  name="RankLevel"
                  control={control}
                  className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                  placeholder="cấp bậc"
                  options={listRanks}
                />
                <button
                  type="button"
                  className="px-3 py-2 border text-start rounded border-[#DDDDDD] hover:bg-colorBase hover:text-white sm:mt-0 mt-2 mr-2"
                >
                  Tuyển gấp
                </button>

                <button
                  type="button"
                  className="px-3 py-2 border rounded border-[#DDDDDD] flex items-center sm:mt-0 mt-2"
                  onClick={() => setIsShowExtentFilter(!isShowExtentFilter)}
                >
                  <AdjustmentsHorizontalIcon className="w-6 mr-2" />
                  Tất cả bộ lọc
                </button>
              </div>
              {isShowExtentFilter ? (
                <div className="grid sm:grid-cols-4 grid-cols-1 items-center gap-1 mt-2 ">
                  <TmSelect
                    name="ExperienceId"
                    control={control}
                    className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                    placeholder="Kinh nghiệm"
                    options={listExperiences}
                  />
                  <TmSelect
                    name="Salary"
                    control={control}
                    className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                    placeholder="Mức lương"
                    options={rankSalary}
                  />
                  <TmSelect
                    name="JobType"
                    control={control}
                    className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
                    placeholder="Loại hình công việc"
                    options={listJobType}
                  />
                  <TmSelect
                    name="Gender"
                    control={control}
                    className="border rounded border-[#DDDDDD] !px-2 sm:mt-0 mt-2"
                    placeholder="Giới tính"
                    options={genderFilter}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
        <div className="mt-10">
          <div className="flex sm:justify-between flex-wrap">
            <button className="font-normal mr-2 ">Sắp xếp theo</button>
            <button
              className={`font-normal mr-2 py-1 px-3 rounded-lg ${
                modeOderby === -1 && "bg-colorBase text-white"
              } `}
              onClick={() => setModeOderby(-1)}
            >
              Tất cả
            </button>
            <button
              className={`font-normal mr-2 py-1 px-3 rounded-lg ${
                modeOderby === 0 && "bg-colorBase text-white"
              } `}
              onClick={() => setModeOderby(0)}
            >
              Liên quan nhất
            </button>
            <button
              className={`font-normal mr-2 py-1 px-3 rounded-lg ${
                modeOderby === 2 && "bg-colorBase text-white"
              } `}
              onClick={() => setModeOderby(2)}
            >
              Lương (cao - thấp)
            </button>
            <button
              className={`font-normal mr-2 py-1 px-3 rounded-lg ${
                modeOderby === 4 && "bg-colorBase text-white"
              } `}
              onClick={() => setModeOderby(4)}
            >
              Ngày đăng mới nhất
            </button>
            <button
              className={`font-normal mr-2 py-1 px-3 rounded-lg ${
                modeOderby === 5 && "bg-colorBase text-white"
              } `}
              onClick={() => setModeOderby(5)}
            >
              Ngày đăng cũ nhất
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
