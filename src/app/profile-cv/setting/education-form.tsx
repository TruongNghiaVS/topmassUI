import { useLoading } from "@/app/context/loading";
import {
  IInfoEducationProps,
  IInfomationSchoolCv,
} from "@/interface/interface";
import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import { ADD_OR_UPDATE_EDUCATION } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { getFileUpload } from "@/utils/business/upload-mutiple-file";
import {
  AcademicCapIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { EducationLevel } from "@/module/helper/master-data";
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

export const EducationUserCv = ({
  educations,
  mutate,
  onClose,
}: IInfoEducationProps) => {
  const schema = yup.object().shape({
    educations: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          schoolName: yup.string().required("Vui lòng nhập trường học"),
          major: yup.string().required("Vui lòng nhập chuyên ngành"),
          position: yup.string().required("Vui lòng nhập hệ đào tạo"),
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
          rank: yup.string().when("isEnd", ([isEnd], schema) => {
            return isEnd === false
              ? schema.required("Vui lòng chọn xếp loại")
              : schema;
          }),
          introduction: yup.string(),
          files: yup
            .mixed<FileList>()
            .test("fileType", "Chỉ upload file JPEG,JPG,PNG,PDF ", (value) => {
              if (value && value.length > 0) {
                const allowedFormats = [
                  "image/jpeg",
                  "image/jpg",
                  "image/png",
                  "application/pdf",
                ];
                return Array.from(value).every((file: File) =>
                  allowedFormats.includes(file.type)
                );
              }
              return true;
            })
            .test("fileSize", "Chỉ được upload tối đa 5MB/File", (value) => {
              const maxSize = 5 * 1024 * 1024; // 5MB
              if (value && value.length > 0) {
                return Array.from(value).every(
                  (file: File) => file.size <= maxSize
                );
              }
              return true;
            }),
        })
      )
      .min(1, "Phải có ít nhất 1 trường học")
      .required("Vui lòng chọn trường học"),
  });

  const { educationLevels } = EducationLevel();

  const { setLoading } = useLoading();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IInfomationSchoolCv>({
    resolver: yupResolver(schema),
    defaultValues: {
      educations:
        educations?.length > 0
          ? educations
          : [
              {
                id: -1,
                schoolName: "",
                major: "",
                position: "",
                fromMonth: "",
                fromYear: "",
                toMonth: "",
                toYear: "",
                isEnd: false,
                rank: "",
                introduction: "",
              },
            ],
    },
  });

  const onSubmit: SubmitHandler<IInfomationSchoolCv> = async (data) => {
    setLoading(true);
    try {
      const listFiles = data.educations.map((item) => {
        return item.files;
      });
      const linkUploads = await Promise.all(
        listFiles.map(async (item: FileList | undefined, index) => {
          const link = await getFileUpload(item, educations[index]?.linkFile);
          return link;
        })
      );

      const dataUpload = data.educations.map((item, index) => {
        const dataTemp: any = { ...item };
        if (linkUploads[index] && linkUploads[index]?.length > 0) {
          dataTemp.linkFile = linkUploads[index];
        }
        return dataTemp;
      });

      const res = await axiosInstance.post(ADD_OR_UPDATE_EDUCATION, dataUpload);
      toast.success("Cập nhật thông tin học vấn thành công");
      if (mutate) {
        mutate();
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thông tin học vấn thất bại");
    } finally {
      setLoading(false);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educations",
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
                  Trường học <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<AcademicCapIcon className="w-4" />}
                    name={`educations.${index}.schoolName`}
                    placeholder="Trường học"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Chuyên ngành <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`educations.${index}.major`}
                    placeholder="Chuyên ngành"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Trình độ <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmSelect
                    control={control}
                    name={`educations.${index}.position`}
                    placeholder="Trình độ"
                    options={educationLevels}
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
                          name={`educations.${index}.fromMonth`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`educations.${index}.fromYear`}
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
                          name={`educations.${index}.isEnd`}
                          label="Còn học"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`educations.${index}.toMonth`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          name={`educations.${index}.toYear`}
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
                <div className="font-medium">
                  Xếp loại (Nếu còn học thì bỏ qua trường này){" "}
                  <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    placeholder="Xếp loại"
                    name={`educations.${index}.rank`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Giới thiệu bản thân</div>
                <div>
                  <CustomCKEditor
                    control={control}
                    name={`educations.${index}.introduction`}
                  />
                </div>
              </div>
              <div>
                <CustomUploadMulti
                  name={`educations.${index}.files`}
                  title="Tải tệp hoặc File từ máy tính"
                  control={control}
                  acceptFile=".jpeg, .jpg, .png"
                  link={educations[index] && educations[index].linkFile}
                />
              </div>
            </div>
          ))}
          {errors && errors.educations && (
            <p className="text-red-500">{errors.educations.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                id: -1,
                schoolName: "",
                major: "",
                position: "",
                fromMonth: "",
                fromYear: "",
                toMonth: "",
                toYear: "",
                isEnd: false,
                rank: "",
                introduction: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm học vấn
          </button>

          <div className="flex justify-center mt-4">
            <button
              className="px-3 py-2 text-base bg-[#F37A20] text-white rounded-lg"
              type="submit"
            >
              {educations.length > 0 ? "Cập nhật" : "Thêm mới"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
