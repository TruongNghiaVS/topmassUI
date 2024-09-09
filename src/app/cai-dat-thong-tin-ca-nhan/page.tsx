"use client";
import TmInput from "@/component/hook-form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { InfomationUser } from "@/component/infomation-user-right";
import { toast } from "react-toastify";
import { IProfileInfomation } from "../interface/interface";
import { useLoading } from "../context/loading";
import axiosInstance, { fetcher } from "@/utils/axios";
import { CURRENT_USER, UPDATE_BASIC_INFO } from "@/utils/api-url";
import { AxiosError } from "axios";
import useSWR from "swr";
import { useEffect, useState } from "react";

export default function InfomationEditUser() {
  const { mutate, data: currentUser, error } = useSWR<IProfileInfomation>(
    CURRENT_USER,
    fetcher
  );

  const { setLoading } = useLoading();
  const schema = yup.object().shape({
    firstName: yup.string().required("Bắt buộc nhập họ"),
    lastName: yup.string().required("Bắt buộc nhập tên"),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự"),
    email: yup.string(),
    avatarLink: yup.string(),
  });

  const { control, handleSubmit, setValue } = useForm<IProfileInfomation>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      setValue("firstName", currentUser.firstName);
      setValue("lastName", currentUser.lastName);
      setValue("phone", currentUser.phone);
      setValue("email", currentUser.email);
    }
  }, [currentUser, setValue]);

  const onSubmit: SubmitHandler<IProfileInfomation> = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(UPDATE_BASIC_INFO, data);
      if (response) {
        toast.success("Cập nhật thông tin thành công");
        mutate();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          (props: any) => {
            return props.data.dataError.map((itemError: any) => {
              return (
                <div key={itemError.errorCode}>{itemError.errorMesage}</div>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <label className="font-normal">
                    Họ <span className="text-[#dc2f2f]">*</span>
                  </label>
                  <TmInput
                    name="firstName"
                    control={control}
                    placeholder="Họ"
                  />
                </div>
                <div className="mt-4">
                  <label className="font-normal">
                    Tên <span className="text-[#dc2f2f]">*</span>
                  </label>
                  <TmInput
                    name="lastName"
                    control={control}
                    placeholder="Tên"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-normal">Số điện thoại</div>
                  <TmInput
                    name="phone"
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
                  Cập nhật
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
