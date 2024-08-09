"use client";

import TmInput from "@/component/hook-form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { IChangePassword } from "../interface/interface";
import { InfomationUser } from "@/component/infomation-user-right";

export default function ChangePassword() {
  const schema = yup.object().shape({
    old_password: yup.string().required("Vui lòng nhập mật khẩu củ"),
    password: yup.string().required("Vui lòng nhập mật khẩu củ"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IChangePassword> = (data) => {
    toast.success("Đổi mật khẩu thành công!");

    console.log(data);
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
                    Mật khẩu hiện tại <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    register={register}
                    placeholder="Password"
                    name="old_password"
                    type="password"
                    error={errors.old_password}
                  />
                </div>
                <div className="mb-4">
                  <div>
                    Mật khẩu mới <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    register={register}
                    name="password"
                    placeholder="Password"
                    type="password"
                    error={errors.password}
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
