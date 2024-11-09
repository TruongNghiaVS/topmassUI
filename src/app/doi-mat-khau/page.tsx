"use client";

import TmInput from "@/component/hook-form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { IChangePassword } from "../../interface/interface";
import { InfomationUser } from "@/component/infomation-user-right";
import axiosInstance from "@/utils/axios";
import { FORGOT_CHANGE_PASSWORD } from "@/utils/api-url";
import { useLoading } from "../context/loading";

export default function ChangePassword() {
  const { setLoading } = useLoading();
  const schema = yup.object().shape({
    old_password: yup
      .string()
      .required("Bắt buộc nhập password")
      .min(6, "Tối thiểu 6 ký tự")
      .max(50, "Tối đa 50 ký tự")
      .matches(/^(?=.*[A-Z])(?=.*\d)/, "Phải có 1 ký tự in hoa và 1 chữ số"),
    password: yup
      .string()
      .required("Bắt buộc nhập password")
      .min(6, "Tối thiểu 6 ký tự")
      .max(50, "Tối đa 50 ký tự")
      .matches(/^(?=.*[A-Z])(?=.*\d)/, "Phải có 1 ký tự in hoa và 1 chữ số"),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password"), undefined],
        "Nhập lại mật khẩu không chính xác"
      )
      .required("Vui lòng nhập xác nhận mật khẩu"),
  });

  const { handleSubmit, control, reset } = useForm<IChangePassword>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(FORGOT_CHANGE_PASSWORD, data);
      if (response) {
        toast.success("Đổi mật khẩu thành công!");
        reset({
          password: "",
        });
      }
    } catch (error) {
      toast.error("Đổi mật khẩu không thành công");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-1280:px-2">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-6 py-8 ">
          <div className="xl:col-span-8 md:col-span-7 sm:row-auto row-start-2 row-end-2">
            <div className="p-4 bg-white rounded-lg">
              <div className="text-base font-bold text-default my-3">
                Thay đổi mật khẩu
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <div>
                    Mật khẩu cũ<span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    control={control}
                    name="old_password"
                    placeholder="Mật khẩu cũ"
                    type="password"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Mật khẩu <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    control={control}
                    name="password"
                    placeholder="Mật khẩu"
                    type="password"
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Nhập lại mật khẩu <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    control={control}
                    name="confirm_password"
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-[#FF7D55] rounded-lg text-base font-bold"
                >
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5 sm:row-auto row-start-1 row-end-1">
            <InfomationUser />
          </div>
        </div>
      </div>
    </div>
  );
}
