import { useLoading } from "@/app/context/loading";
import { IInfomationSkillViewProps, ISkillCv } from "@/interface/interface";
import TmInput from "@/component/hook-form/input";
import TmInputProgress from "@/component/hook-form/input-progress";
import { ADD_OR_UPDATE_SOFT_SKILL } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
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

export const SoftSkillInfomationCv = ({
  skills,
  mutate,
  onClose,
}: IInfomationSkillViewProps) => {
  const schema = yup.object().shape({
    skills: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          fullName: yup.string().required("Vui lòng nhập tên kỹ năng"),
          level: yup
            .number()
            .required("Vui lòng chọn độ thông thạo")
            .min(1, "Vui lòng nhập độ thông thạo"),
          description: yup.string(),
        })
      )
      .min(1, "Phải có ít nhất 1 kỹ năng")
      .required("Vui lòng chọn kỹ năng"),
  });

  const { setLoading } = useLoading();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISkillCv>({
    resolver: yupResolver(schema),
    defaultValues: {
      skills:
        skills?.length > 0
          ? skills
          : [
              {
                id: -1,
                fullName: "",
                level: 0,
                description: "",
              },
            ],
    },
  });

  const onSubmit: SubmitHandler<ISkillCv> = async (data) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        ADD_OR_UPDATE_SOFT_SKILL,
        data.skills
      );
      toast.success("Cập nhật thông tin thành công");
      if (mutate) {
        mutate();
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      toast.error("Cập nhật thông tin thất bại");
    } finally {
      setLoading(false);
    }
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
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
                    name={`skills.${index}.fullName`}
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
                    name={`skills.${index}.level`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">Mô tả chi tiết</div>
                <div>
                  <CustomCKEditor
                    control={control}
                    name={`skills.${index}.description`}
                  />
                </div>
              </div>
            </div>
          ))}
          {errors && errors.skills && (
            <p className="text-red-500">{errors.skills.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                id: -1,
                fullName: "",
                level: 0,
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
