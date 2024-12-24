import { useLoading } from "@/app/context/loading";
import { IInfomationProjectProps, IProjectCv } from "@/interface/interface";
import TmCheckbox from "@/component/hook-form/checkbox";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import CustomUploadMulti from "@/component/hook-form/upload-multiple-file";
import { months } from "@/mockup-data/data";
import { ADD_OR_UPDATE_PROJECT } from "@/utils/api-url";
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

const years = Array.from({ length: 60 }, (_, i) => {
  const item = {
    label: `${new Date().getFullYear() - i}`,
    value: new Date().getFullYear() - i,
  };
  return item;
});

export const ProjectUserCv = ({
  projects,
  mutate,
  onClose,
}: IInfomationProjectProps) => {
  const schema = yup.object().shape({
    projects: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.number(),
          projectName: yup.string().required("Vui lòng nhập tên dự án"),
          customerName: yup.string().required("Vui lòng nhập khách hàng"),
          numOfMember: yup.number().required("Vui lòng nhập số thành viên"),
          position: yup.string().required("Vui lòng nhập vị trí"),
          technology: yup.string().required("Vui lòng nhập công nghệ sử dụng"),
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
          //       const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
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
      .min(1, "Phải có ít nhất 1 dự án")
      .required("Vui lòng chọn dự án"),
  });

  const { setLoading } = useLoading();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProjectCv>({
    resolver: yupResolver(schema),
    defaultValues: {
      projects:
        projects?.length > 0
          ? projects
          : [
              {
                id: -1,
                projectName: "",
                customerName: "",
                numOfMember: 0,
                position: "",
                technology: "",
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

  const onSubmit: SubmitHandler<IProjectCv> = async (data) => {
    setLoading(true);
    try {
      // const listFiles = data.projects.map((item) => {
      //   return item.files;
      // });
      // const linkUploads = await Promise.all(
      //   listFiles.map(async (item: FileList | undefined, index) => {
      //     const link = await getFileUpload(item, projects[index]?.linkFile);
      //     return link;
      //   })
      // );

      const dataUpload = data.projects.map((item, index) => {
        const dataTemp: any = { ...item };
        dataTemp.numOfMember = dataTemp.numOfMember.toString();
        // dataTemp.linkFile = linkUploads[index];
        return dataTemp;
      });
      const res = await axiosInstance.post(ADD_OR_UPDATE_PROJECT, dataUpload);
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
    name: "projects",
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
                  Dự án <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    icon={<BeakerIcon className="w-4" />}
                    name={`projects.${index}.projectName`}
                    placeholder="Dự án"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Khách hàng <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`projects.${index}.customerName`}
                    placeholder="Khách hàng"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Số thành viên <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    type="number"
                    name={`projects.${index}.numOfMember`}
                    placeholder="Số thành viên"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Vị trí <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`projects.${index}.position`}
                    placeholder="Vị trí"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="font-medium">
                  Công nghệ sử dụng <span className="text-[#dc2f2f]">*</span>
                </div>
                <div>
                  <TmInput
                    control={control}
                    name={`projects.${index}.technology`}
                    placeholder="Công nghệ sử dụng"
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
                          name={`projects.${index}.fromMonth`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`projects.${index}.fromYear`}
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
                          name={`projects.${index}.isEnd`}
                          label="Dự án vẫn đang hoàn thành"
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1">
                        <TmSelect
                          control={control}
                          name={`projects.${index}.toMonth`}
                          options={months}
                          placeholder="Chọn tháng"
                        />
                      </div>
                      <div className="flex-1">
                        <TmSelect
                          name={`projects.${index}.toYear`}
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
                    name={`projects.${index}.introduction`}
                  />
                </div>
              </div>
              {/* <div>
                <CustomUploadMulti
                  name={`projects.${index}.files`}
                  title="Tải tệp hoặc File từ máy tính"
                  control={control}
                  acceptFile=".jpeg, .jpg, .png"
                  link={projects[index] && projects[index].linkFile}
                />
              </div> */}
            </div>
          ))}
          {errors && errors.projects && (
            <p className="text-red-500">{errors.projects.root?.message}</p>
          )}
          <button
            type="button"
            className="mt-4 text-default flex space-x-1"
            onClick={() => {
              append({
                id: -1,
                projectName: "",
                customerName: "",
                position: "",
                numOfMember: 0,
                technology: "",
                fromMonth: "",
                fromYear: "",
                toMonth: "",
                toYear: "",
                isEnd: false,
                introduction: "",
              });
            }}
          >
            <PlusIcon className="w-4" /> Thêm dự án
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
