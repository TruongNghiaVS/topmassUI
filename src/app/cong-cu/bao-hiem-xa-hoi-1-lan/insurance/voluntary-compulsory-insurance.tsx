import {
  IInsuranceOneTime,
  IVoluntaryCompulsoryInsurance,
} from "@/interface/interface";
import { months } from "@/mockup-data/data";
import { TrashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const VoluntaryCompulsoryInsurance = () => {
  const [arrData, setArrData] = useState<IVoluntaryCompulsoryInsurance[]>([
    {
      month_from: "",
      year_from: "",
      month_to: "",
      year_to: "",
      salary: 0,
      status: 0,
      object: 0,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        object: 0,
      },
    ]);
  };

  const removeStage = (value: number) => {
    setArrData(arrData.filter((item, index) => index !== value));
  };

  return (
    <div>
      <div className="mt-4 p-2">
        <form onSubmit={handleSubmit}>
          <div className="overflow-x-auto col-span-2 mt-4">
            <table className="min-w-full text- border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-2 whitespace-nowrap w-4 font-medium">STT</th>
                  <th className="p-2 whitespace-nowrap  font-medium ">
                    Giai đoạn nộp BHXH
                  </th>
                  <th className="p-2 whitespace-nowrap text-right font-medium text-right">
                    Mức lương đóng BHXH
                  </th>
                  <th className="p-2 whitespace-nowrap text-right font-medium text-right">
                    Đối tượng tham gia
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
                          {item.status === 0 && (
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
                          )}
                          {item.status === 1 && (
                            <div className="italic">
                              (Giai đoạn hưởng thai sản)
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex space-x-1 items-center justify-end">
                          {item.status === 2 ? (
                            <select
                              name={`object`}
                              defaultValue={item.object}
                              className="p-2 rounded-lg border"
                            >
                              <option value={0} disabled>
                                Đối tượng khác
                              </option>
                              <option value={1} disabled>
                                Hộ nghèo
                              </option>
                              <option value={2} disabled>
                                Hộ cận nghèo
                              </option>
                            </select>
                          ) : (
                            <div></div>
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
              className="bg-white border border-default px-3 py-2 rounded text-default "
              onClick={() => addStage(2)}
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
    </div>
  );
};
