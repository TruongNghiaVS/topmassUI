"use client";

import { AuthorizeLayout } from "@/component/authorize";
import TmInput from "@/component/hook-form/input";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { IChangePassword, ILogin } from "../interface/interface";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const schema = yup.object().shape({
    old_password: yup.string().required("Vui lòng nhập mật khẩu củ"),
    password: yup.string().required("Vui lòng nhập mật khẩu củ"),
  });

  const { handleSubmit, control } = useForm<IChangePassword>({
    resolver: yupResolver(schema),
    defaultValues: {
      old_password: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IChangePassword> = (data) => {
    toast.success("Đổi mật khẩu thành công!");

    console.log(data);
  };

  return (
    <div>
      <AuthorizeLayout>
        <div>
          <div className="text-2xl font-normal mb-4 text-[#F37A20]">
            Chào mừng bạn đến với Topmass
          </div>
          <div className="mb-4 font-normal">
            Cùng xây dựng một hệ sinh thái tuyển dụng nhân sự cùng với nguồn ứng
            viên khổng lồ từ Topmass
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div>
                Mật khẩu mới <span className="text-[#dc2f2f]">*</span>
              </div>
              <TmInput
                control={control}
                placeholder="Mật khẩu"
                name="old_password"
                type="password"
              />
            </div>
            <div className="mb-4">
              <div>
                Nhập lại mật khẩu <span className="text-[#dc2f2f]">*</span>
              </div>
              <TmInput
                control={control}
                name="password"
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
          <div className="text-[#8E8D8D] font-normal text-base mt-8 text-center pb-4 ">
            Bạn chưa có tài khoản?{" "}
            <Link href="/dang-ky" className="text-[#F37A20]">
              Đăng ký
            </Link>{" "}
            ngay
          </div>
        </div>
      </AuthorizeLayout>
    </div>
  );
}
