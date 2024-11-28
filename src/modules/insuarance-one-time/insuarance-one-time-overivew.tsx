"use client";

import { useState } from "react";
import { InsuranceSecurity } from "./insurance/insurance-security";
import { VoluntarySocialInsurance } from "./insurance/voluntary-social-insurance";
import { VoluntaryCompulsoryInsurance } from "./insurance/voluntary-compulsory-insurance";

export default function InsuranceOneTimeOverview() {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className="p-4 bg-white rounded">
        <div className="text-xs">Công cụ tiện ích</div>
        <div className="mt-2 text-default text-2xl font-bold">
          Công cụ tính bảo hiểm 1 lần đơn giản
        </div>
        <div className="mt-4 flex space-x-3">
          <button
            onClick={() => setActive(1)}
            className={`flex-1 py-2 border rounded text-center ${
              active === 1 && "bg-[#F37A20] text-white"
            } `}
          >
            BHXH bắt buộc
          </button>
          <button
            onClick={() => setActive(2)}
            className={`flex-1 py-2 border rounded text-center ${
              active === 2 && "bg-[#F37A20] text-white"
            } `}
          >
            BHXH tư nguyện
          </button>
          <button
            onClick={() => setActive(3)}
            className={`flex-1 py-2 border rounded text-center ${
              active === 3 && "bg-[#F37A20] text-white"
            } `}
          >
            BHXH bắt buộc và BHXH tự nguyện
          </button>
        </div>

        {active === 1 && <InsuranceSecurity />}
        {active === 2 && <VoluntarySocialInsurance />}
        {active === 3 && <VoluntaryCompulsoryInsurance />}

        <div className="mt-4 text-default text-2xl">Kết quả</div>
        <div className="ml-2 font-medium">
          Tiền BHXH 1 lần được nhận:{" "}
          <span className="text-[#C10000]">8.089.620 đồng</span>
        </div>
        <div className="mt-4 text-default text-2xl">Diễn giải chi tiết</div>
        <div className="mt-2">1. Thời gian tham gia BHXH: 7 tháng</div>
        <div className="mt-2">
          2. Tiền lương đóng BHXH của các giai đoạn tham gia BHXH như sau:
        </div>
        <div className="mt-2">
          - Giai đoạn đóng từ T3/2022 đến T9/2022: Thời gian 7 tháng - Mức tiền
          lương đóng BHXH: 5.100.000 đồng
        </div>
        <div className="mt-2">5.100.000 x 1.03 x 7 = 36.771.000 đồng</div>
        <div className="mt-2">
          - Tổng tiền đóng BHXH = 36.771.000 = 36.771.000 đồng
        </div>
        <div className="mt-2">
          Mức bình quân tiền lương đóng BHXH = Tổng tiền / tổng số tháng =
          5.253.000 đồng
        </div>
        <div className="mt-2">
          3. Mức hưởng BHXH một lần = 22% x Tổng tiền lương đóng BHXH = 22% x
          36.771.000 = 8.089.620 đồng
        </div>
        <div className="mt-2">
          *Lưu ý: BHXH 1 lần đã được tính hệ số trượt giá
        </div>
      </div>
      <div className="mt-4 p-4 rounded bg-white">
        <div className="text-default text-2xl">
          Bảng hệ số trượt giá năm 2024
        </div>
        <div className="mt-4">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                  <table className="min-w-full divide-y  divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr className="divide-x">
                        <th className="p-2 text-center text-xs">Năm</th>
                        <th className="p-2 text-center text-xs">Trước 1945</th>
                        <th className="p-2 text-center text-xs">1995</th>
                        <th className="p-2 text-center text-xs">1996</th>
                        <th className="p-2 text-center text-xs">1997</th>
                        <th className="p-2 text-center text-xs">1998</th>
                        <th className="p-2 text-center text-xs">1999</th>
                        <th className="p-2 text-center text-xs">2000</th>
                        <th className="p-2 text-center text-xs">2001</th>
                        <th className="p-2 text-center text-xs">2002</th>
                        <th className="p-2 text-center text-xs">2003</th>
                        <th className="p-2 text-center text-xs">2004</th>
                        <th className="p-2 text-center text-xs">2005</th>
                        <th className="p-2 text-center text-xs">2006</th>
                        <th className="p-2 text-center text-xs">2007</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 ">
                      <tr className="divide-x">
                        <td className="p-2 text-xs text-center">
                          Mức điều chỉnh
                        </td>
                        <td className="p-2 text-xs text-center">5,43</td>
                        <td className="p-2 text-xs text-center">4,61</td>
                        <td className="p-2 text-xs text-center">4,36</td>
                        <td className="p-2 text-xs text-center">4,22</td>
                        <td className="p-2 text-xs text-center">3,92</td>
                        <td className="p-2 text-xs text-center">3,75</td>
                        <td className="p-2 text-xs text-center">3,82</td>
                        <td className="p-2 text-xs text-center">3,83</td>
                        <td className="p-2 text-xs text-center">3,68</td>
                        <td className="p-2 text-xs text-center">3,57</td>
                        <td className="p-2 text-xs text-center">3,31</td>
                        <td className="p-2 text-xs text-center">3,06</td>
                        <td className="p-2 text-xs text-center">2,85</td>
                        <td className="p-2 text-xs text-center">2,63</td>
                      </tr>

                      <tr className="divide-x">
                        <th className="p-2 text-center text-xs">Năm</th>
                        <th className="p-2 text-center text-xs">2008</th>
                        <th className="p-2 text-center text-xs">2009</th>
                        <th className="p-2 text-center text-xs">2010</th>
                        <th className="p-2 text-center text-xs">2011</th>
                        <th className="p-2 text-center text-xs">2012</th>
                        <th className="p-2 text-center text-xs">2013</th>
                        <th className="p-2 text-center text-xs">2014</th>
                        <th className="p-2 text-center text-xs">2015</th>
                        <th className="p-2 text-center text-xs">2016</th>
                        <th className="p-2 text-center text-xs">2017</th>
                        <th className="p-2 text-center text-xs">2018</th>
                        <th className="p-2 text-center text-xs">2019</th>
                        <th className="p-2 text-center text-xs">2020</th>
                        <th className="p-2 text-center text-xs">2021</th>
                      </tr>

                      <tr className="divide-x">
                        <td className="p-2 text-xs text-center">
                          Mức điều chỉnh
                        </td>
                        <td className="p-2 text-xs text-center">2,14</td>
                        <td className="p-2 text-xs text-center">2</td>
                        <td className="p-2 text-xs text-center">1,83</td>
                        <td className="p-2 text-xs text-center">1,54</td>
                        <td className="p-2 text-xs text-center">1,41</td>
                        <td className="p-2 text-xs text-center">1,33</td>
                        <td className="p-2 text-xs text-center">1,27</td>
                        <td className="p-2 text-xs text-center">1,27</td>
                        <td className="p-2 text-xs text-center">1,23</td>
                        <td className="p-2 text-xs text-center">1,19</td>
                        <td className="p-2 text-xs text-center">1,15</td>
                        <td className="p-2 text-xs text-center">1,12</td>
                        <td className="p-2 text-xs text-center">1,08</td>
                        <td className="p-2 text-xs text-center">1,07</td>
                      </tr>

                      <tr className="divide-x">
                        <th className="p-2 text-center text-xs">Năm</th>
                        <th className="p-2 text-center text-xs">2022</th>
                        <th className="p-2 text-center text-xs">2023</th>
                        <th className="p-2 text-center text-xs">2024</th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                        <th
                          scope="col"
                          className="p-2 text-center text-xs"
                        ></th>
                      </tr>

                      <tr className="divide-x">
                        <td className="p-2 text-xs text-center">
                          Mức điều chỉnh
                        </td>
                        <td className="p-2 text-xs text-center">1,03</td>
                        <td className="p-2 text-xs text-center">1</td>
                        <td className="p-2 text-xs text-center">1</td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                        <td className="p-2 text-xs text-center"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
