"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { ISettingSuggestJob } from "../interface/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import TmRadio from "@/component/hook-form/radio";
import { BriefcaseIcon } from "@heroicons/react/16/solid";
import CustomSelectSearchForm from "@/component/hook-form/customSelectSearchForm";
import CustomMultipleSelectSearchForm from "@/component/hook-form/customMultipleSelectSearchForm";
import { InfomationUser } from "@/component/infomation-user-right";

export default function SettingSuggestJob() {
  const schema = yup.object().shape({
    position: yup.string().required("Vui lòng chọn vị trí công việc"),
    job_type: yup
      .array()
      .min(1, "Vui lòng chọn ít nhất 1 ngành nghề")
      .of(yup.string().required())
      .required("Ngành nghề không được để trống"),
    skill: yup.array(),
    experience: yup.string().required("Vui lòng chọn kinh nghiệm làm việc"),
    salary: yup.string().required("Vui lòng chọn mức lương"),
    location: yup
      .array()
      .min(1, "Vui lòng chọn ít nhất 1 địa điểm làm việc")
      .of(yup.string().required())
      .required("Địa điểm làm việc không được để trống"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISettingSuggestJob>({
    resolver: yupResolver(schema),
    defaultValues: {
      position: "",
      job_type: [],
      skill: [],
      location: [],
      experience: "",
    },
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
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "tailwind", label: "TailwindCSS" },
    { value: "tailwind1", label: "TailwindCSS1" },
    { value: "tailwind2", label: "TailwindCSS2" },
    { value: "tailwind3", label: "TailwindCSS3" },
  ];

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
                  <CustomSelectSearchForm
                    name="position"
                    control={control}
                    options={options}
                    placeholder="Vị trí công việc"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Ngành nghề <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomMultipleSelectSearchForm
                    name="job_type"
                    control={control}
                    options={options}
                    placeholder="Chọn ngành nghề"
                  />
                </div>
                <div className="mb-4">
                  <div>Kỹ năng </div>
                  <CustomMultipleSelectSearchForm
                    name="skill"
                    control={control}
                    options={options}
                    placeholder="Chọn kỹ năng"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Kinh nghiệm <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomSelectSearchForm
                    name="experience"
                    control={control}
                    options={options}
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
                    options={options}
                    placeholder="Chọn mức lương"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Địa điểm làm việc <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <CustomMultipleSelectSearchForm
                    name="location"
                    control={control}
                    options={options}
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
              <img src="/imgs/img-no.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
