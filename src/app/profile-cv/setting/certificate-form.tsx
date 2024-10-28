import { useLoading } from "@/app/context/loading";
import {
  ICertificateCv,
  IInfomationCertificateProps,
} from "@/interface/interface";
import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import TmTextArea from "@/component/hook-form/textarea";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import { ADD_OR_UPDATE_CERTIFY } from "@/utils/api-url";
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

export const CertificateInfomationCv = ({
  certificates,
  mutate,
  onClose,
}: IInfomationCertificateProps) => {
  const schema = yup.object().shape({
    certificates: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          fullName: yup.string().required("Vui lòng nhập tên chứng chỉ"),
          companyName: yup.string().required("Vui lòng nhập tổ chức"),
          monthGet: yup.string().required("Vui lòng chọn tháng bắt đầu"),
          yearGet: yup.string().required("Vui lòng chọn năm bắt đầu"),
          isExpired: yup.boolean(),
          monthExpired: yup
            .string()
            .when("isExpired", ([isExpired], schema) => {
              console.log(isExpired);
              return isExpired === false
                ? schema.required("Vui lòng chọn tháng kết thúc")
                : schema;
            }),
          yearExpired: yup.string().when("isExpired", ([isExpired], schema) => {
            return isExpired === false
              ? schema.required("Vui lòng chọn năm kết thúc")
              : schema;
          }),
          introduction: yup.string(),
          files: yup
            .mixed<FileList>()
            .test("fileType", "Chỉ upload file JPEG,JPG,PNG,PDF ", (value) => {
              if (value && value.length > 0) {
                const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
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
          // .test("required", "Vui lòng chọn file", (value) => {
          //   return value && value.length > 0;
          // }),
        })
      )
      .min(1, "Phải có ít nhất 1 kinh nghiệm làm việc")
      .required("Vui lòng chọn kinh nghiệm làm việc"),
  });

  const { setLoading } = useLoading();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICertificateCv>({
    resolver: yupResolver(schema),
    defaultValues: {
      certificates:
        certificates?.length > 0
          ? certificates
          : [
              {
                id: -1,
                fullName: "",
                companyName: "",
                monthGet: "",
                yearGet: "",
                monthExpired: "",
                yearExpired: "",
                isExpired: false,
                introduction: "",
              },
            ],
    },
  });

  const onSubmit: SubmitHandler<ICertificateCv> = async (data) => {
    setLoading(true);
    try {
      const listFiles = data.certificates.map((item) => {
        return item.files;
      });
      const linkUploads = await Promise.all(
        listFiles.map(async (item: FileList | undefined, index) => {
          const link = await getFileUpload(item, certificates[index]?.linkFile);
          return link;
        })
      );

      const dataUpload = data.certificates.map((item, index) => {
        const dataTemp: any = { ...item };
        if (linkUploads[index] && linkUploads[index]?.length > 0) {
          dataTemp.linkFile = linkUploads[index];
        }
        return dataTemp;
      });

      const res = await axiosInstance.post(ADD_OR_UPDATE_CERTIFY, dataUpload);
      toast.success("Cập nhật thông tin thành công");
      if (mutate) {
        mutate();
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thông tin thất bại");
    } finally {
      setLoading(false);
    }
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
                    name={`certificates.${index}.fullName`}
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
                    name={`certificates.${index}.companyName`}
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
                    <div>Thời gian đào tạo</div>
                    <div className="mt-[14px] flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`certificates.${index}.monthGet`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`certificates.${index}.yearGet`}
                          options={years}
                          placeholder="Chọn năm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex space-x-5">
                      <div>Hết hạn</div>
                      <div>
                        <TmCheckbox
                          control={control}
                          name={`certificates.${index}.isExpired`}
                          label="Còn học"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`certificates.${index}.monthExpired`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          name={`certificates.${index}.yearExpired`}
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
                    name={`certificates.${index}.introduction`}
                  />
                </div>
              </div>
              <div>
                <CustomUploadMulti
                  title="Tải tệp hoặc File từ máy tính"
                  control={control}
                  name={`certificates.${index}.files`}
                  link={certificates[index] && certificates[index].linkFile}
                  acceptFile=".jpeg, .jpg, .png"
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
                id: -1,
                fullName: "",
                companyName: "",
                monthGet: "",
                yearGet: "",
                monthExpired: "",
                yearExpired: "",
                isExpired: false,
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
