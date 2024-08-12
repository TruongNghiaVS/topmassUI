"use client";
import TmInput from "@/component/hook-form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useMemo } from "react";
import { InfomationUser } from "@/component/infomation-user-right";

export default function InfomationEditUser() {
  const schema = yup.object().shape({
    username: yup.string().required("Bắt buộc nhập họ và tên"),
    phone_number: yup
      .string()
      .notRequired()
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự"),
    email: yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      username: "",
      phone_number: null,
      email: "thai.nn@vietstargroup.vn",
    }),
    []
  );

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="bg-[#F4F5F5] max-1280:px-2">
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-6 py-8">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="bg-white p-4 rounded-lg">
              <div className="font-bold my-4 text-base">
                Cài đặt thông tin cá nhân
              </div>
              <div className="my-2">
                <span className="text-[#dc2f2f]">(*)</span> Các thông tin bắt
                buộc
              </div>
              <form onSubmit={onSubmit}>
                <div className="mt-4">
                  <label className="font-normal">
                    Họ và tên <span className="text-[#dc2f2f]">*</span>
                  </label>
                  <TmInput
                    name="username"
                    control={control}
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-normal">Số điện thoại</div>
                  <TmInput
                    name="phone_number"
                    control={control}
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-normal">Email</div>
                  <TmInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    type="email"
                    disabled
                  />
                </div>
                <button
                  type="submit"
                  className=" mt-4 px-4 py-2 bg-[#F37A20] rounded text-white"
                >
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <InfomationUser />
          </div>
        </div>
      </div>
    </div>
  );
}
