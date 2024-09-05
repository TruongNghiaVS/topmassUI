"use client";

import {
  ArrowLeftIcon,
  ArrowsRightLeftIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

const options = [
  { label: "Vùng 1", value: "Vùng 1" },
  { label: "Vùng 2", value: "Vùng 2" },
  { label: "Vùng 3", value: "Vùng 3" },
  { label: "Vùng 4", value: "Vùng 4" },
];

export default function PersonalIncome() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("_____");
  };

  return (
    <div>
      <div className="p-4 bg-white rounded">
        <div className="text-xs">Công cụ tiện ích</div>
        <div className="mt-2 text-default text-2xl">
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
            Lương cơ sở: <span className="text-default">1,800,000</span>
          </div>
          <div>
            Giảm trừ gia cảnh bản thân:{" "}
            <span className="text-default">1,800,000</span>
          </div>
          <div>
            Người phụ thuộc: <span className="text-default">4,400,000</span>
          </div>
        </div>
        <div className="mt-4 text-default text-2xl flex space-x-2 items-center">
          Tính lương Gross <ArrowsRightLeftIcon className="w-4" /> Net
        </div>
        <div className="mt-4 p-2">
          <form onSubmit={handleSubmit}>
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
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Vùng
                </div>
              </div>
              <div className="col-span-3">
                <select name="zone" className="!w-auto p-2 border rounded-md">
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
              <div className="col-span-1">
                <div className="inline-block text-white bg-[#F37A20] px-2 py-1 rounded-lg">
                  Số người phụ thuộc
                </div>
              </div>
              <div className="col-span-3">
                <div className="inline-flex items-center border rounded-lg px-2">
                  <UserIcon className="w-5 text-default" />
                  <input
                    type="number"
                    name="people"
                    min={0}
                    className="border-0 p-2 w-full focus-visible:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div>Người</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 flex justify-center space-x-4">
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20] flex space-x-2"
                type="submit"
              >
                GROSS <ArrowLeftIcon className="w-4" /> NET
              </button>
              <button
                className="text-white px-3 py-2 rounded bg-[#F37A20] flex space-x-2"
                type="button"
              >
                NET <ArrowLeftIcon className="w-4" /> GROSSS
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
                  <td className="text-right p-4">9,800,000</td>
                </tr>
                <tr>
                  <td className="p-4">BHXH (8%)</td>
                  <td className="text-right p-4">-784,000</td>
                </tr>
                <tr>
                  <td className="p-4">BHYT (1.5%)</td>
                  <td className="text-right p-4">-147,000</td>
                </tr>
                <tr>
                  <td className="p-4">BHTN (1%)</td>
                  <td className="text-right p-4">-98,000</td>
                </tr>
                <tr>
                  <td className="p-4">Thu nhập trước thuế</td>
                  <td className="text-right p-4">8,771,000</td>
                </tr>
                <tr>
                  <td className="p-4">Giảm trừ gia cảnh cá nhân</td>
                  <td className="text-right p-4">-11,000,000</td>
                </tr>
                <tr>
                  <td className="p-4">Giảm trừ gia cảnh người phụ thuộc</td>
                  <td className="text-right p-4">-0</td>
                </tr>
                <tr>
                  <td className="p-4">Thu nhập chịu thuế</td>
                  <td className="text-right p-4">-0</td>
                </tr>
                <tr>
                  <td className="p-4">Thuế thu nhập cá nhân</td>
                  <td className="text-right p-4">-0</td>
                </tr>
                <tr>
                  <td className="p-4 text-default">Lương Net</td>
                  <td className="text-right p-4">8,771,000</td>
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
