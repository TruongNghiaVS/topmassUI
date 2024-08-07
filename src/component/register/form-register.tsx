"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import TmInput from "../hook-form/input";
import { IRegister } from "@/app/interface/interface";
import TmSelect from "../hook-form/select";
import { areaCode } from "@/mockup-data/data";
import { StarIcon } from "@heroicons/react/16/solid";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TmCheckBox from "../hook-form/checkbox";
import Link from "next/link";

const FlagStarVN = () => {
  return (
    <div className="py-1 px-2 bg-[#D32F2F] border">
      <StarIcon className="text-[#EBA432] w-3" />
    </div>
  );
};

const schema = yup.object().shape({
  last_name: yup.string(),
  first_name: yup.string(),
  first_phone: yup.string(),
  phone_number: yup
    .string()
    .matches(/^[0-9]{10}$/, "Số điện thoại phải là 10 ký tự")
    .required("Bắt buộc nhập số điện thoại"),
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
  is_used: yup
    .boolean()
    .required("Please check")
    .oneOf([true], "Vui lòng chọn xác nhận với thoả thuận"),
});

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="lg:px-72 md:px-20 px-2">
          <div className="border border-solid border-[#8E8D8D] py-6 md:px-16 px-4 rounded-lg">
            <div className="text-center text-2xl font-normal mb-4">
              Đăng ký thành viên!
            </div>
            <div className="grid grid-cols-2 gap-x-8 mb-8">
              <div className="col-span-1">
                <button className="flex items-center justify-center border border-solid border-[#8E8D8D] w-full py-2 bg-[#F9F9F9] rounded">
                  <img src="/imgs/facebook.png" alt="" className="w-6 mr-2" />
                  <div className="text-xs font-normal">
                    Với tài khoản Facebook
                  </div>
                </button>
              </div>
              <div className="col-span-1">
                <button className="flex items-center justify-center border border-solid border-[#8E8D8D] w-full py-2 bg-[#F9F9F9] rounded">
                  <img src="/imgs/google.png" alt="" className="w-6 mr-2" />
                  <div className="text-xs font-normal">
                    Với tài khoản Google
                  </div>
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sm:grid grid-cols-2 gap-x-8 mb-8">
                <div className="col-span-1">
                  <div className="font-medium">Tên</div>
                  <TmInput register={register} name="last_name" />
                </div>
                <div className="col-span-1">
                  <div className="col-span-1">
                    <div className="font-medium">Họ</div>
                    <TmInput register={register} name="first_name" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="font-medium">Số điện thoại</div>
                <div className="flex">
                  <TmSelect
                    register={register}
                    name="first_phone"
                    icon={<FlagStarVN />}
                    className="py-2.5 pr-2 mr-2"
                    data={areaCode.map((item) => {
                      return (
                        <option key={item.label} value={item.value}>
                          {item.label}
                        </option>
                      );
                    })}
                  />
                  <div className="flex-grow">
                    <TmInput
                      register={register}
                      name="phone_number"
                      error={errors.phone_number}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div>Email</div>
                <TmInput
                  register={register}
                  placeholder="Sử dụng email có thật để xác thực"
                  name="email"
                  type="email"
                  error={errors.email}
                />
              </div>
              <div className="mb-8">
                <div>Password</div>
                <TmInput
                  register={register}
                  name="password"
                  placeholder="Từ 6 tới 50 ký tự,1 chữ hoa, 1 chữ số"
                  type="password"
                  error={errors.password}
                />
              </div>
              <div className="mb-8 flex items-center">
                <TmCheckBox
                  register={register}
                  name="is_used"
                  type="checkbox"
                  error={errors.is_used}
                  label={
                    <div>
                      Tôi đồng ý với{" "}
                      <Link href="#" className="text-[#527EFF]">
                        thoả thuận sử dụng
                      </Link>{" "}
                      và{" "}
                      <Link href="#" className="text-[#527EFF]">
                        quy định bảo mật
                      </Link>{" "}
                      của Topmass
                    </div>
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-[#FF7D55] rounded-lg"
              >
                Đăng ký
              </button>
            </form>
            <div className="text-[#8E8D8D] font-normal text-lg mt-8 text-center pb-4 border-b border-[#8E8D8D]">
              Bạn là thành viên Topmass{" "}
              <span className="text-[#185AFF]">Đăng nhập</span>
            </div>
            <div className="text-[#8E8D8D] font-normal text-lg mt-8 text-center">
              Nếu bạn có nhu cầu tuyển dụng đăng ký tại{" "}
              <span className="text-[#185AFF]">đây</span>
            </div>
          </div>
          <div className="flex mt-4 justify-end">
            <div className="text-lg text-[#8E8D8D] pr-2 mr-2 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]">
              Thoả thuận sử dúng
            </div>
            <div className="text-lg text-[#8E8D8D]">Quy định bảo mật</div>
          </div>
        </div>
      </div>
    </div>
  );
};
