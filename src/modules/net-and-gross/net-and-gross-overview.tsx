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
import Modal from "@/component/modal";
import TmNumberFormatInput from "@/component/hook-form/custom-input-number";

const options = [
  { value: 1, label: "Vùng 1" },
  { value: 2, label: "Vùng 2" },
  { value: 3, label: "Vùng 3" },
  { value: 4, label: "Vùng 4" },
];

export default function NetAndGrossOverivew() {
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    other_salary: yup
      .number()
      .when("is_salary", ([isSalary], schema) => {
        return isSalary === 1
          ? schema
              .required("Vui lòng nhập số tiền")
              .min(1, "Vui lòng nhập số tiền")
          : schema;
      })
      .typeError(""),
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
    if (taxableIncome < 0) {
      salaryBeforeIncome += taxableIncome;
    }
    if (data.people && data.people > 0) {
      salaryBeforeIncome = salaryBeforeIncome + 4400000 * data.people;
    }
    let salaryGross = 0;
    const salaryZone = salaryOfZone(data);
    if (salaryZone < salaryBeforeIncome) {
      const salaryInsurance = salaryZone * 0.105;
      salaryGross += salaryBeforeIncome + salaryInsurance;
    } else if (data.is_salary && data.other_salary) {
      const salaryInsurance = data.other_salary * 0.105;
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

  const calcuSalaryForExportTax = (
    fromSalary: number,
    toSalary: number,
    tax: number,
    salary: number
  ) => {
    let lastSalary = 0;

    if (salary > fromSalary && salary <= toSalary) {
      lastSalary = (salary - fromSalary) * tax;
    } else if (salary > toSalary) {
      lastSalary = (toSalary - fromSalary) * tax;
    }

    if (salary > 80000000 && fromSalary === 80000000) {
      lastSalary = (salary - fromSalary) * tax;
    }

    return numeral(lastSalary).format("0,0");
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
        <div className="mx-2 mt-2 p-2 border border-[#F37A20] space-x-5 flex">
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
                  <TmNumberFormatInput
                    control={control}
                    name="salary"
                    min={0}
                    className="p-2 w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                      afterIcon={"VND"}
                      className="p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex items-center cursor-pointer">
                  <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                    Vùng
                  </div>
                  <div
                    className="ml-2 font-medium text-base"
                    onClick={() => setIsOpenModal(true)}
                  >
                    (Chú thích)
                  </div>
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
      {isOpenResult && (
        <div className="mt-4 rounded">
          <div className="bg-white rounded p-4">
            <div className="mt-2 text-default text-xl ">
              Chi tiết tính lương
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
                          (getSalary(defaultValues) >
                          salaryOfZone(defaultValues)
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
                      -
                      {numeral(calCuPersonalIcome(defaultValues)).format("0,0")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-default">Lương Net</td>
                    <td className="text-right p-4">
                      {numeral(
                        defaultValues.salary -
                          (getSalary(defaultValues) >
                          salaryOfZone(defaultValues)
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
      )}

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
                  <th className="p-4  font-medium text-right">Tiền nộp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4">Đến 5 triệu VNĐ</td>
                  <td className="text-right p-4">5%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      0,
                      5000000,
                      0.05,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Trên 5 triệu VNĐ đến 10 triệu VNĐ</td>
                  <td className="text-right p-4">10%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      5000000,
                      10000000,
                      0.1,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Trên 10 triệu VNĐ đến 18 triệu VNĐ</td>
                  <td className="text-right p-4">15%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      10000000,
                      18000000,
                      0.15,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Trên 18 triệu VNĐ đến 32 triệu VNĐ</td>
                  <td className="text-right p-4">20%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      18000000,
                      32000000,
                      0.2,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Trên 32 triệu VNĐ đến 52 triệu VNĐ</td>
                  <td className="text-right p-4">25%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      32000000,
                      52000000,
                      0.25,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Trên 52 triệu VNĐ đến 80 triệu VNĐ</td>
                  <td className="text-right p-4">30%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      52000000,
                      80000000,
                      0.3,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Trên 80 triệu VNĐ</td>
                  <td className="text-right p-4">35%</td>
                  <td className="text-right p-4">
                    {calcuSalaryForExportTax(
                      80000000,
                      0,
                      0.35,
                      getTaxableIncome(defaultValues)
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpenModal}
        className="md:!min-w-[900px] md:!max-w-[900px]"
        onClose={() => setIsOpenModal(false)}
        title={
          <div>
            <h4 className="text-colorBase font-medium">
              Mức lương tối thiểu vùng
            </h4>
            <p>
              Áp dụng mức lương tối thiểu vùng mới nhất có hiệu lực từ ngày
              01/07/2024
            </p>
          </div>
        }
      >
        <ul className="list-disc px-6">
          <li>Vùng I: 4,960,000 đồng/tháng</li>
          <li>Vùng II: 4,410,000 đồng/tháng</li>
          <li>Vùng III: 3,860,000 đồng/tháng</li>
          <li>Vùng IV: 3,450,000 đồng/tháng</li>
        </ul>

        <div className="mt-2">
          <div>
            <strong>1. Vùng I, gồm các địa bàn:</strong>
          </div>
          <ul className="list-disc px-6 space-y-1 mt-2">
            <li>
              Các quận và các huyện Gia Lâm, Đông Anh, Sóc Sơn, Thanh Trì,
              Thường Tín, Hoài Đức, Thạch Thất, Quốc Oai, Thanh Oai, Mê Linh,
              Chương Mỹ và thị xã Sơn Tây thuộc thành phố Hà Nội;
            </li>
            <li>
              Các thành phố Hạ Long, Uông Bí, Móng Cái và các thị xã Quảng Yên,
              Đông Triều thuộc tỉnh Quảng Ninh;
            </li>
            <li>
              Các quận và các huyện Thủy Nguyên, An Dương, An Lão, Vĩnh Bảo,
              Tiên Lãng, Cát Hải, Kiến Thụy thuộc thành phố Hải Phòng;
            </li>
            <li>Thành phố Hải Dương thuộc tỉnh Hải Dương;</li>
            <li>
              Các quận, thành phố Thủ Đức và các huyện Củ Chi, Hóc Môn, Bình
              Chánh, Nhà Bè thuộc Thành phố Hồ Chí Minh;
            </li>
            <li>
              Các thành phố Biên Hòa, Long Khánh và các huyện Nhơn Trạch, Long
              Thành, Vĩnh Cửu, Trảng Bom, Xuân Lộc, Thống Nhất thuộc tỉnh Đồng
              Nai;
            </li>
            <li>
              Các thành phố Thủ Dầu Một, Thuận An, Dĩ An, Tân Uyên, Bến Cát và
              các huyện Bàu Bàng, Bắc Tân Uyên, Dầu Tiếng, Phú Giáo thuộc tỉnh
              Bình Dương;
            </li>
            <li>
              Thành phố Vũng Tàu, thị xã Phú Mỹ thuộc tỉnh Bà Rịa - Vũng Tàu;
            </li>
            <li>
              Thành phố Tân An và các huyện Đức Hòa, Bến Lức, Cần Giuộc thuộc
              tỉnh Long An.
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <div>
            <strong>2. Vùng II, gồm các địa bàn:</strong>
          </div>
          <ul className="list-disc px-6 space-y-1 mt-2">
            <li>Các huyện còn lại thuộc thành phố Hà Nội;</li>
            <li>Thành phố Lào Cai thuộc tỉnh Lào Cai;</li>
            <li>
              Các thành phố Thái Nguyên, Sông Công và Phổ Yên thuộc tỉnh Thái
              Nguyên;
            </li>
            <li>Thành phố Hoà Bình và huyện Lương Sơn thuộc tỉnh Hòa Bình;</li>
            <li>Thành phố Việt Trì thuộc tỉnh Phú Thọ;</li>
            <li>
              Thành phố Bắc Giang, thị xã Việt Yên và huyện Yên Dũng thuộc tỉnh
              Bắc Giang;
            </li>
            <li>
              Các thành phố Vĩnh Yên, Phúc Yên và các huyện Bình Xuyên, Yên Lạc
              thuộc tỉnh Vĩnh Phúc;
            </li>
            <li>
              Các thành phố Bắc Ninh, Từ Sơn; các thị xã Thuận Thành, Quế Võ và
              các huyện Tiên Du, Yên Phong, Gia Bình, Lương Tài thuộc tỉnh Bắc
              Ninh;
            </li>
            <li>
              Thành phố Hưng Yên, thị xã Mỹ Hào và các huyện Văn Lâm, Văn Giang,
              Yên Mỹ thuộc tỉnh Hưng Yên;
            </li>
            <li>
              Thành phố Chí Linh, thị xã Kinh Môn và các huyện Cẩm Giàng, Bình
              Giang, Tứ Kỳ, Gia Lộc, Nam Sách, Kim Thành thuộc tỉnh Hải Dương;
            </li>
            <li>Thành phố Cẩm Phả thuộc tỉnh Quảng Ninh;</li>
            <li>Các huyện còn lại thuộc thành phố Hải Phòng;</li>
            <li>Thành phố Thái Bình thuộc tỉnh Thái Bình;</li>
            <li>Thành phố Nam Định và huyện Mỹ Lộc thuộc tỉnh Nam Định;</li>
            <li>Thành phố Ninh Bình thuộc tỉnh Ninh Bình;</li>
            <li>
              Các thành phố Thanh Hóa, Sầm Sơn và các thị xã Bỉm Sơn, Nghi Sơn
              thuộc tỉnh Thanh Hóa;
            </li>
            <li>
              Thành phố Vinh, thị xã Cửa Lò và các huyện Nghi Lộc, Hưng Nguyên
              thuộc tỉnh Nghệ An;
            </li>
            <li>Thành phố Đồng Hới thuộc tỉnh Quảng Bình;</li>
            <li>Thành phố Huế thuộc tỉnh Thừa Thiên Huế;</li>
            <li>Các thành phố Hội An, Tam Kỳ thuộc tỉnh Quảng Nam;</li>
            <li>Các quận, huyện thuộc thành phố Đà Nẵng;</li>
            <li>
              Các thành phố Nha Trang, Cam Ranh và thị xã Ninh Hòa thuộc tỉnh
              Khánh Hòa;
            </li>
            <li>Các thành phố Đà Lạt, Bảo Lộc thuộc tỉnh Lâm Đồng;</li>
            <li>Thành phố Phan Thiết thuộc tỉnh Bình Thuận;</li>
            <li>Huyện Cần Giờ thuộc Thành phố Hồ Chí Minh;</li>
            <li>
              Thành phố Tây Ninh, các thị xã Trảng Bàng, Hòa Thành và huyện Gò
              Dầu thuộc tỉnh Tây Ninh;
            </li>
            <li>Các huyện Định Quán, Tân Phú, Cẩm Mỹ thuộc tỉnh Đồng Nai;</li>
            <li>
              Thành phố Đồng Xoài, thị xã Chơn Thành và huyện Đồng Phú thuộc
              tỉnh Bình Phước;
            </li>
            <li>Thành phố Bà Rịa thuộc tỉnh Bà Rịa - Vũng Tàu;</li>
            <li>
              Các huyện Thủ Thừa, Cần Đước và thị xã Kiến Tường thuộc tỉnh Long
              An;
            </li>
            <li>Thành phố Mỹ Tho và huyện Châu Thành thuộc tỉnh Tiền Giang;</li>
            <li>Thành phố Bến Tre và huyện Châu Thành thuộc tỉnh Bến Tre;</li>
            <li>
              Thành phố Vĩnh Long và thị xã Bình Minh thuộc tỉnh Vĩnh Long;
            </li>
            <li>Các quận thuộc thành phố Cần Thơ;</li>
            <li>
              Các thành phố Rạch Giá, Hà Tiên, Phú Quốc thuộc tỉnh Kiên Giang;
            </li>
            <li>Các thành phố Long Xuyên, Châu Đốc thuộc tỉnh An Giang;</li>
            <li>Thành phố Trà Vinh thuộc tỉnh Trà Vinh;</li>
            <li>Thành phố Sóc Trăng thuộc tỉnh Sóc Trăng;</li>
            <li>Thành phố Bạc Liêu thuộc tỉnh Bạc Liêu;</li>
            <li>Thành phố Cà Mau thuộc tỉnh Cà Mau.</li>
          </ul>
        </div>
        <div className="mt-2">
          <div>
            <strong>3. Vùng III, gồm các địa bàn:</strong>
          </div>
          <ul className="list-disc px-6 space-y-1 mt-2">
            <li>
              Các thành phố trực thuộc tỉnh còn lại (trừ các thành phố trực
              thuộc tỉnh nêu tại vùng I, vùng II);
            </li>
            <li>Thị xã Sa Pa, huyện Bảo Thắng thuộc tỉnh Lào Cai;</li>
            <li>
              Các huyện Phú Bình, Phú Lương, Đồng Hỷ, Đại Từ thuộc tỉnh Thái
              Nguyên;
            </li>
            <li>
              Các huyện Hiệp Hòa, Tân Yên, Lạng Giang thuộc tỉnh Bắc Giang;
            </li>
            <li>
              Các huyện Ninh Giang, Thanh Miện, Thanh Hà thuộc tỉnh Hải Dương;
            </li>
            <li>
              Thị xã Phú Thọ và các huyện Phù Ninh, Lâm Thao, Thanh Ba, Tam Nông
              thuộc tỉnh Phú Thọ;
            </li>
            <li>
              Các huyện Vĩnh Tường, Tam Đảo, Tam Dương, Lập Thạch, Sông Lô thuộc
              tỉnh Vĩnh Phúc;
            </li>
            <li>
              Các huyện Vân Đồn, Hải Hà, Đầm Hà, Tiên Yên thuộc tỉnh Quảng Ninh;
            </li>
            <li>Các huyện còn lại thuộc tỉnh Hưng Yên;</li>
            <li>Các huyện Thái Thụy, Tiền Hải thuộc tỉnh Thái Bình;</li>
            <li>Các huyện còn lại thuộc tỉnh Nam Định;</li>
            <li>Thị xã Duy Tiên và huyện Kim Bảng thuộc tỉnh Hà Nam;</li>
            <li>Các huyện Gia Viễn, Yên Khánh, Hoa Lư thuộc tỉnh Ninh Bình;</li>
            <li>
              Các huyện Đông Sơn, Quảng Xương, Triệu Sơn, Thọ Xuân, Yên Định,
              Vĩnh Lộc, Thiệu Hóa, Hà Trung, Hậu Lộc, Nga Sơn, Hoằng Hóa, Nông
              Cống thuộc tỉnh Thanh Hóa;
            </li>
            <li>
              Các huyện Quỳnh Lưu, Yên Thành, Diễn Châu, Đô Lương, Nam Đàn,
              Nghĩa Đàn và các thị xã Thái Hòa, Hoàng Mai thuộc tỉnh Nghệ An;
            </li>
            <li>Thị xã Kỳ Anh thuộc tỉnh Hà Tĩnh;</li>
            <li>
              Các thị xã Hương Thủy, Hương Trà và các huyện Phú Lộc, Phong Điền,
              Quảng Điền, Phú Vang thuộc tỉnh Thừa Thiên Huế;
            </li>
            <li>
              Thị xã Điện Bàn và các huyện Đại Lộc, Duy Xuyên, Núi Thành, Quế
              Sơn, Thăng Bình, Phú Ninh thuộc tỉnh Quảng Nam;
            </li>
            <li>Các huyện Bình Sơn, Sơn Tịnh thuộc tỉnh Quảng Ngãi;</li>
            <li>Các thị xã Sông Cầu, Đông Hòa thuộc tỉnh Phú Yên;</li>
            <li>
              Các huyện Ninh Hải, Thuận Bắc, Ninh Phước thuộc tỉnh Ninh Thuận;
            </li>
            <li>
              Các huyện Cam Lâm, Diên Khánh, Vạn Ninh thuộc tỉnh Khánh Hòa;
            </li>
            <li>Huyện Đăk Hà thuộc tỉnh Kon Tum;</li>
            <li>Các huyện Đức Trọng, Di Linh thuộc tỉnh Lâm Đồng;</li>
            <li>
              Thị xã La Gi và các huyện Hàm Thuận Bắc, Hàm Thuận Nam thuộc tỉnh
              Bình Thuận;
            </li>
            <li>
              Các thị xã Phước Long, Bình Long và các huyện Hớn Quản, Lộc Ninh,
              Phú Riềng thuộc tỉnh Bình Phước;
            </li>
            <li>Các huyện còn lại thuộc tỉnh Tây Ninh;</li>
            <li>
              Các huyện Long Điền, Đất Đỏ, Xuyên Mộc, Châu Đức, Côn Đảo thuộc
              tỉnh Bà Rịa - Vũng Tàu;
            </li>
            <li>
              Các huyện Đức Huệ, Châu Thành, Tân Trụ, Thạnh Hóa thuộc tỉnh Long
              An;
            </li>
            <li>
              Thị xã Cai Lậy và các huyện Chợ Gạo, Tân Phước thuộc tỉnh Tiền
              Giang;
            </li>
            <li>Các huyện Ba Tri, Bình Đại, Mỏ Cày Nam thuộc tỉnh Bến Tre;</li>
            <li>Các huyện Mang Thít, Long Hồ thuộc tỉnh Vĩnh Long;</li>
            <li>Các huyện thuộc thành phố Cần Thơ;</li>
            <li>
              Các huyện Kiên Lương, Kiên Hải, Châu Thành thuộc tỉnh Kiên Giang;
            </li>
            <li>
              Thị xã Tân Châu và các huyện Châu Phú, Châu Thành, Thoại Sơn thuộc
              tỉnh An Giang;
            </li>
            <li>Các huyện Châu Thành, Châu Thành A thuộc tỉnh Hậu Giang;</li>
            <li>Thị xã Duyên Hải thuộc tỉnh Trà Vinh;</li>
            <li>Thị xã Giá Rai và huyện Hòa Bình thuộc tỉnh Bạc Liêu;</li>
            <li>Các thị xã Vĩnh Châu, Ngã Năm thuộc tỉnh Sóc Trăng;</li>
            <li>
              Các huyện Năm Căn, Cái Nước, U Minh, Trần Văn Thời thuộc tỉnh Cà
              Mau;
            </li>
            <li>
              Các huyện Lệ Thủy, Quảng Ninh, Bố Trạch, Quảng Trạch và thị xã Ba
              Đồn thuộc tỉnh Quảng Bình.
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <div>
            <strong>4. Vùng IV, gồm các địa bàn còn lại</strong>
          </div>
        </div>
      </Modal>
    </div>
  );
}
