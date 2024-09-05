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

interface ISkillCv {
  skill: {
    skill_name: string;
    proficiency: number;
    description?: string;
  }[];
}

export const SoftSkillInfomationCv = () => {
  const schema = yup.object().shape({
    skill: yup
      .array()
      .of(
        yup.object().shape({
          skill_name: yup.string().required("Vui lòng nhập tên kỹ năng"),
          proficiency: yup
            .number()
            .required("Vui lòng chọn độ thông thạo")
            .min(1, "Vui lòng nhập độ thông thạo"),
          description: yup.string(),
        })
      )
      .min(1, "Phải có ít nhất 1 kỹ năng")
      .required("Vui lòng chọn kỹ năng"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      skill: [
        {
          skill_name: "",
          proficiency: 0,
          description: "",
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<ISkillCv> = (data: any) => {
    console.log(data);
    toast.success("Update thông tin thành công");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skill",
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
                  Tên kỹ năng <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<CogIcon className="w-4" />}
                    name={`skill.${index}.skill_name`}
                    placeholder="Tên kỹ năng"
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
                    name={`skill.${index}.proficiency`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Mô tả chi tiết</div>
                <div>
                  <CustomCKEditor
                    control={control}
                    name={`skill.${index}.description`}
                  />
                </div>
              </div>
            </div>
          ))}
          {errors && errors.skill && (
            <p className="text-red-500">{errors.skill.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                skill_name: "",
                proficiency: 0,
                description: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm kỹ năng
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
