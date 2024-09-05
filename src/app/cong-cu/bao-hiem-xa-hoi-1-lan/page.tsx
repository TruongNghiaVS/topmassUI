"use client";

import { months } from "@/mockup-data/data";
import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const options = [
  { label: "Vùng 1", value: "Vùng 1" },
  { label: "Vùng 2", value: "Vùng 2" },
  { label: "Vùng 3", value: "Vùng 3" },
  { label: "Vùng 4", value: "Vùng 4" },
];

interface IInsuranceOneTime {
  month_from: string;
  year_from: string;
  month_to: string;
  year_to: string;
  salary: number;
  status: number;
}

export default function InsuranceOneTime() {
  const [arrData, setArrData] = useState<IInsuranceOneTime[]>([
    {
      month_from: "",
      year_from: "",
      month_to: "",
      year_to: "",
      salary: 0,
      status: 0,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("_____");
  };

  const years = Array.from({ length: 100 }, (_, i) => {
    const item = {
      label: `${new Date().getFullYear() - i}`,
      value: new Date().getFullYear() - i,
    };
    return item;
  });

  const addStage = (value: number) => {
    setArrData([
      ...arrData,
      {
        month_from: "",
        year_from: "",
        month_to: "",
        year_to: "",
        salary: 0,
        status: value,
      },
    ]);
  };

  const removeStage = (value: number) => {
    setArrData(arrData.filter((item, index) => index !== value));
  };

  return (
    <div>
      <div className="p-4 bg-white rounded">
        <div className="text-xs">Công cụ tiện ích</div>
        <div className="mt-2 text-default text-2xl">
          Công cụ tính bảo hiểm 1 lần đơn giản
        </div>
        <div className="mt-4 flex space-x-3">
          <button className="flex-1 py-2 text-white text-center bg-[#F37A20]">
            BHXH bắt buộc
          </button>
          <button className="flex-1 py-2 text-center bg-[#EAEAEA]">
            BHXH tư nguyện
          </button>
          <button className="flex-1 py-2 text-center bg-[#EAEAEA]">
            BHXH bắt buộc và BHXH tự nguyện
          </button>
        </div>
        <div className="mt-4 p-2">
          <form onSubmit={handleSubmit}>
            <div className="overflow-x-auto col-span-2 mt-4">
              <table className="min-w-full text-sm text-left text-gray-500 border">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-2 w-4 font-medium">STT</th>
                    <th className="p-2  font-medium ">Giai đoạn nộp BHXH</th>
                    <th className="p-2 text-right font-medium text-right">
                      Mức lương đóng BHXH
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {arrData.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="p-2">{idx + 1}</td>
                        <td className="p-2">
                          <div className="flex space-x-2 items-center">
                            <div className="flex space-x-2 items-center">
                              <div>Từ</div>
                              <select
                                name={`month_from`}
                                defaultValue={item.month_from}
                                className="p-2 rounded-lg border"
                              >
                                <option value="" disabled>
                                  Chọn tháng
                                </option>
                                {months.map((item) => {
                                  return (
                                    <option value={item.value} key={item.label}>
                                      {item.label}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name={`.year_from`}
                                className="p-2 rounded-lg border"
                                defaultValue={item.year_from}
                              >
                                <option value="" disabled>
                                  Chọn năm
                                </option>
                                {years.map((item) => {
                                  return (
                                    <option value={item.value} key={item.label}>
                                      {item.label}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="flex space-x-2 items-center">
                              <div>đến</div>
                              <select
                                name={`month_to`}
                                defaultValue={item.month_to}
                                className="p-2 rounded-lg border"
                              >
                                <option value="" disabled>
                                  Chọn tháng
                                </option>
                                {months.map((item) => {
                                  return (
                                    <option value={item.value} key={item.label}>
                                      {item.label}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name={`year_to`}
                                defaultValue={item.year_to}
                                className="p-2 rounded-lg border"
                              >
                                <option value="" disabled>
                                  Chọn năm
                                </option>
                                {years.map((item) => {
                                  return (
                                    <option value={item.value} key={item.label}>
                                      {item.label}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex space-x-1 items-center justify-end">
                            {item.status === 0 ? (
                              <div className="inline-flex items-center border rounded-lg px-2">
                                <input
                                  type="number"
                                  name="salary"
                                  defaultValue={item.salary}
                                  min={0}
                                  className="p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                                <div>VNĐ</div>
                              </div>
                            ) : (
                              <div className="italic">
                                (Giai đoạn hưởng thai sản)
                              </div>
                            )}
                            <button
                              type="button"
                              onClick={() => removeStage(idx)}
                            >
                              <TrashIcon className="w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-4 flex space-x-2">
              <button
                className="bg-white border border-default px-3 py-2 rounded text-default "
                type="button"
                onClick={() => addStage(0)}
              >
                + Thêm gia đoạn
              </button>
              <button
                className="bg-white border border-default px-3 py-2 rounded text-default "
                onClick={() => addStage(1)}
                type="button"
              >
                + Giai đoạn thai sản
              </button>
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20] "
                type="submit"
              >
                Tính BHXH
              </button>
            </div>
          </form>
        </div>

        <div className="mt-4 text-default text-2xl">Kết quả</div>
        <div className="p-4 rounded-lg border border-default bg-[#EFEFEF] mt-2">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">Lương gross</div>
              <div>9,800,000</div>
            </div>
            <div>
              <div className="font-medium">Bảo hiểm</div>
              <div>-530,000</div>
            </div>
            <div>
              <div className="font-medium">Thuế TNCN</div>
              <div>-72,000</div>
            </div>
            <div>
              <div className="font-medium">Lương Net</div>
              <div>8,620,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
