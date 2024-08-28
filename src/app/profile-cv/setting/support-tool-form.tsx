import TmInput from "@/component/hook-form/input";
import TmInputProgress from "@/component/hook-form/input-progress";
import {
  BeakerIcon,
  CogIcon,
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

interface ISupportToolInfomationCv {
  support_tools: {
    tool_name: string;
    proficiency: number;
    description?: string;
  }[];
}

export const SupportToolInfomationCv = () => {
  const schema = yup.object().shape({
    support_tools: yup
      .array()
      .of(
        yup.object().shape({
          tool_name: yup.string().required("Vui lòng nhập tên công cụ"),
          proficiency: yup
            .number()
            .required("Vui lòng chọn độ thông thạo")
            .min(1, "Vui lòng nhập độ thông thạo"),
          description: yup.string(),
        })
      )
      .min(1, "Phải có ít nhất 1 công cụ")
      .required("Vui lòng chọn công cụ"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      support_tools: [
        {
          tool_name: "",
          proficiency: 0,
          description: "",
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<ISupportToolInfomationCv> = (data: any) => {
    console.log(data);
    toast.success("Update thông tin thành công");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "support_tools",
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
                  Tên công cụ <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<CogIcon className="w-4" />}
                    name={`support_tools.${index}.tool_name`}
                    placeholder="Tên công cụ"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Độ thành thạo <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInputProgress
                    control={control}
                    icon={<BeakerIcon className="w-4" />}
                    name={`support_tools.${index}.proficiency`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Mô tả chi tiết</div>
                <div>
                  <CustomCKEditor
                    control={control}
                    name={`support_tools.${index}.description`}
                  />
                </div>
              </div>
            </div>
          ))}
          {errors && errors.support_tools && (
            <p className="text-red-500">{errors.support_tools.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                tool_name: "",
                proficiency: 0,
                description: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm công cụ
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
