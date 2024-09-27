"use client";

import { ISliderFormParram } from "@/app/interface/interface";
import { IFormSlider } from "@/interface/form-slider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import TmInput from "./hook-form/input";
import TmSelect from "./hook-form/select";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { BagBootstrapIcon } from "@/theme/icons/bagBootstrapIcon";
import { Career, Provinces } from "@/module/helper/master-data";

export const SliderForm = () => {
  const { provinces } = Provinces();
  const { careers } = Career();
  const schema = yup.object().shape({
    work: yup.string(),
    location: yup.string(),
    type: yup.string(),
  });
  const { handleSubmit, control } = useForm<IFormSlider>({
    resolver: yupResolver(schema),
    defaultValues: {
      location: "",
      work: "",
      type: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormSlider> = (data: any) => {
    const queryString = new URLSearchParams(data).toString();
    router.push(`/tim-kiem-viec-lam?${queryString}`);
  };

  return (
    <div className="xl:px-48 lg:px-40 px-2">
      <div className="w-full mt-4 relative ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-stretch bg-white rounded-3xl py-2 px-4 shadow-[0px_-8px_0_rgb(248,158,27)] flex-wrap	"
        >
          <div className="flex-1 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[1px] after:h-[70%] after:bg-black after:my-auto">
            <TmInput
              name="work"
              className="border-0"
              placeholder="Tìm kiếm việc làm"
              control={control}
            />
          </div>
          <div className="flex-1">
            <TmSelect
              icon={<MapPinIcon className="w-6 mr-2" />}
              name="location"
              className="border-0"
              placeholder="Địa điểm làm việc"
              control={control}
              options={provinces}
            />
          </div>

          <div className="flex-1 mr-2">
            <TmSelect
              icon={<BagBootstrapIcon className="w-4 mr-2" />}
              className="border-0"
              name="type"
              placeholder="Ngành nghề"
              control={control}
              options={careers}
            />
          </div>
          <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
            <button type="submit" className="px-4 py-2 flex">
              <MagnifyingGlassIcon className="mr-2 w-6" />
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
