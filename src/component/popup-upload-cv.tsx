import { ILoadCv, IPopupUploadCv } from "@/interface/interface";
import Modal from "./modal";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomUploadSingle from "./hook-form/upload-single-file";
import { useLoading } from "@/app/context/loading";
import axiosInstance, { axiosInstanceImg } from "@/utils/axios";
import { ADD_CV, UPLOAD_IMG } from "@/utils/api-url";
import { toast } from "react-toastify";

export const PopupUploadCv = ({
  isOpenModal,
  onClose,
  mutate,
}: IPopupUploadCv) => {
  const { setLoading } = useLoading();
  const schema = yup.object().shape({
    file: yup
      .mixed<File>()
      .required("Vui lòng chọn cv")
      .test("fileSize", "Kích thước tối đa là 5MB", (value) => {
        return value && value.size <= 5 * 1024 * 1024;
      }),
  });

  const { control, handleSubmit } = useForm<ILoadCv>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ILoadCv> = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstanceImg.post(UPLOAD_IMG, {
        file: data.file,
      });
      const dataApply = {
        linkFile: response.data.fullLink,
        typeData: 2,
        templateID: 0,
      };

      await axiosInstance.post(ADD_CV, dataApply);
      toast.success("Thêm mới CV thành công");
      mutate();
    } catch (error) {
      toast.error("Thêm mới CV thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal onClose={onClose} isOpen={isOpenModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomUploadSingle
          control={control}
          name="file"
          acceptFile=".docx,.pdf"
        />
        <div className="flex justify-center mt-4">
          <button
            className="px-3 py-1 bg-[#F37A20] text-base text-white rounded-lg"
            type="submit"
          >
            Thêm CV
          </button>
        </div>
      </form>
    </Modal>
  );
};
