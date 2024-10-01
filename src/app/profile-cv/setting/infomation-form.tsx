import { useLoading } from "@/app/context/loading";
import {
  IInfoamtionFormUserCv,
  IInfomationUserCv,
} from "@/interface/interface";
import TmInput from "@/component/hook-form/input";
import TmRadio from "@/component/hook-form/radio";
import { SAVE_USER_CV } from "@/utils/api-url";
import axiosInstance from "@/utils/axios";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import TmSelect from "@/component/hook-form/select";
import { Rank } from "@/module/helper/master-data";
const CustomCKEditor = dynamic(
  () => {
    return import("../../../component/hook-form/ck-editor");
  },
  { ssr: false }
);

const gender = [
  {
    label: "Nam",
    value: 0,
  },
  {
    label: "Nữ",
    value: 1,
  },
];

export const InfomationUserCv = ({
  user,
  mutate,
  onClose,
}: IInfoamtionFormUserCv) => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập họ và tên"),
    position: yup.string().required("Vui lòng nhập vị trí"),
    level: yup.string().required("Vui lòng nhập cấp bậc"),
    addressInfo: yup.string().required("Vui lòng nhập Địa chỉ"),
    gender: yup
      .number()
      .required("Vui lòng chọn giới tính")
      .min(0, "Vui lòng chọn giới tính"),
    email: yup
      .string()
      .email("Sai định dạng email")
      .required("Vui lòng nhập email"),
    phoneNumber: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự"),
    introduction: yup.string(),
  });

  const { ranks } = Rank();

  const { setLoading } = useLoading();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IInfomationUserCv>({
    resolver: yupResolver(schema),
    defaultValues: user
      ? user
      : {
          fullName: "",
          position: "",
          level: "",
          gender: 0,
          email: "",
          phoneNumber: "",
          introduction: "",
          addressInfo: "",
        },
  });

  console.log(errors);

  const onSubmit: SubmitHandler<IInfomationUserCv> = async (data) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(SAVE_USER_CV, data);
      toast.success("Cập nhật thông tin thành công");
      mutate();
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Cập nhật thông tin thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="border-t">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <div className="font-medium">
              Họ và tên <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="fullName"
                placeholder="Họ và tên"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Vị trí <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput control={control} name="position" placeholder="Vị trí" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Cấp bậc <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmSelect
                control={control}
                name="level"
                placeholder="Cấp bậc"
                options={ranks}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Giới tính <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmRadio
                name="gender"
                control={control}
                options={gender}
                classNameCustom="flex space-x-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Địa chỉ hiện tại <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="addressInfo"
                placeholder="Địa chỉ"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Mail liên hệ <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Số điện thoại <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="phoneNumber"
                placeholder="Số điện thoại"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">Giới thiệu bản thân</div>
            <div>
              <CustomCKEditor control={control} name="introduction" />
            </div>
          </div>
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
