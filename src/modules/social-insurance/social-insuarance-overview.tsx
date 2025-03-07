"use client";

import {
  ArrowLeftIcon,
  ArrowsRightLeftIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

const options = [
  { label: "Vùng 1", value: "Vùng 1" },
  { label: "Vùng 2", value: "Vùng 2" },
  { label: "Vùng 3", value: "Vùng 3" },
  { label: "Vùng 4", value: "Vùng 4" },
];

export default function SocialInsuranceOverview() {
  const [active, setActive] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="p-4 bg-white rounded">
        <div className="text-xs">Công cụ tiện ích</div>
        <div className="mt-2 text-default text-2xl font-bold">
          Công cụ tính Bảo hiểm thất nghiệp
        </div>
        <div className="mt-2">
          Bảo hiểm thất nghiệp (BHTN) được tính dựa trên thời gian đã đóng BHXH
          để xác định số tiền mà người lao động sẽ nhận được khi thất nghiệp. 
          Công cụ tính của Topmass sẽ giúp bạn kiểm tra số tiền bạn nhận được.
        </div>
        <div className="mt-8 inline-block px-4 py-1 bg-[#F37A20]  text-white rounded">
          Mức đóng bảo hiểm
        </div>
        <div className="flex space-x-3 mt-2 font-medium">
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="radio"
              className="accent-default"
              value={active}
              checked={active === 0}
              onChange={() => setActive(0)}
            />
            <div>
              Không thay đổi trong 6 tháng gần nhất trước khi thất nghiệp
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <input
              type="radio"
              className="accent-default"
              value={active}
              checked={active === 1}
              onChange={() => setActive(1)}
            />
            <div>Thay đổi trong tháng gần nhất trước khi thất nghiệp</div>
          </div>
        </div>
        <div className="mt-4 p-2">
          <form onSubmit={handleSubmit}>
            {active === 0 ? (
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                  <div className=""></div>
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
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <div className="font-medium">BHTN tháng 1:</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <input
                      type="number"
                      name="other_salary"
                      min={0}
                      className="border-0 p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">BHTN tháng 2:</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <input
                      type="number"
                      name="other_salary"
                      min={0}
                      className="border-0 p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">BHTN tháng 3:</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <input
                      type="number"
                      name="other_salary"
                      min={0}
                      className="border-0 p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">BHTN tháng 4:</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <input
                      type="number"
                      name="other_salary"
                      min={0}
                      className="border-0 p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">BHTN tháng 5:</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <input
                      type="number"
                      name="other_salary"
                      min={0}
                      className="border-0 p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">BHTN tháng 6:</div>
                  <div className="inline-flex items-center border rounded-lg px-2">
                    <input
                      type="number"
                      name="other_salary"
                      min={0}
                      className="border-0 p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <div>VNĐ</div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex space-x-2 mt-4 items-center">
              <div className="px-4 py-1 text-white bg-[#F37A20] text-white font-medium rounded">
                <div className="">Tổng thời gian đóng BHTN chưa hưởng</div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center border rounded-lg px-2">
                  <input
                    type="number"
                    name="salary"
                    min={0}
                    defaultValue={0}
                    className="p-2 rounded-md w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div>Tháng</div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <div className="flex-auto w-64">
                <div className=" inline-block px-4 py-1 text-white bg-[#F37A20] text-white font-medium rounded ">
                  Chế độ tiền lương
                </div>
              </div>
              <div className="flex-auto w-32">
                <div className="inline-block px-4 py-1 text-white bg-[#F37A20] text-white font-medium rounded ">
                  Vùng
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <div className="flex-auto w-64">
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="radio"
                    className="accent-default"
                    name="type_salary"
                  />
                  <div>Nhà nước</div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <input
                    type="radio"
                    className="accent-default"
                    name="type_salary"
                  />
                  <div>Tư nhân</div>
                </div>
              </div>
              <div className="flex-auto w-32">
                <select
                  name="zone"
                  className="!w-auto p-2 border rounded-md w-full"
                >
                  <option value="" disabled>
                    Chọn vùng
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-center mt-8 flex justify-center space-x-4">
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20]"
                type="submit"
              >
                Tính BHTN
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4 text-default text-2xl">Kết quả</div>
        <div className="overflow-x-auto col-span-2 mt-4">
          <table className="min-w-full text-sm text-left text-gray-500 border">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-4 font-medium">Danh mục</th>
                <th className="p-4 font-medium text-right">Thông tin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="text-default">
                <td className="p-4 text-[#F37A20] ">Tiền lương đóng BHTN</td>
                <td className="text-right p-4 whitespace-nowrap text-[#F37A20]">
                  9,800,000
                </td>
              </tr>
              <tr>
                <td className="p-4">Thời gian đóng BHTN chưa hưởng</td>
                <td className="text-right p-4 whitespace-nowrap">1 tháng</td>
              </tr>
              <tr>
                <td className="p-4">Chế độ tiền lương</td>
                <td className="text-right p-4 whitespace-nowrap">Nhà nước</td>
              </tr>
              <tr>
                <td className="p-4">Số Tháng hưởng BHTN </td>
                <td className="text-right p-4 whitespace-nowrap text-default">
                  Không được hưởng
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-default text-xl ">Diễn giải chi tiêt</div>
        <div className="overflow-x-auto col-span-2 mt-4">
          <table className="min-w-full text-sm text-left text-gray-500 border">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-4  font-medium">(1) Tiền lương đóng BHTN </td>
                <td className="p-4  font-medium text-right">15.000.000 đồng</td>
              </tr>
              <tr className="text-default">
                <td className="p-4">(2) Lương tối thiểu vùng </td>
                <td className="text-right p-4 whitespace-nowrap">
                  4.960.000 đồng
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  (3) Mức lương tháng được đóng BHTN tối đa (=20*(2)){" "}
                </td>
                <td className="text-right p-4 whitespace-nowrap">
                  99.200.000 đồng
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  (4) Mức lương tháng áp dụng tính BHTN
                  <div className="text-xs">
                    (Không vượt quá mức lương tháng đóng BHTN tối đa (3))
                  </div>
                </td>
                <td className="text-right p-4 whitespace-nowrap">
                  15.000.000 đồng
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  (5) Mức hưởng trợ cấp thất nghiệp hàng tháng tối đa ( = 5 *
                  (2)){" "}
                </td>
                <td className="text-right p-4 whitespace-nowrap">
                  24.800.000 đồng
                </td>
              </tr>
              <tr>
                <td className="p-4">(6) Thời gian đóng BHTN chưa hưởng</td>
                <td className="text-right p-4 whitespace-nowrap">12 tháng</td>
              </tr>
              <tr>
                <td className="p-4">(7) Chế độ lương</td>
                <td className="text-right p-4 whitespace-nowrap">Tư nhân</td>
              </tr>
              <tr>
                <td className="p-4">
                  (8) Mức trợ cấp hàng tháng theo mức lương áp dụng (= 0.6 * Mức
                  lương tháng áp dụng tính BHTN (4)){" "}
                </td>
                <td className="text-right p-4 whitespace-nowrap">
                  9.000.000 đồng
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  (9) Mức hưởng BHTN hàng tháng thực nhận (Không vượt quá mức
                  hưởng trợ cấp thất nghiệp hàng tháng tối đa (5)){" "}
                </td>
                <td className="text-right p-4 whitespace-nowrap">
                  9.000.000 đồng
                </td>
              </tr>
              <tr>
                <td className="p-4">(10) Số tháng hưởng BHTN</td>
                <td className="text-right p-4 whitespace-nowrap">3 tháng</td>
              </tr>
              <tr>
                <td className="p-4 text-default">
                  (11) Số tháng đóng BHTN được bảo lưu cho lần hưởng sau{" "}
                </td>
                <td className="text-right p-4 whitespace-nowrap">0 tháng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
