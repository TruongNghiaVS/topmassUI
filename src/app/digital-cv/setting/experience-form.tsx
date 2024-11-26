import { useLoading } from "@/app/context/loading";
import {
  IInfomationExperience,
  IInfomationExperienceProps,
} from "@/interface/interface";
import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import { ADD_OR_UPDATE_EXPERIENCE } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { getFileUpload } from "@/utils/business/upload-mutiple-file";
import {
  BuildingOfficeIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
const CustomCKEditor = dynamic(
  () => {
    return import("../../../component/hook-form/ck-editor");
  },
  { ssr: false }
);

const years = Array.from({ length: 100 }, (_, i) => {
  const item = {
    label: `${new Date().getFullYear() - i}`,
    value: new Date().getFullYear() - i,
  };
  return item;
});

export const ExperienceUserCv = ({
  experiences,
  mutate,
  onClose,
}: IInfomationExperienceProps) => {
  const schema = yup.object().shape({
    experiences: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          companyName: yup.string().required("Vui lòng nhập công ty"),
          position: yup.string().required("Vui lòng nhập chức vụ - vị trí"),
          fromMonth: yup.string().required("Vui lòng chọn tháng bắt đầu"),
          fromYear: yup.string().required("Vui lòng chọn năm bắt đầu"),
          isEnd: yup.boolean(),
          toMonth: yup.string().when("isEnd", ([isEnd], schema) => {
            return isEnd === false
              ? schema.required("Vui lòng chọn tháng kết thúc")
              : schema;
          }),
          toYear: yup.string().when("isEnd", ([isEnd], schema) => {
            return isEnd === false
              ? schema.required("Vui lòng chọn năm kết thúc")
              : schema;
          }),
          introduction: yup.string(),
          // files: yup
          //   .mixed<FileList>()
          //   .test("fileType", "Chỉ upload file JPEG,JPG,PNG,PDF ", (value) => {
          //     if (value && value.length > 0) {
          //       const allowedFormats = [
          //         "image/jpeg",
          //         "image/jpg",
          //         "image/png",
          //         "application/pdf",
          //       ];
          //       return Array.from(value).every((file: File) =>
          //         allowedFormats.includes(file.type)
          //       );
          //     }
          //     return true;
          //   })
          //   .test("fileSize", "Chỉ được upload tối đa 5MB/File", (value) => {
          //     const maxSize = 5 * 1024 * 1024; // 5MB
          //     if (value && value.length > 0) {
          //       return Array.from(value).every(
          //         (file: File) => file.size <= maxSize
          //       );
          //     }
          //     return true;
          //   }),
        })
      )
      .min(1, "Phải có ít nhất 1 kinh nghiệm làm việc")
      .required("Vui lòng chọn kinh nghiệm làm việc"),
  });

  const { setLoading } = useLoading();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInfomationExperience>({
    resolver: yupResolver(schema),
    defaultValues: {
      experiences:
        experiences && experiences.length > 0
          ? experiences
          : [
              {
                id: -1,
                companyName: "",
                position: "",
                fromMonth: "",
                fromYear: "",
                toMonth: "",
                toYear: "",
                isEnd: false,
                introduction: "",
              },
            ],
    },
  });

  const onSubmit: SubmitHandler<IInfomationExperience> = async (data) => {
    setLoading(true);
    try {
      // const listFiles = data.experiences.map((item) => {
      //   return item.files;
      // });
      // const linkUploads = await Promise.all(
      //   listFiles.map(async (item: FileList | undefined, index) => {
      //     const link = await getFileUpload(item, experiences[index]?.linkFile);
      //     return link;
      //   })
      // );

      const dataUpload = data.experiences.map((item, index) => {
        const dataTemp: any = { ...item };
        // dataTemp.linkFile = linkUploads[index];
        return dataTemp;
      });
      const res = await axiosInstance.post(
        ADD_OR_UPDATE_EXPERIENCE,
        dataUpload
      );
      toast.success("Cập nhật thông tin học vấn thành công");
      if (mutate) {
        mutate();
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật kinh nghiệm thất bại");
    } finally {
      setLoading(false);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  return (
    <div>
      <div className="border-t">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="mt-4 p-4 pt-6 border rounded-lg relative"
            >
              <button
                className="absolute right-2 top-2"
                onClick={() => {
                  remove(index);
                }}
              >
                <TrashIcon className="w-5 text-default" />
              </button>
              <div className="">
                <div className="font-medium">
                  Công ty <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<BuildingOfficeIcon className="w-4" />}
                    name={`experiences.${index}.companyName`}
                    placeholder="Công ty"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Chức vụ - vị trí <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`experiences.${index}.position`}
                    placeholder="Chức vụ - vị trí"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Thời gian <span className="text-[#dc2f2f]">*</span>
                </div>
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <div>Bắt đầu</div>
                    <div className="mt-[14px] flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`experiences.${index}.fromMonth`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`experiences.${index}.fromYear`}
                          options={years}
                          placeholder="Chọn năm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex space-x-5">
                      <div>Kết thúc</div>
                      <div>
                        <TmCheckbox
                          control={control}
                          name={`experiences.${index}.isEnd`}
                          label="Còn làm"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`experiences.${index}.toMonth`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          name={`experiences.${index}.toYear`}
                          control={control}
                          options={years}
                          placeholder="Chọn năm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Mô tả chi tiết</div>
                <div>
                  <CustomCKEditor
                    control={control}
                    name={`experiences.${index}.introduction`}
                  />
                </div>
              </div>
              {/* <div>
                <CustomUploadMulti
                  name={`experiences.${index}.files`}
                  acceptFile=".jpeg, .jpg, .png"
                  title="Tải tệp hoặc File từ máy tính"
                  control={control}
                  link={experiences[index] && experiences[index].linkFile}
                />
              </div> */}
            </div>
          ))}
          {errors && errors.experiences && (
            <p className="text-red-500">{errors.experiences.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                id: -1,
                companyName: "",
                position: "",
                fromMonth: "",
                fromYear: "",
                toMonth: "",
                toYear: "",
                isEnd: false,
                introduction: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm kinh nghiệm
          </button>

          <div className="flex justify-center mt-4">
            <button
              className="px-3 py-1 bg-[#F37A20] text-white rounded-lg"
              type="submit"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
