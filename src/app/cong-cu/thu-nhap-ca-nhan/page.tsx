"use client";

import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import { UserIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface IPersonal {
  salary: number;
  is_salary?: string;
  zone?: string;
  people?: number;
}

export default function PersonalIncome() {
  const schema = yup.object().shape({
    salary: yup
      .number()
      .required("Vui lòng nhập số tiền lương")
      .min(1, "Vui lòng nhập số tiền lương"),
    is_salary: yup.string(),
    zone: yup.string(),
    people: yup.number(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IPersonal>({
    resolver: yupResolver(schema),
    defaultValues: {
      salary: 0,
      is_salary: "0",
      zone: "",
    },
  });

  const onSubmit: SubmitHandler<IPersonal> = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="p-4 bg-white rounded">
        <div className="text-xs">Công cụ tiện ích</div>
        <div className="mt-2 text-default text-2xl">
          Tính thuế thu nhập cá nhân
        </div>
        <div className="mt-2">
          Chỉ cần nhập dữ liệu, bạn sẽ biết ngay số thuế thu nhập cá nhân cần
          nộp hàng tháng.
        </div>
        <div className="mx-2 mt-2 p-2 border border-[#F37A20] space-x-10 flex">
          <div>
            Giảm trừ gia cảnh bản thân{" "}
            <span className="text-default">11,000,000</span>
          </div>
          <div>
            Người phụ thuộc <span className="text-default">4,000,000</span>
          </div>
        </div>
        <div className="mt-4 p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Thu nhập
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center border rounded-lg px-2">
                  <input
                    type="number"
                    name="salary"
                    min={0}
                    className="p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div>VNĐ</div>
                </div>
                {errors && errors.salary && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.salary.message}
                  </p>
                )}
              </div>
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Mức đóng bảo hiểm
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="radio"
                    name="is_salalry"
                    className="accent-default"
                    value="0"
                  />
                  <div>Trên mức lương chính thức</div>
                </div>
                <div className="mt-2 flex space-x-2 items-center">
                  <input
                    type="radio"
                    name="is_salary"
                    className="accent-default"
                    value="1"
                  />
                  <div>Khác</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <TmInput
                      type="number"
                      name="other_salary"
                      control={control}
                      min={0}
                      className="border-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Vùng
                </div>
              </div>
              <div className="col-span-3">
                <TmSelect
                  name="zone"
                  className="!w-auto"
                  placeholder="Chọn vùng"
                  control={control}
                  options={[
                    { label: "Vùng 1", value: "Vùng 1" },
                    { label: "Vùng 2", value: "Vùng 2" },
                    { label: "Vùng 3", value: "Vùng 3" },
                    { label: "Vùng 4", value: "Vùng 4" },
                  ]}
                />
              </div>
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Số người phụ thuộc
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center border rounded-lg px-2">
                  <UserIcon className="w-5 text-default" />
                  <TmInput
                    type="number"
                    name="people"
                    control={control}
                    min={0}
                    className="border-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div>Người</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20]"
                type="submit"
              >
                Tính thuế TNCN
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4">
          <div className="text-xl text-default">Diễn giải chi tiết</div>
          <div className="ml-4 font-medium mt-2">
            Thu nhập cá nhân:{" "}
            <span className="text-[#C10000]">710.000 đồng</span>
          </div>
          <div className="text-xl text-default mt-2">Diễn giải chi tiết</div>
          <div className="mt-2">Giảm trừ bản thân = 11.000.000 </div>
          <div className="mt-2">
            Giảm trừ người phụ thuộc = 1 x 4.400.000 = 4.400.000
          </div>
          <div className="mt-2">
            Thu nhập chịu thuế = 25.000.000 - 11.000.000 - 4.400.000 = 9.600.000
          </div>
          <div className="mt-2">
            <span className="font-medium">+ Bậc 1:</span> Thu nhập tính thuế đến
            05 triệu đồng, thuế suất 5%:
          </div>
          <div className="mt-2">5.000.000 × 5% = 250.000</div>
          <div className="mt-2">
            <span className="font-medium">+ Bậc 2:</span> Thu nhập tính thuế đến
            05 triệu đồng, thuế suất 5%:
          </div>
          <div className="mt-2">(9.600.000 - 5.000.000) × 10% = 460.000</div>
          <div className="mt-2">
            <span className="font-medium">Thuế thu nhập cá nhân</span> = 250.000
            + 460.000 = <span className="font-medium text-default"></span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mt-4 bg-white rounded p-4">
          <div className="mt-2 text-default text-xl ">
            Bảng thu nhập thuế và thuế suất
          </div>
          <div className="overflow-x-auto col-span-2 mt-4">
            <table className="min-w-full text-sm text-left text-gray-500 border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4  font-medium">Mức chịu thuế</th>
                  <th className="p-4  font-medium text-right">Thuế xuất</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4">Đến 5 triệu VNĐ</td>
                  <td className="text-right p-4">5%</td>
                </tr>
                <tr>
                  <td className="p-4">Trên 5 triệu VNĐ đến 10 triệu VNĐ</td>
                  <td className="text-right p-4">10%</td>
                </tr>
                <tr>
                  <td className="p-4">Trên 10 triệu VNĐ đến 18 triệu VNĐ</td>
                  <td className="text-right p-4">15%</td>
                </tr>
                <tr>
                  <td className="p-4">Trên 18 triệu VNĐ đến 32 triệu VNĐ</td>
                  <td className="text-right p-4">20%</td>
                </tr>
                <tr>
                  <td className="p-4">Trên 32 triệu VNĐ đến 52 triệu VNĐ</td>
                  <td className="text-right p-4">25%</td>
                </tr>
                <tr>
                  <td className="p-4">Trên 52 triệu VNĐ đến 80 triệu VNĐ</td>
                  <td className="text-right p-4">30%</td>
                </tr>
                <tr>
                  <td className="p-4">Trên 80 triệu VNĐ</td>
                  <td className="text-right p-4">35%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
