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
import { Provinces, Rank } from "@/modules/helper/master-data";
import CustomSelectSearchForm from "@/component/hook-form/customSelectSearchForm";
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
  const { provinces } = Provinces();

  const schema = yup.object().shape({
    fullName: yup.string().required("Vui lòng nhập họ và tên"),
    position: yup.string().required("Vui lòng nhập vị trí"),
    level: yup.string().required("Vui lòng nhập cấp bậc"),
    addressInfo: yup.string().required("Vui lòng nhập địa chỉ chi tiết"),
    dateOfBirth: yup.string().required("Vui lòng nhập ngày sinh"),
    provinceCode: yup.string().required("Vui lòng chọn tỉnh thành phố"),
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
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự")
      .matches(/^0\d*$/, "Số điện thoại phải bắt đầu bằng số 0"),
    introduction: yup.string(),
  });

  const { ranks } = Rank();
  const { setLoading } = useLoading();
  const { control, handleSubmit } = useForm<IInfomationUserCv>({
    resolver: yupResolver(schema),
    defaultValues: user
      ? {
          ...user,
          dateOfBirth:
            user.dateOfBirth !== null ? user.dateOfBirth.split("T")[0] : "",
          provinceCode: user.provinceCode !== null ? user.provinceCode : "",
          addressInfo: user?.addressInfo !== null ? user.addressInfo : "",
        }
      : {
          fullName: "",
          position: "",
          level: "",
          gender: 0,
          dateOfBirth: new Date().toISOString().split("T")[0],
          email: "",
          phoneNumber: "",
          introduction: "",
          addressInfo: "",
          provinceCode: "",
        },
  });

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

  const date = new Date(1900, 1, 1).toISOString().split("T")[0];
  const toDate = new Date().toISOString().split("T")[0];

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
              Ngày sinh <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                name="dateOfBirth"
                control={control}
                type="date"
                min={date}
                max={toDate}
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
              Tỉnh/TP <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <CustomSelectSearchForm
                control={control}
                name="provinceCode"
                placeholder="Tìm kiếm"
                options={provinces}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Địa chỉ chi tiết <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="addressInfo"
                placeholder="Nhập số nhà, tên đường, Phường/Xã, Quận/Huyện"
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
            <div className="font-medium">Mục tiêu nghề nghiệp</div>
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
