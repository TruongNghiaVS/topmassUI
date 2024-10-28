"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import TmInput from "../hook-form/input";
import { IRegister } from "@/interface/interface";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { REGISTER } from "@/utils/api-url";
import { axiosInstanceNotToken } from "@/utils/axios";
import { useLoading } from "@/app/context/loading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/16/solid";

const schema = yup.object().shape({
  lastName: yup.string().required("Vui lòng nhập tên"),
  firstName: yup.string().required("Vui lòng nhập họ"),
  phone: yup
    .string()
    .required("Bắt buộc nhập số điện thoại")
    .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự"),
  email: yup
    .string()
    .email("Sai format email ")
    .required("Bắt buộc nhập email"),
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
  // is_used: yup
  //   .boolean()
  //   .required("Please check")
  //   .oneOf([true], "Vui lòng chọn xác nhận với thoả thuận"),
});

export const FormRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false,
  });
  const { setLoading } = useLoading();
  const router = useRouter();
  const { handleSubmit, control } = useForm<IRegister>({
    resolver: yupResolver(schema),
    defaultValues: {
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
      // is_used: false,
    },
  });

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstanceNotToken.post(REGISTER, data);
      if (response) {
        toast.success("Đăng ký thành công");
        setIsRegister(true);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          (props: any) => {
            return props.data.dataError.map((itemError: any) => {
              return (
                <div key={itemError.errorCode}>
                  {itemError.errorCode} : {itemError.errorMesage}
                </div>
              );
            });
          },
          {
            data: {
              dataError: error.response?.data.dataEror,
            },
          }
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-2xl font-normal mb-4 text-[#F37A20]">
        Đăng ký tài khoản ứng viên
      </div>
      <div className="mb-4 font-normal">
        Cùng xây dựng một hệ sinh thái tuyển dụng nhân sự cùng với nguồn ứng
        viên khổng lồ từ Topmass
      </div>
      {!isRegister ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:grid grid-cols-2 gap-x-8 mb-2">
              <div className="col-span-1">
                <div className="">
                  Tên <span className="text-[#dc2f2f]">*</span>
                </div>
                <TmInput name="lastName" control={control} placeholder="Tên" />
              </div>
              <div className="col-span-1">
                <div className="col-span-1">
                  <div className="">
                    Họ <span className="text-[#dc2f2f]">*</span>
                  </div>
                  <TmInput
                    control={control}
                    name="firstName"
                    placeholder="Họ"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="">
                Số điện thoại <span className="text-[#dc2f2f]">*</span>
              </div>
              <div className="flex">
                <div className="flex-grow">
                  <TmInput
                    control={control}
                    name="phone"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                Email <span className="text-[#dc2f2f]">*</span>
              </div>
              <TmInput
                control={control}
                placeholder="Sử dụng email có thật để xác thực"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-2">
              <div>
                Mật khẩu <span className="text-[#dc2f2f]">*</span>
              </div>
              <TmInput
                control={control}
                name="password"
                placeholder="Từ 6 tới 50 ký tự,1 chữ hoa, 1 chữ số"
                type={showPassword.password ? "text" : "password"}
                afterIcon={
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword((prevShowPassword) => {
                        return {
                          ...prevShowPassword,
                          password: !prevShowPassword.password,
                        };
                      });
                    }}
                  >
                    <EyeIcon className="w-5" />
                  </button>
                }
              />
            </div>
            <div className="mb-2">
              <div>
                Nhập lại mật khẩu <span className="text-[#dc2f2f]">*</span>
              </div>
              <TmInput
                control={control}
                name="confirm_password"
                placeholder="Từ 6 tới 50 ký tự,1 chữ hoa, 1 chữ số"
                type={showPassword.confirm_password ? "text" : "password"}
                afterIcon={
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword((prevShowPassword) => {
                        return {
                          ...prevShowPassword,
                          confirm_password: !prevShowPassword.confirm_password,
                        };
                      });
                    }}
                  >
                    <EyeIcon className="w-5" />
                  </button>
                }
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white bg-[#FF7D55] rounded-lg text-base font-bold"
            >
              Hoàn tất
            </button>
          </form>
          <div className="text-[#8E8D8D] font-normal text-base mt-8 text-center pb-4 ">
            Bạn đã có tài khoản?{" "}
            <Link href="/dang-nhap" className="text-[#F37A20]">
              Đăng nhập
            </Link>{" "}
            ngay
          </div>
        </div>
      ) : (
        <div className="font-medium">
          Đăng ký thành công. Vui lòng bấm vào{" "}
          <Link href="/dang-nhap" className="text-[#F37A20]">
            đây
          </Link>{" "}
          để đăng nhập
        </div>
      )}
    </div>
  );
};
