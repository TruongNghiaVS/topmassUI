import { useLoading } from "@/app/context/loading";
import { IInfomationRewardProps, IReWardCv } from "@/interface/interface";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import { ADD_OR_UPDATE_REWARD } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { getFileUpload } from "@/utils/business/upload-mutiple-file";
import { BeakerIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
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

export const PrizeInfomationCv = ({
  rewards,
  mutate,
  onClose,
}: IInfomationRewardProps) => {
  const schema = yup.object().shape({
    rewards: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          fullName: yup.string().required("Vui lòng nhập tên giải thưởng"),
          companyName: yup.string().required("Vui lòng nhập tổ chức"),
          monthGet: yup.string().required("Vui lòng chọn tháng bắt đầu"),
          yearGet: yup.string().required("Vui lòng chọn năm bắt đầu"),
          introduction: yup.string(),
          files: yup
            .mixed<FileList>()
            .test("fileType", "Chỉ upload file JPEG,JPG,PNG ", (value) => {
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
        })
      )
      .min(1, "Phải có ít nhất 1 giải thưởng")
      .required("Vui lòng chọn giải thưởng"),
  });

  const { setLoading } = useLoading();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReWardCv>({
    resolver: yupResolver(schema),
    defaultValues: {
      rewards:
        rewards?.length > 0
          ? rewards
          : [
              {
                id: -1,
                fullName: "",
                companyName: "",
                monthGet: "",
                yearGet: "",
                introduction: "",
              },
            ],
    },
  });

  const onSubmit: SubmitHandler<IReWardCv> = async (data) => {
    setLoading(true);
    try {
      const listFiles = data.rewards.map((item) => {
        return item.files;
      });
      const linkUploads = await Promise.all(
        listFiles.map(async (item: FileList | undefined, index) => {
          const link = await getFileUpload(item, rewards[index]?.linkFile);
          return link;
        })
      );

      const dataUpload = data.rewards.map((item, index) => {
        const dataTemp: any = { ...item };
        dataTemp.monthExpired = new Date();
        dataTemp.yearExpired = new Date();
        if (linkUploads[index] && linkUploads[index]?.length > 0) {
          dataTemp.linkFile = linkUploads[index];
        } else {
          dataTemp.linkFile = "";
        }
        return dataTemp;
      });

      const res = await axiosInstance.post(ADD_OR_UPDATE_REWARD, dataUpload);
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
    name: "rewards",
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
                  Giải thưởng <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<BeakerIcon className="w-4" />}
                    name={`rewards.${index}.fullName`}
                    placeholder="Giải thưởng"
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
                    name={`rewards.${index}.companyName`}
                    placeholder="Tổ chức"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Thời gian <span className="text-[#dc2f2f]">*</span>
                </div>
                <div className="flex-1">
                  <div>Ngày nhận</div>
                  <div className="mt-[14px] flex space-x-2">
                    <div className="flex-1">
                      <TmSelect
                        control={control}
                        name={`rewards.${index}.monthGet`}
                        options={months}
                        placeholder="Chọn tháng"
                      />
                    </div>
                    <div className="flex-1">
                      <TmSelect
                        control={control}
                        name={`rewards.${index}.yearGet`}
                        options={years}
                        placeholder="Chọn năm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Mô tả chi tiết</div>
                <div>
                  <CustomCKEditor
                    control={control}
                    name={`rewards.${index}.introduction`}
                  />
                </div>
              </div>
              <div>
                <CustomUploadMulti
                  name={`rewards.${index}.files`}
                  title="Tải tệp hoặc File từ máy tính"
                  control={control}
                  link={rewards[index] && rewards[index].linkFile}
                  acceptFile=".jpeg, .jpg, .png"
                />
              </div>
            </div>
          ))}
          {errors && errors.rewards && (
            <p className="text-red-500">{errors.rewards.root?.message}</p>
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
                introduction: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm giải thưởng
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
