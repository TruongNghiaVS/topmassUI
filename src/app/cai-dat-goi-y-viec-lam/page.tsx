"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { ISettingSuggestJob, SettingJobState } from "../../interface/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import TmRadio from "@/component/hook-form/radio";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import CustomMultipleSelectSearchForm from "@/component/hook-form/customMultipleSelectSearchForm";
import { InfomationUser } from "@/component/infomation-user-right";
import {
  GET_CAREER,
  GET_JOB_SETTING,
  GET_PROVINCE,
  SAVE_JOB_SETTING,
} from "@/utils/api-url";
import axiosInstance, { fetcher } from "@/utils/axios";
import { useEffect, useState } from "react";
import { Option } from "@/component/hook-form/interface/interface";
import TmInput from "@/component/hook-form/input";
import CustomSelectSearchForm from "@/component/hook-form/customSelectSearchForm";
import { useLoading } from "../context/loading";
import { toast } from "react-toastify";
import useSWR from "swr";

const gender = [
  {
    label: "Nam",
    value: 1,
  },
  {
    label: "Nữ",
    value: 2,
  },
  {
    label: "Không xác định",
    value: 0,
  },
];

const salaryOptions = [
  {
    label: "Dưới 10 triệu",
    value: "1",
  },
  {
    label: "10 - 15 triệu",
    value: "2",
  },
  {
    label: "15 - 20 triệu",
    value: "3",
  },
  {
    label: "20 - 25 triệu",
    value: "4",
  },
  {
    label: "25 - 30 triệu",
    value: "5",
  },
  {
    label: "30 - 50 triệu",
    value: "6",
  },
  {
    label: "trên 50 triệu",
    value: "7",
  },
  {
    label: "Thoả thuận",
    value: "0",
  },
];

export default function SettingSuggestJob() {
  const [provinces, setProvinces] = useState<Option[]>([]);
  const [careers, setCareers] = useState<Option[]>([]);
  const [settingJob, setSettingJob] = useState<SettingJobState>({
    position: "",
    field: [],
    skill: "",
    salary: "",
    locationAddress: [],
    experience: "",
    gender: -1,
  });

  const { setLoading } = useLoading();

  const { data: dataSetting, mutate } = useSWR(GET_JOB_SETTING, fetcher);
  const getMasterdata = async () => {
    const response = await axiosInstance.get(GET_PROVINCE);
    const listData = response.data.data.map((item: any) => {
      return {
        value: item.code,
        label: item.name,
      };
    });
    setProvinces(listData);
    const resCareers = await axiosInstance.get(GET_CAREER);
    const listCareers = resCareers.data.map((item: any) => {
      return {
        value: item.id,
        label: item.text,
      };
    });

    const resSetting = axiosInstance.get(GET_JOB_SETTING);
    setCareers(listCareers);
  };

  useEffect(() => {
    getMasterdata();
    if (dataSetting && dataSetting.data) {
      reset({
        position: dataSetting.data.position ? dataSetting.data.position : "",
        field: dataSetting.data.field
          ? dataSetting.data.field.split(",").map((item: any) => +item)
          : [],
        skill: dataSetting.data.skill ? dataSetting.data.skill : "",
        salary: dataSetting.data.salary ? dataSetting.data.salary : "",
        locationAddress: dataSetting.data.locationAddress
          ? dataSetting.data.locationAddress.split(",")
          : [],
        experience: dataSetting.data.experience
          ? dataSetting.data.experience
          : "",
        gender: dataSetting.data.gender ? dataSetting.data.gender : -1,
      });
    }
  }, [dataSetting]);

  const schema = yup.object().shape({
    position: yup.string().required("Vui lòng chọn vị trí công việc"),
    field: yup
      .array()
      .min(1, "Vui lòng chọn ít nhất 1 ngành nghề")
      .of(yup.string().required())
      .required("Ngành nghề không được để trống"),
    skill: yup.string(),
    experience: yup.string().required("Vui lòng chọn kinh nghiệm làm việc"),
    salary: yup.string().required("Vui lòng chọn mức lương"),
    locationAddress: yup
      .array()
      .min(1, "Vui lòng chọn ít nhất 1 địa điểm làm việc")
      .of(yup.string().required())
      .required("Địa điểm làm việc không được để trống"),
    gender: yup.number(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISettingSuggestJob>({
    resolver: yupResolver(schema),
    defaultValues: {
      position: "",
      field: [],
      skill: "",
      salary: "",
      locationAddress: [],
      experience: "",
      gender: -1,
    },
  });

  const onSubmit: SubmitHandler<ISettingSuggestJob> = async (data) => {
    setLoading(true);
    try {
      const dataUpdate: any = data;
      dataUpdate.field = data.field.join(",");
      dataUpdate.locationAddress = data.locationAddress.join(",");
      const res = await axiosInstance.post(SAVE_JOB_SETTING, dataUpdate);
      toast.success("Lưu thông tin thành công");
      mutate();
    } catch (error) {
      toast.error("Lưu thông tin thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-1280:px-2 bg-white">
      <div className="mx-auto container">
        <div className="sm:grid grid-cols-12 gap-6 py-8 ">
          <div className="xl:col-span-8 md:col-span-7 sm:row-auto row-start-1 row-end-1">
            <div className="p-4 bg-[url(/imgs/img-suggest-job.png)] bg-no-repeat bg-[length:100%_100%] bg-cover">
              <div className="py-8 px-4 text-white">
                <div className="font-medium mb-4">
                  Hãy thường xuyên cập nhật thông tin gợi ý việc làm.
                </div>
                <div className="text-xs font-normal flex items-center mb-4">
                  Dễ dành tìm được những việc làm đang tuyển dụng phù hợp với
                  bản thân.
                </div>
                <div className="text-xs font-normal flex items-center mb-4">
                  Nhà tuyển dụng có thể kết nối với bạn.
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="font-xl font-bold">
                Vui lòng nhập đầy đủ các thông tin dưới đây:
              </div>
              <div className="mt-2 text-[#8E1909] text-xs font-normal">
                (*) Các thông tin bắt buộc
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <TmRadio
                    name="gender"
                    control={control}
                    options={gender}
                    classNameCustom="flex space-x-2"
                  />
                </div>
                <div className="my-4 font-medium flex items-center">
                  <BriefcaseIcon className="w-6 mr-2" />
                  Thông tin cá nhân
                </div>
                <div className="my-4">
                  <div className="">
                    Vị trí công việc <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    name="position"
                    control={control}
                    placeholder="Vị trí công việc"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Ngành nghề <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomMultipleSelectSearchForm
                    name="field"
                    control={control}
                    options={careers}
                    placeholder="Chọn ngành nghề"
                  />
                </div>
                <div className="mb-4">
                  <div>Kỹ năng </div>
                  <TmInput
                    name="skill"
                    control={control}
                    placeholder="Chọn kỹ năng"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Kinh nghiệm <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    name="experience"
                    control={control}
                    placeholder="Chọn kinh nghiệm làm việc"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Mức lương <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomSelectSearchForm
                    name="salary"
                    control={control}
                    options={salaryOptions}
                    placeholder="Chọn mức lương"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Địa điểm làm việc <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomMultipleSelectSearchForm
                    name="locationAddress"
                    control={control}
                    options={provinces}
                    placeholder="Chọn địa điểm làm việc"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className=" py-2 px-4 text-white bg-[#FF7D55] rounded-lg text-base font-bold"
                  >
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5 sm:row-auto row-start-1 row-end-1">
            <InfomationUser />
            <div className="mt-4 rounded-lg overflow-hidden sm:block hidden">
              <img src="/imgs/banner-4.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
