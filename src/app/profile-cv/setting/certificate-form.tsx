import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import TmTextArea from "@/component/hook-form/textarea";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
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

interface ICertificateCv {
  certificates: {
    certificate_name: string;
    organization: string;
    month_from: string;
    year_from: string;
    month_to?: string;
    year_to?: string;
    isStudied?: boolean;
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

export const CertificateInfomationCv = () => {
  const schema = yup.object().shape({
    certificates: yup
      .array()
      .of(
        yup.object().shape({
          certificate_name: yup
            .string()
            .required("Vui lòng nhập tên chứng chỉ"),
          organization: yup.string().required("Vui lòng nhập tổ chức"),
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
      .min(1, "Phải có ít nhất 1 kinh nghiệm làm việc")
      .required("Vui lòng chọn kinh nghiệm làm việc"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      certificates: [
        {
          certificate_name: "",
          organization: "",
          month_from: "",
          year_from: "",
          month_to: "",
          year_to: "",
          isStudied: false,
          description: "",
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<ICertificateCv> = (data: any) => {
    console.log(data);
    toast.success("Update thông tin thành công");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificates",
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
                  Tên chứng chỉ <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<BuildingOfficeIcon className="w-4" />}
                    name={`certificates.${index}.certificate_name`}
                    placeholder="Tên chứng chỉ"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Tổ chức <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`certificates.${index}.organization`}
                    placeholder="Tổ chức"
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
                          name={`certificates.${index}.month_from`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`certificates.${index}.year_from`}
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
                          name={`certificates.${index}.isStudied`}
                          label="Còn học"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`certificates.${index}.month_to`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          name={`certificates.${index}.year_to`}
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
                    name={`certificates.${index}.description`}
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
          {errors && errors.certificates && (
            <p className="text-red-500">{errors.certificates.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                certificate_name: "",
                organization: "",
                month_from: "",
                year_from: "",
                month_to: "",
                year_to: "",
                isStudied: false,
                description: "",
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
