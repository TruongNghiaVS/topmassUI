"use client";

import TmInput from "@/component/hook-form/input";
import TmRadio from "@/component/hook-form/radio";
import TmSelect from "@/component/hook-form/select";
import { IGrossAndNet } from "@/interface/tool";
import {
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import numeral from "numeral";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useTypeStore } from "@/store/useModalStore";

const options = [
  { value: 1, label: "Vùng 1" },
  { value: 2, label: "Vùng 2" },
  { value: 3, label: "Vùng 3" },
  { value: 4, label: "Vùng 4" },
];

export default function PersonalIncome() {
  const [isOpenResult, setIsOpenResult] = useState(false);
  const { type, setType } = useTypeStore();
  const [defaultValues, setDefaultValues] = useState<IGrossAndNet>({
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

  const { control, handleSubmit, watch, setValue } = useForm<IGrossAndNet>({
    resolver: yupResolver(schema),
    defaultValues,
    shouldUnregister: false, // This ensures fields are not unregistered on unmount
  });

  const onSubmit: SubmitHandler<IGrossAndNet> = (data) => {
    setDefaultValues(data);
    if (useTypeStore.getState().type === "net") {
      const salary = calculateGrossSalary(data);
      data.salary = salary;
    }
    setIsOpenResult(true);
  };

  const handleCalculator = (typeString: string) => {
    setType(typeString);
    handleSubmit(onSubmit)();
  };

  const isSalary = watch("is_salary");

  const getSalary = (data: IGrossAndNet) => {
    return isSalary === 0 ? data.salary : data.other_salary || 0;
  };

  const salaryOfZone = (data: IGrossAndNet) => {
    return 2340000 * 20;
  };

  const getTaxableIncome = (data: IGrossAndNet) => {
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

  const calCuPersonalIcome = (data: IGrossAndNet) => {
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

  const calculateGrossSalary = (data: IGrossAndNet) => {
    let taxableIncome = data.salary - 11000000;
    if (data.people && data.people > 0) {
      taxableIncome = taxableIncome - 4400000 * data.people;
    }

    // Xác định thuế TNCN lũy tiến
    let personalIncomeTax = 0;
    if (taxableIncome > 80000000) {
      personalIncomeTax = (taxableIncome - 9850000) / 0.65;
    } else if (taxableIncome > 52000000) {
      personalIncomeTax = (taxableIncome - 5850000) / 0.7;
    } else if (taxableIncome > 32000000) {
      personalIncomeTax = (taxableIncome - 3250000) / 0.75;
    } else if (taxableIncome > 18000000) {
      personalIncomeTax = (taxableIncome - 1650000) / 0.8;
      taxableIncome = 18000000;
    } else if (taxableIncome > 10000000) {
      personalIncomeTax = (taxableIncome - 750000) / 0.85;
    } else if (taxableIncome > 5000000) {
      personalIncomeTax = (taxableIncome - 250000) / 0.9;
    } else if (taxableIncome > 0) {
      personalIncomeTax = taxableIncome / 0.95;
    }

    let salaryBeforeIncome = personalIncomeTax + 11000000;
    if (data.people && data.people > 0) {
      salaryBeforeIncome = salaryBeforeIncome - 4400000 * data.people;
    }
    debugger;
    let salaryGross = 0;
    const salaryZone = salaryOfZone(data);
    if (salaryZone < salaryBeforeIncome) {
      const salaryInsurance = salaryZone * 0.105;
      salaryGross += salaryBeforeIncome + salaryInsurance;
    } else {
      salaryGross = salaryBeforeIncome / 0.895;
    }

    // Tổng lương gross
    return Math.round(salaryGross);
  };

  const handleChangeValue = async () => {
    setValue("other_salary", 0);
  };

  return (
    <div>
      <div className="p-4 bg-white rounded">
        <div className="text-xs">Công cụ tiện ích</div>
        <div className="mt-2 text-default text-2xl font-bold">
          Công cụ tính lương Net và Gross
        </div>
        <div className="mt-2">
          Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/ tháng (132 triệu
          đồng/năm) với người nộp thuế và 4.4 triệu đồng/ tháng với mỗi người
          phụ thuộc (theo Nghị định số 954/2020/UBTVQH14)
        </div>
        <div>
          Áp dụng mức lương tối thiểu vùng mới nhất có hiệu lực từ ngày
          01/07/2023 (theo điều 3 Nghị định 38/2022/NĐ-CP)
        </div>
        <div className="mx-2 mt-2 p-2 border border-[#F37A20] space-x-10 flex">
          <div>
            Lương cơ sở: <span className="text-default">2,340,000 VNĐ</span>
          </div>
          <div>
            Giảm trừ gia cảnh bản thân:{" "}
            <span className="text-default">11,000,000 VNĐ</span>
          </div>
          <div>
            Người phụ thuộc: <span className="text-default">4,400,000 VNĐ</span>
          </div>
        </div>
        <div className="mt-4 text-default text-2xl flex space-x-2 items-center">
          Tính lương Gross <ArrowsRightLeftIcon className="w-4" /> Net
        </div>
        <div className="mt-4 p-2">
          <form>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Thu nhập
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center">
                  <TmInput
                    control={control}
                    type="number"
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
                    <TmInput
                      control={control}
                      type="number"
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
            <div className="text-center mt-4 flex justify-center space-x-4">
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20] flex space-x-2 items-center"
                type="button"
                onClick={() => handleCalculator("gross")}
              >
                <span>GROSS</span> <ArrowRightIcon className="w-4" />{" "}
                <span>NET</span>
              </button>
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20] flex space-x-2 items-center"
                type="button"
                onClick={() => {
                  setType("net");
                  handleCalculator("net");
                }}
              >
                <span>NET</span> <ArrowRightIcon className="w-4" />{" "}
                <span>GROSSS</span>
              </button>
            </div>
          </form>
        </div>

        {isOpenResult && (
          <div>
            <div className="mt-4 text-default text-2xl">Kết quả</div>
            <div className="p-4 rounded-lg border border-default bg-[#EFEFEF] mt-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Lương gross</div>
                  <div>{numeral(defaultValues.salary).format("0,0")}</div>
                </div>
                <div>
                  <div className="font-medium">Bảo hiểm</div>
                  <div>
                    -
                    {numeral(
                      (getSalary(defaultValues) > salaryOfZone(defaultValues)
                        ? salaryOfZone(defaultValues)
                        : getSalary(defaultValues)) * 0.105
                    ).format("0,0")}
                  </div>
                </div>
                <div>
                  <div className="font-medium">Thuế TNCN</div>
                  <div>
                    {numeral(calCuPersonalIcome(defaultValues)).format("0,0")}
                  </div>
                </div>
                <div>
                  <div className="font-medium">Lương Net</div>
                  <div>
                    {numeral(
                      defaultValues.salary -
                        (getSalary(defaultValues) > salaryOfZone(defaultValues)
                          ? salaryOfZone(defaultValues)
                          : getSalary(defaultValues)) *
                          0.105 -
                        calCuPersonalIcome(defaultValues)
                    ).format("0,0")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 rounded">
        <div className="bg-white rounded p-4">
          <div className="mt-2 text-default text-xl ">Chi tiết tính lương</div>
          <div className="overflow-x-auto col-span-2 mt-4">
            <table className="min-w-full text-sm text-left text-gray-500 border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4  font-medium">Mức chịu thuế</th>
                  <th className="p-4  font-medium text-right">Thuế xuất</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="text-default">
                  <td className="p-4">Lương Gross</td>
                  <td className="text-right p-4">
                    {numeral(defaultValues.salary).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">BHXH (8%)</td>
                  <td className="text-right p-4">
                    -
                    {numeral(
                      (getSalary(defaultValues) > salaryOfZone(defaultValues)
                        ? salaryOfZone(defaultValues)
                        : getSalary(defaultValues)) * 0.08
                    ).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">BHYT (1.5%)</td>
                  <td className="text-right p-4">
                    -
                    {numeral(
                      (getSalary(defaultValues) > salaryOfZone(defaultValues)
                        ? salaryOfZone(defaultValues)
                        : getSalary(defaultValues)) * 0.015
                    ).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">BHTN (1%)</td>
                  <td className="text-right p-4">
                    -
                    {numeral(
                      (getSalary(defaultValues) > salaryOfZone(defaultValues)
                        ? salaryOfZone(defaultValues)
                        : getSalary(defaultValues)) * 0.01
                    ).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Thu nhập trước thuế</td>
                  <td className="text-right p-4">
                    {numeral(
                      defaultValues.salary -
                        (getSalary(defaultValues) > salaryOfZone(defaultValues)
                          ? salaryOfZone(defaultValues)
                          : getSalary(defaultValues)) *
                          0.105
                    ).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Giảm trừ gia cảnh cá nhân</td>
                  <td className="text-right p-4">-11,000,000</td>
                </tr>
                <tr>
                  <td className="p-4">Giảm trừ gia cảnh người phụ thuộc</td>
                  <td className="text-right p-4">
                    -
                    {defaultValues.people &&
                      numeral(defaultValues.people * 4400000).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Thu nhập chịu thuế</td>
                  <td className="text-right p-4">
                    {numeral(getTaxableIncome(defaultValues)).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Thuế thu nhập cá nhân</td>
                  <td className="text-right p-4">
                    -{numeral(calCuPersonalIcome(defaultValues)).format("0,0")}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-default">Lương Net</td>
                  <td className="text-right p-4">
                    {numeral(
                      defaultValues.salary -
                        (getSalary(defaultValues) > salaryOfZone(defaultValues)
                          ? salaryOfZone(defaultValues)
                          : getSalary(defaultValues)) *
                          0.105 -
                        calCuPersonalIcome(defaultValues)
                    ).format("0,0")}
                  </td>
                </tr>
              </tbody>
            </table>
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
