import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmRadio from "@/component/hook-form/radio";
import TmSelect from "@/component/hook-form/select";
import TmTextArea from "@/component/hook-form/textarea";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import { BeakerIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

interface IPrizeCv {
  prizes: {
    prize_name: string;
    organization: string;
    month: string;
    year: string;
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

export const PrizeInfomationCv = () => {
  const schema = yup.object().shape({
    prizes: yup
      .array()
      .of(
        yup.object().shape({
          prize_name: yup.string().required("Vui lòng nhập tên giải thưởng"),
          organization: yup.string().required("Vui lòng nhập tổ chức"),
          month: yup.string().required("Vui lòng chọn tháng bắt đầu"),
          year: yup.string().required("Vui lòng chọn năm bắt đầu"),
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
      .min(1, "Phải có ít nhất 1 giải thưởng")
      .required("Vui lòng chọn giải thưởng"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      prizes: [
        {
          prize_name: "",
          organization: "",
          month: "",
          year: "",
          description: "",
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<IPrizeCv> = (data: any) => {
    console.log(data);
    toast.success("Update thông tin thành công");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "prizes",
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
                    name={`prizes.${index}.prize_name`}
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
                    name={`prizes.${index}.organization`}
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
                        name={`prizes.${index}.month`}
                        options={months}
                        placeholder="Chọn tháng"
                      />
                    </div>
                    <div className="flex-1">
                      <TmSelect
                        control={control}
                        name={`prizes.${index}.year`}
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
                  <TmTextArea
                    control={control}
                    name={`prizes.${index}.description`}
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
          {errors && errors.prizes && (
            <p className="text-red-500">{errors.prizes.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                prize_name: "",
                organization: "",
                month: "",
                year: "",
                description: "",
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
