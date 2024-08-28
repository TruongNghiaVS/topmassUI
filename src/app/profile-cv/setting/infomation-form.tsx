import TmInput from "@/component/hook-form/input";
import TmRadio from "@/component/hook-form/radio";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
const CustomCKEditor = dynamic(
  () => {
    return import("../../../component/hook-form/ck-editor");
  },
  { ssr: false }
);

interface InfomationUserCv {
  username: string;
  work_location: string;
  position: string;
  gender: string;
  address: string;
  email: string;
  phone_number: string;
  description?: string;
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

export const InfomationUserCv = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Vui lòng nhập họ và tên"),
    work_location: yup.string().required("Vui lòng nhập vị trí"),
    position: yup.string().required("Vui lòng nhập chức vụ"),
    gender: yup.string().required("Vui lòng chọn giới tính"),
    address: yup.string().required("Vui lòng nhập địa chỉ hiện tại"),
    email: yup
      .string()
      .email("Sai định dạng email")
      .required("Vui lòng nhập email"),
    phone_number: yup
      .string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự"),
    description: yup.string(),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      work_location: "",
      position: "",
      gender: "",
      address: "",
      email: "",
      phone_number: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<InfomationUserCv> = (data: any) => {
    console.log(data);
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
                name="username"
                placeholder="Họ và tên"
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
                name="work_location"
                placeholder="Vị trí"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Chức vụ <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="position"
                placeholder="Chức vụ"
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
              Mail liên hệ <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput control={control} name="email" placeholder="Email" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">
              Số điện thoại <span className="text-[#dc2f2f]">*</span>
            </div>
            <div>
              <TmInput
                control={control}
                name="phone_number"
                placeholder="Số điện thoại"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-medium">Giới thiệu bản thân</div>
            <div>
              <CustomCKEditor control={control} name="description" />
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
