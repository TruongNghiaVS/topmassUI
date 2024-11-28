"use client";

import TmNumberFormatInput from "@/component/hook-form/custom-input-number";
import TmInput from "@/component/hook-form/input";
import TmRadio from "@/component/hook-form/radio";
import TmSelect from "@/component/hook-form/select";
import { UserIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import numeral from "numeral";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface IPersonal {
  salary: number;
  is_salary?: number;
  other_salary?: number;
  zone?: number;
  people?: number;
}

const options = [
  { value: 1, label: "Vùng 1" },
  { value: 2, label: "Vùng 2" },
  { value: 3, label: "Vùng 3" },
  { value: 4, label: "Vùng 4" },
];

export default function PersonalIncomeOverview() {
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [defaultValues, setDefaultValues] = useState<IPersonal>({
    salary: 0,
    is_salary: 0,
    other_salary: 0,
    zone: 1,
    people: 0,
  });
  const schema = yup.object().shape({
    salary: yup
      .number()
      .typeError("")
      .min(1, "Vui lòng nhập mức lương")
      .required("Vui lòng nhập mức lương"),
    is_salary: yup.number(),
    other_salary: yup.number().when("is_salary", ([isSalary], schema) => {
      return isSalary === 1
        ? schema
            .required("Vui lòng nhập số tiền")
            .min(1, "Vui lòng nhập số tiền")
        : schema;
    }),
    zone: yup.number(),
    people: yup.number().typeError(""),
  });

  const { control, handleSubmit, watch, setValue } = useForm<IPersonal>({
    resolver: yupResolver(schema),
    defaultValues: {
      salary: 0,
      is_salary: 0,
      other_salary: 0,
      zone: 1,
      people: 0,
    },
  });

  const isSalary = watch("is_salary");

  const onSubmit: SubmitHandler<IPersonal> = (data: any) => {
    setDefaultValues(data);
    setIsOpenResult(true);
  };

  const handleChangeValue = async () => {
    setValue("other_salary", 0);
  };

  const getSalary = (data: IPersonal) => {
    return isSalary === 0 ? data.salary : data.other_salary || 0;
  };

  const salaryOfZone = (data: IPersonal) => {
    return 2340000 * 20;
  };

  const getTaxableIncome = (data: IPersonal) => {
    const defaultSalry = getSalary(data);
    const salaryZone = salaryOfZone(data);
    const insuranceSalary =
      (defaultSalry > salaryZone ? salaryZone : defaultSalry) * 0.105;
    let salary =
      data.salary - insuranceSalary < 11000000
        ? 0
        : data.salary - 11000000 - insuranceSalary;
    if (data.people && data.people > 0) {
      salary = salary - data.people * 4400000;
    }
    return salary;
  };

  const calCuPersonalIcome = (data: IPersonal) => {
    const salary = getTaxableIncome(data);
    if (salary <= 0) return 0;
    let count = 0;
    if (salary <= 5000000) {
      count = salary * 0.05;
    } else if (salary > 5000000 && salary <= 10000000) {
      count = 250000 + (salary - 5000000) * 0.1;
    } else if (salary > 10000000 && salary <= 18000000) {
      count = 250000 + 500000 + (salary - 10000000) * 0.15;
    } else if (salary > 18000000 && salary <= 32000000) {
      count = 250000 + 500000 + 1200000 + (salary - 18000000) * 0.2;
    } else if (salary > 32000000 && salary <= 52000000) {
      count = 250000 + 500000 + 1200000 + 2800000 + (salary - 32000000) * 0.25;
    } else if (salary > 52000000 && salary <= 80000000) {
      count =
        250000 +
        500000 +
        1200000 +
        2800000 +
        5000000 +
        (salary - 5200000) * 0.3;
    } else {
      count =
        250000 +
        500000 +
        1200000 +
        2800000 +
        5000000 +
        8400000 +
        (salary - 80000000) * 0.35;
    }

    return count;
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
        <div className="mx-2 mt-2 p-2 border border-[#F37A20] space-x-5 flex">
          <div>
            Giảm trừ gia cảnh bản thân{" "}
            <span className="text-default">11,000,000 VNĐ</span>
          </div>
          <div>
            Người phụ thuộc <span className="text-default">4,000,000 VNĐ</span>
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
                <div className="inline-flex items-center">
                  <TmNumberFormatInput
                    control={control}
                    name="salary"
                    min={0}
                    className="p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    afterIcon={<div>VNĐ</div>}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Mức đóng bảo hiểm
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex items-center space-x-2 mt-1">
                  <TmRadio
                    control={control}
                    onChange={() => handleChangeValue()}
                    name="is_salary"
                    className="accent-default"
                    options={[{ label: "Trên mức lương chính thức", value: 0 }]}
                  />
                </div>
                <div className="mt-2 flex space-x-2 items-center">
                  <TmRadio
                    name="is_salary"
                    control={control}
                    className="accent-default"
                    options={[{ label: "Khác", value: 1 }]}
                  />
                  <div className="inline-flex items-center ">
                    <TmNumberFormatInput
                      control={control}
                      name="other_salary"
                      min={0}
                      disabled={isSalary === 0}
                      className="p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
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
                  control={control}
                  options={options}
                  name="zone"
                  className="!w-auto p-2 border rounded-md"
                  placeholder="Chọn vùng"
                />
              </div>
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Số người phụ thuộc
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center ">
                  <TmInput
                    control={control}
                    icon={<UserIcon className="w-5 text-default" />}
                    type="number"
                    name="people"
                    min={0}
                    className="p-2 w-full rounded-lg focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    afterIcon={<div>Người</div>}
                  />
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
        {isOpenResult && (
          <div className="mt-4">
            <div className="text-xl text-default">Diễn giải chi tiết</div>
            <div className="ml-4 font-medium mt-2">
              Thuế thu nhập cá nhân:{" "}
              <span className="text-[#C10000]">
                {numeral(calCuPersonalIcome(defaultValues)).format("0,0")}
              </span>
            </div>
            <div className="text-xl text-default mt-2">Diễn giải chi tiết</div>
            <div className="mt-2">Giảm trừ bản thân = 11.000.000 </div>
            {defaultValues.people && defaultValues.people > 0 ? (
              <div className="mt-2">
                Giảm trừ người phụ thuộc = {defaultValues.people} x 4.400.000 ={" "}
                {numeral(defaultValues.people * 4400000).format("0,0")}
              </div>
            ) : (
              ""
            )}

            <div className="mt-2">
              Thu nhập chịu thuế = {defaultValues.salary} - 11.000.000{" "}
              {defaultValues.people && defaultValues.people > 0
                ? `-${numeral(defaultValues.people * 4400000).format("0,0")}`
                : ""}
              - {numeral(getSalary(defaultValues) * 0.105).format("0,0")}={" "}
              {numeral(getTaxableIncome(defaultValues)).format("0,0")}
            </div>

            <div className="mt-2">
              <span className="font-medium">+ Bậc 1:</span> Thu nhập tính thuế
              đến 05 triệu đồng, thuế suất 5%:
              {getTaxableIncome(defaultValues) <= 5000000 ? (
                <div className="mt-2">
                  ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                  5,000,000) × 5% ={" "}
                  {numeral(getTaxableIncome(defaultValues) * 0.05).format(
                    "0,0"
                  )}
                </div>
              ) : (
                <div className="mt-2">5,000,000 × 5% = 250,000</div>
              )}
            </div>

            {getTaxableIncome(defaultValues) > 5000000 ? (
              <div className="mt-2">
                <span className="font-medium">+ Bậc 2:</span> Thu nhập tính thuế
                từ 05 triệu đồng đến 10 triệu đồng, thuế suất 10%:
                {getTaxableIncome(defaultValues) <= 10000000 ? (
                  <div className="mt-2">
                    ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                    5,000,000) × 10% ={" "}
                    {numeral(
                      (getTaxableIncome(defaultValues) - 5000000) * 0.1
                    ).format("0,0")}
                  </div>
                ) : (
                  <div className="mt-2">
                    (10,000,000 - 5,000,000) × 10% = 500,000
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {getTaxableIncome(defaultValues) > 10000000 ? (
              <div className="mt-2">
                <span className="font-medium">+ Bậc 3:</span> Thu nhập tính thuế
                từ 10 triệu đồng đến 18 triệu đồng, thuế suất 15%:
                {getTaxableIncome(defaultValues) <= 18000000 ? (
                  <div className="mt-2">
                    ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                    10,000,000) × 10% ={" "}
                    {numeral(
                      (getTaxableIncome(defaultValues) - 10000000) * 0.15
                    ).format("0,0")}
                  </div>
                ) : (
                  <div className="mt-2">
                    (18,000,000 - 10,000,000) × 15% = 1,200,000
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {getTaxableIncome(defaultValues) > 18000000 ? (
              <div className="mt-2">
                <span className="font-medium">+ Bậc 4:</span> Thu nhập tính thuế
                từ 18 triệu đồng đến 32 triệu đồng, thuế suất 15%:
                {getTaxableIncome(defaultValues) <= 32000000 ? (
                  <div className="mt-2">
                    ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                    18,000,000) × 10% ={" "}
                    {numeral(
                      (getTaxableIncome(defaultValues) - 18000000) * 0.2
                    ).format("0,0")}
                  </div>
                ) : (
                  <div className="mt-2">
                    (32,000,000 - 18,000,000) × 20% = 2,800,000
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {getTaxableIncome(defaultValues) > 32000000 ? (
              <div className="mt-2">
                <span className="font-medium">+ Bậc 5:</span> Thu nhập tính thuế
                từ 32 triệu đồng đến 52 triệu đồng, thuế suất 15%:
                {getTaxableIncome(defaultValues) <= 52000000 ? (
                  <div className="mt-2">
                    ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                    32,000,000) × 10% ={" "}
                    {numeral(
                      (getTaxableIncome(defaultValues) - 32000000) * 0.25
                    ).format("0,0")}
                  </div>
                ) : (
                  <div className="mt-2">
                    (52,000,000 - 32,000,000) × 25% = 5,000,000
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {getTaxableIncome(defaultValues) > 52000000 ? (
              <div className="mt-2">
                <span className="font-medium">+ Bậc 6:</span> Thu nhập tính thuế
                từ 52 triệu đồng đến 80 triệu đồng, thuế suất 15%:
                {getTaxableIncome(defaultValues) <= 80000000 ? (
                  <div className="mt-2">
                    ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                    52,000,000) × 30% ={" "}
                    {numeral(
                      (getTaxableIncome(defaultValues) - 52000000) * 0.3
                    ).format("0,0")}
                  </div>
                ) : (
                  <div className="mt-2">
                    (80,000,000 - 52,000,000) × 30% = 8,400,000
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {getTaxableIncome(defaultValues) > 80000000 ? (
              <div className="mt-2">
                <span className="font-medium">+ Bậc 7:</span> Thu nhập tính thuế
                từ 80 triệu đồng trở lên, thuế suất 35%:
                <div className="mt-2">
                  ( {numeral(getTaxableIncome(defaultValues)).format("0,0")} -
                  80,000,000) × 35% ={" "}
                  {numeral(
                    (getTaxableIncome(defaultValues) - 80000000) * 0.35
                  ).format("0,0")}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
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
