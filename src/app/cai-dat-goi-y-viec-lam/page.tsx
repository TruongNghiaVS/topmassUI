"use client";
import TmInput from "@/component/hook-form/input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { ISettingSuggestJob } from "../interface/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import TmRadio from "@/component/hook-form/radio";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import CustomSelectSearchForm from "@/component/hook-form/customSelectSearchForm";
import CustomMultiSelectSearchForm from "@/component/hook-form/customMultipleSelectSearchForm";

export default function SettingSuggestJob() {
  const schema = yup.object().shape({
    position: yup.string().required("Vui lòng chọn vị trí công việc"),
    job_type: yup.string().required("Vui lòng chọn ngành nghề"),
    skill: yup.string(),
    experience: yup.string().required("Vui lòng chọn kinh nghiệm"),
    salary: yup.string().required("Vui lòng chọn mức lương"),
    location: yup.string().required("Vui lòng chọn địa điểm làm việc"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISettingSuggestJob>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ISettingSuggestJob> = (data) => {
    console.log(data);
  };

  const gender = [
    {
      label: "Nam",
      value: "1",
    },
    {
      label: "Nữ",
      value: "2",
    },
    {
      label: "Không xác định",
      value: "0",
    },
  ];

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="max-1280:px-2 bg-white">
      <div className="mx-auto container">
        <div className="sm:grid grid-cols-12 gap-6 py-8 ">
          <div className="xl:col-span-8 md:col-span-7">
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
                    options={gender}
                    register={register}
                    name="gender"
                    classNameCustom="flex items-center space-x-10"
                  />
                </div>
                <div className="mt-4 font-medium flex items-center">
                  <BriefcaseIcon className="w-6 mr-2" />
                  Thông tin cá nhân
                </div>
                <div className="mt-4">
                  <div className="">
                    Vị trí công việc <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <div>
                    <CustomSelectSearchForm
                      name="position"
                      control={control}
                      options={options}
                      error={errors.position}
                      placeholder="Nhập vị trí công việc"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <div>
                    Ngành nghề <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomMultiSelectSearchForm
                    name="job_type"
                    control={control}
                    options={options}
                    error={errors.job_type}
                  />
                </div>
                <div className="mb-8">
                  <div>Kỹ năng </div>
                  <CustomMultiSelectSearchForm
                    name="skill"
                    control={control}
                    options={options}
                    error={errors.skill}
                  />
                </div>
                <div>
                  <div>
                    Kinh nghiệm <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomSelectSearchForm
                    name="experience"
                    control={control}
                    options={options}
                    error={errors.experience}
                    placeholder="Nhập vị trí công việc"
                  />
                </div>
                <div>
                  <div>
                    Mức lương <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomSelectSearchForm
                    name="salary"
                    control={control}
                    options={options}
                    error={errors.salary}
                    placeholder="Nhập vị trí công việc"
                  />
                </div>
                <div className="mb-8">
                  <div>
                    Địa điểm làm việc <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomMultiSelectSearchForm
                    name="location"
                    control={control}
                    options={options}
                    error={errors.location}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-[#FF7D55] rounded-lg text-base font-bold"
                >
                  Hoàn tất
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5"></div>
        </div>
      </div>
    </div>
  );
}
