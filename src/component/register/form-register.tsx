"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import TmInput from "../hook-form/input";
import { IRegister } from "@/app/interface/interface";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { REGISTER } from "@/utils/api-url";
import { axiosInstanceNotToken } from "@/utils/axios";
import { useLoading } from "@/app/context/loading";

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
  // is_used: yup
  //   .boolean()
  //   .required("Please check")
  //   .oneOf([true], "Vui lòng chọn xác nhận với thoả thuận"),
});

export const FormRegister = () => {
  const { setLoading } = useLoading();

  const { handleSubmit, control } = useForm<IRegister>({
    resolver: yupResolver(schema),
    defaultValues: {
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
      password: "",
      // is_used: false,
    },
  });

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstanceNotToken.post(REGISTER, data);

      if (response.data.success) {
        toast.success("Đăng ký thành công");
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
        Đăng ký tài khoản nhà tuyển dụng
      </div>
      <div className="mb-4 font-normal">
        Cùng xây dựng một hệ sinh thái tuyển dụng nhân sự cùng với nguồn ứng
        viên khổng lồ từ Topmass
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:grid grid-cols-2 gap-x-8 mb-8">
          <div className="col-span-1">
            <div className="">
              Tên <span className="text-[#dc2f2f]">*</span>
            </div>
            <TmInput name="lastName" control={control} />
          </div>
          <div className="col-span-1">
            <div className="col-span-1">
              <div className="">
                Họ <span className="text-[#dc2f2f]">*</span>
              </div>
              <TmInput control={control} name="firstName" />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="">
            Số điện thoại <span className="text-[#dc2f2f]">*</span>
          </div>
          <div className="flex">
            <div className="flex-grow">
              <TmInput control={control} name="phone" />
            </div>
          </div>
        </div>
        <div className="mb-8">
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
        <div className="mb-8">
          <div>
            Password <span className="text-[#dc2f2f]">*</span>
          </div>
          <TmInput
            control={control}
            name="password"
            placeholder="Từ 6 tới 50 ký tự,1 chữ hoa, 1 chữ số"
            type="password"
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
  );
};
