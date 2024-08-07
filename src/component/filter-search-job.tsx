"use client";
import { useForm } from "react-hook-form";
import TmSelect from "./hook-form/select";
import { fields, optionsType, ranks } from "@/mockup-data/data";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";

export const FilterSearchForm = () => {
  const { register } = useForm();
  return (
    <div className="xl:px-48 lg:px-40 px-2">
      <div className="w-full mt-8 relative ">
        <div className="p-1 border rounded-lg shadow-md flex items-center bg-white sm:justify-between flex-wrap">
          <TmSelect
            register={register}
            name="type"
            className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
            placeholder="Ngành nghề"
            data={optionsType.map((value) => {
              return <option key={value}>{value}</option>;
            })}
          />
          <TmSelect
            register={register}
            name="filed"
            className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
            placeholder="Tất cả lĩnh vực"
            data={fields.map((value) => {
              return <option key={value}>{value}</option>;
            })}
          />
          <TmSelect
            register={register}
            name="rank"
            className="border rounded border-[#DDDDDD] mr-2 !px-2 sm:mt-0 mt-2"
            placeholder="Tất cả cấp bậc"
            data={ranks.map((value) => {
              return <option key={value}>{value}</option>;
            })}
          />
          <button className="px-3 py-2 border rounded border-[#DDDDDD] sm:mt-0 mt-2 mr-2">
            Tuyển gấp
          </button>

          <button className="px-3 py-2 border rounded border-[#DDDDDD] flex items-center sm:mt-0 mt-2">
            <AdjustmentsHorizontalIcon className="w-6 mr-2" />
            Tất cả bộ lọc
          </button>
        </div>
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
