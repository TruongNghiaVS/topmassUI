import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmRadio from "@/component/hook-form/radio";
import TmSelect from "@/component/hook-form/select";
import TmTextArea from "@/component/hook-form/textarea";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import {
  AcademicCapIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

interface InfomationUserCv {
  educations: {
    school: string;
    specialized: string;
    rank: string;
    month_from: string;
    year_from: string;
    month_to?: string;
    year_to?: string;
    isStudied?: boolean;
    rating: string;
    description?: string;
    files?: FileList;
  }[];
}

const gender = [
  {
    label: "Nam",
    value: "0",
  },
  {
    label: "Nữ",
    value: "1",
  },
];

const years = Array.from({ length: 100 }, (_, i) => {
  const item = {
    label: `${new Date().getFullYear() - i}`,
    value: new Date().getFullYear() - i,
  };
  return item;
});

export const EducationUserCv = () => {
  const schema = yup.object().shape({
    educations: yup
      .array()
      .of(
        yup.object().shape({
          school: yup.string().required("Vui lòng nhập trường học"),
          specialized: yup.string().required("Vui lòng nhập chuyên ngành"),
          rank: yup.string().required("Vui lòng nhập cấp bậc"),
          month_from: yup.string().required("Vui lòng chọn tháng bắt đầu"),
          year_from: yup.string().required("Vui lòng chọn năm bắt đầu"),
          isStudied: yup.boolean(),
          month_to: yup.string().when("isStudied", ([isStudied], schema) => {
            console.log(isStudied);
            return isStudied === false
              ? schema.required("Vui lòng chọn tháng kết thúc")
              : schema;
          }),
          year_to: yup.string().when("isStudied", ([isStudied], schema) => {
            return isStudied === false
              ? schema.required("Vui lòng chọn năm kết thúc")
              : schema;
          }),
          rating: yup.string().required("Vui lòng chọn xếp loại"),
          description: yup.string(),
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      educations: [
        {
          school: "",
          specialized: "",
          rank: "",
          month_from: "",
          year_from: "",
          month_to: "",
          year_to: "",
          isStudied: false,
          rating: "",
          description: "",
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<InfomationUserCv> = (data: any) => {
    console.log(data);
    toast.success("Update thông tin thành công");
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
                    name={`educations.${index}.school`}
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
                    name={`educations.${index}.specialized`}
                    placeholder="Chuyên ngành"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Cấp bậc <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`educations.${index}.rank`}
                    placeholder="Cấp bậc"
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
                          name={`educations.${index}.month_from`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`educations.${index}.year_from`}
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
                          name={`educations.${index}.isStudied`}
                          label="Còn học"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`educations.${index}.month_to`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          name={`educations.${index}.year_to`}
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
                    name={`educations.${index}.rating`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Giới thiệu bản thân</div>
                <div>
                  <TmTextArea
                    control={control}
                    name={`educations.${index}.description`}
                    rows={3}
                  />
                </div>
              </div>
              <div>
                <CustomUploadMulti
                  name="files"
                  title="Tải tệp hoặc File từ máy tính"
                  control={control}
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
                school: "",
                specialized: "",
                rank: "",
                month_from: "",
                year_from: "",
                month_to: "",
                year_to: "",
                isStudied: false,
                rating: "",
                description: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm học vấn
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
