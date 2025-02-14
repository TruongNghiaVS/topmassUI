import { months } from "@/mockup-data/data";
import { TrashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import TmSelect from "@/component/hook-form/select";
import TmNumberFormatInput from "@/component/hook-form/custom-input-number";
import numeral from "numeral";
import {
  avgCalculateCountSalary,
  calculateCountSalary,
  calculateInsuranceHoldHouse,
  calculateSalary,
  calculateSumSalary,
  countAllTotalSalary,
  getCoefficient,
  getCountYearToTotalcalcuSalary,
  getDataBefore2014,
  getMonthsInsuranceSupport,
  getStringCountMonth,
  getTotalMonth,
  splitDateRangesByYear,
} from "../coefficient";
import { ISalary, ISalaryBefore2014 } from "./insurance-security";
import { IInsuranceHoldHouse } from "./voluntary-social-insurance";
import { toast } from "react-toastify";
import { IInsuranceSecurity } from "@/interface/interface";

export const VoluntaryCompulsoryInsurance = () => {
  const years = Array.from({ length: 100 }, (_, i) => {
    const item = {
      label: `${new Date().getFullYear() - i}`,
      value: new Date().getFullYear() - i,
    };
    return item;
  });

  const schema = yup.object().shape({
    datas: yup
      .array()
      .of(
        yup.object().shape({
          month_from: yup.number(),
          year_from: yup.number(),
          month_to: yup.number(),
          year_to: yup.number(),
          salary: yup.number(),
          status: yup.number(),
          type: yup.number(),
        })
      )
      .min(1, "Phải có ít nhất đoạn thời gian")
      .required("Phải có ít nhất đoạn thời gian"),
  });

  const [dataInsurance, setDataInsurance] = useState<ISalary[]>([]);
  const [dataHoldHouse, setDataHoldHouse] = useState<IInsuranceHoldHouse>({
    data2018: {
      poorHouseholds2018: 0,
      households2018: 0,
      other2018: 0,
    },
    data2022: {
      poorHouseholds2022: 0,
      households2022: 0,
      other2022: 0,
    },
  });
  const [dataInsuranceBefore2014, setDataInsuranceBefore2014] = useState<
    ISalaryBefore2014
  >({
    count: 0,
    items: [],
  });
  const [dataInsuranceAfter2014, setDataInsuranceAfter2014] = useState<
    ISalary[]
  >([]);

  const { control, handleSubmit, getValues } = useForm<IInsuranceSecurity>({
    resolver: yupResolver(schema),
    defaultValues: {
      datas: [
        {
          month_from: 1,
          year_from: new Date().getFullYear(),
          month_to: 1,
          year_to: new Date().getFullYear(),
          salary: 0,
          status: 0,
          type: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "datas",
  });

  const addStage = (status: number) => {
    append({
      month_from: 1,
      year_from: new Date().getFullYear(),
      month_to: 1,
      year_to: new Date().getFullYear(),
      salary: 0,
      status,
      type: 0,
    });
  };

  const onSubmit: SubmitHandler<IInsuranceSecurity> = (data) => {
    if (
      data.datas.some(
        (item) =>
          new Date(item.year_from || 1900, item.month_from || 1, 1) >
          new Date(item.year_to || 1900, item.month_to || 1, 1)
      )
    ) {
      toast.error("Thời gian từ phải nhỏ hơn hoặc bằng thời gian đến.");
      return;
    }

    const ranges: ISalary[] = [];
    data.datas.forEach((item, index) => {
      const range = splitDateRangesByYear(
        `${item.year_from || 1900}-${item.month_from || 1}-01`,
        `${item.year_to || 1900}-${item.month_to || 1}-01`,
        item.status && item.status === 1
          ? data.datas[index - 1].salary || 0
          : item.salary || 0,
        item.status || 0,
        item.type || 0
      );
      ranges.push(...range);
    });

    setDataInsurance(ranges);
    const resBefore2014 = getDataBefore2014(ranges);
    if (resBefore2014) {
      setDataInsuranceBefore2014(resBefore2014);
    }
    setDataInsuranceAfter2014(
      ranges.filter(
        (item) =>
          !resBefore2014.items.some(
            (itemBefore: ISalary) =>
              itemBefore.start === item.start && itemBefore.end === item.end
          )
      )
    );
    const resHoldHouse = getMonthsInsuranceSupport(
      ranges.filter((item) => item.status === 2)
    );
    setDataHoldHouse(resHoldHouse);
  };

  return (
    <div>
      <div className="mt-4 p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {fields.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2">{index + 1}</td>
                      <td className="p-2">
                        <div className="flex space-x-2 items-center">
                          <div className="flex space-x-2 items-center">
                            <div>Từ</div>
                            <TmSelect
                              control={control}
                              name={`datas.${index}.month_from`}
                              className="p-2 rounded-lg border min-w-[100px]"
                              placeholder="Tháng"
                              options={months}
                            />
                            <TmSelect
                              name={`datas.${index}.year_from`}
                              control={control}
                              className="p-2 rounded-lg border min-w-[100px]"
                              placeholder="Năm"
                              options={years}
                            />
                          </div>
                          <div className="flex space-x-2 items-center">
                            <div>đến</div>
                            <TmSelect
                              name={`datas.${index}.month_to`}
                              control={control}
                              placeholder="Tháng"
                              options={months}
                              className="p-2 rounded-lg border min-w-[100px]"
                            />

                            <TmSelect
                              name={`datas.${index}.year_to`}
                              control={control}
                              options={years}
                              placeholder="Năm"
                              className="p-2 rounded-lg border min-w-[100px]"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex space-x-1 items-center justify-end whitespace-nowrap">
                          {(item.status === 0 || item.status === 2) && (
                            <TmNumberFormatInput
                              name={`datas.${index}.salary`}
                              control={control}
                              min={0}
                              afterIcon={"VND"}
                            />
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
                            <TmSelect
                              name={`datas.${index}.type`}
                              control={control}
                              className="p-2 rounded-lg border min-w-[150px]"
                              options={[
                                { label: "Đối tượng khác", value: 0 },
                                { label: "Hộ nghèo", value: 1 },
                                { label: "Hộ cận nghèo", value: 2 },
                              ]}
                            />
                          ) : (
                            <div></div>
                          )}

                          <button
                            type="button"
                            onClick={() => {
                              remove(index);
                            }}
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
              + Thêm BHXH bắt buộc
            </button>
            <button
              className="bg-white border border-default px-3 py-2 rounded text-default "
              type="button"
              onClick={() => addStage(1)}
            >
              + Giai đoạn thai sản
            </button>
            <button
              className="bg-white border border-default px-3 py-2 rounded text-default "
              type="button"
              onClick={() => addStage(2)}
            >
              + Thêm BHXH tự nguyện
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
      <div className="ml-2 font-medium">
        Tiền BHXH 1 lần được nhận:{" "}
        <span className="text-[#C10000]">
          {numeral(
            countAllTotalSalary(
              dataInsuranceBefore2014,
              dataInsuranceAfter2014,
              dataInsurance
            ) -
              calculateInsuranceHoldHouse(
                dataHoldHouse.data2022.poorHouseholds2022,
                dataHoldHouse.data2022.households2022,
                dataHoldHouse.data2022.other2022,
                1500000
              ) -
              calculateInsuranceHoldHouse(
                dataHoldHouse.data2018.poorHouseholds2018,
                dataHoldHouse.data2018.households2018,
                dataHoldHouse.data2018.other2018,
                700000
              )
          ).format("0,0")}{" "}
          đồng
        </span>
      </div>
      <div className="mt-4 text-default text-2xl">Diễn giải chi tiết</div>
      <div className="mt-2">
        1. Thời gian tham gia BHXH:{" "}
        {getStringCountMonth(dataInsurance.map((item) => item.countMonth))}
      </div>
      <div className="mt-2">
        2. Tiền lương đóng BHXH của các giai đoạn tham gia BHXH như sau:
      </div>
      {dataInsurance.map((item, index) => {
        return (
          <div className="ml-6" key={index}>
            <div className="mt-2">
              - Giai đoạn đóng từ {item.start} đến {item.end}: Thời gian{" "}
              {item.countMonth} tháng -{" "}
              {item.status === 1
                ? "Thai sản"
                : `Mức tiền lương đóng BHXH: ${numeral(item.salary).format(
                    "0,0"
                  )} đồng`}
            </div>
            <div className="mt-2">
              {numeral(item.salary).format("0,0")} x {getCoefficient(item.year)}{" "}
              x {item.countMonth} =
              {numeral(
                calculateSalary(item.salary, item.countMonth, item.year)
              ).format("0,0")}{" "}
              đồng
            </div>
          </div>
        );
      })}
      <div className="mt-3">
        - Tổng tiền đóng BHXH ={" "}
        {numeral(calculateCountSalary(dataInsurance)).format("0,0")} đồng
      </div>
      <div className="mt-2">
        Mức bình quân tiền lương đóng BHXH = Tổng tiền / tổng số tháng =
        {numeral(avgCalculateCountSalary(dataInsurance)).format("0,0")} đồng
      </div>
      <div className="my-3">3. Mức hưởng BHXH một lần:</div>

      {dataInsuranceBefore2014.count > 0 ? (
        <div className="ml-4">
          <div className="mt-2">
            Mức hưởng BHXH một lần đối với thời gian đóng BHXH trước 2014:
          </div>
          <div className="mt-2 ml-4">
            {numeral(avgCalculateCountSalary(dataInsurance)).format("0,0")} *{" "}
            {dataInsuranceBefore2014.count} * 1.5 ={" "}
            {numeral(
              calculateSumSalary(
                avgCalculateCountSalary(dataInsurance),
                1.5,
                dataInsuranceBefore2014.count
              )
            ).format("0,0")}{" "}
            đồng
          </div>
        </div>
      ) : (
        ""
      )}
      {dataInsuranceBefore2014.count > 0 ||
      (dataInsuranceAfter2014.length === 1 &&
        dataInsuranceAfter2014[0].countMonth === 12) ||
      (dataInsuranceAfter2014.length > 1 &&
        getTotalMonth(dataInsuranceAfter2014) > 12) ? (
        <div className="ml-4">
          <div className="mt-2">
            Mức hưởng BHXH một lần đối với thời gian đóng BHXH từ 2014 trở đi
          </div>
          <div className="mt-2">
            (Số tháng lẻ đóng trước năm 2014 được chuyển sang giai đoạn từ năm
            2014 trở đi)
          </div>
          <div className="mt-2 ml-4">
            {numeral(avgCalculateCountSalary(dataInsurance)).format("0,0")} *{" "}
            {getCountYearToTotalcalcuSalary(dataInsuranceAfter2014)} * 2 ={" "}
            {numeral(
              calculateSumSalary(
                avgCalculateCountSalary(dataInsurance),
                2,
                getCountYearToTotalcalcuSalary(dataInsuranceAfter2014)
              )
            ).format("0,0")}{" "}
            đồng
          </div>
        </div>
      ) : (
        ""
      )}
      {(dataInsuranceAfter2014.length === 1 &&
        dataInsuranceAfter2014[0].countMonth < 12 &&
        dataInsuranceBefore2014.count === 0) ||
      (dataInsuranceAfter2014.length > 1 &&
        getTotalMonth(dataInsuranceAfter2014) < 12) ? (
        <div className="ml-4">
          <div className="mt-2">
            Mức hưởng BHXH một lần đối với thời gian đóng BHXH từ 2014 trở đi
          </div>
          <div className="mt-2">
            (Số tháng lẻ đóng trước năm 2014 được chuyển sang giai đoạn từ năm
            2014 trở đi)
          </div>
          <div className="mt-2 ml-4">
            {numeral(calculateCountSalary(dataInsurance)).format("0,0")} * 0.22
            ={" "}
            {numeral(
              calculateSumSalary(calculateCountSalary(dataInsurance), 0.22, 1)
            ).format("0,0")}{" "}
            đồng
          </div>
        </div>
      ) : (
        ""
      )}

      {dataHoldHouse.data2018.households2018 > 0 ||
      dataHoldHouse.data2018.poorHouseholds2018 > 0 ||
      dataHoldHouse.data2018.other2018 > 0 ? (
        <div>
          <div className="mt-2">
            Số tiền Nhà nước hỗ trợ đóng BHXH tự nguyện từ tháng 01/2018 - hết
            tháng 12/2021
          </div>
          <div className="ml-8 my-2">
            {dataHoldHouse.data2018.poorHouseholds2018 > 0 ? (
              <div>
                0.22 x 700,000 (VNĐ) x 30% x
                {dataHoldHouse.data2018.poorHouseholds2018} tháng{" "}
              </div>
            ) : (
              ""
            )}
            {dataHoldHouse.data2018.households2018 > 0 ? (
              <div>
                0.22 x 700,000 (VNĐ) x 25% x
                {dataHoldHouse.data2018.households2018} tháng{" "}
              </div>
            ) : (
              ""
            )}
            {dataHoldHouse.data2018.other2018 > 0 ? (
              <div>
                0.22 x 700,000 (VNĐ) x 10% x {dataHoldHouse.data2018.other2018}{" "}
                tháng{" "}
              </div>
            ) : (
              ""
            )}
            <div>
              ={" "}
              {numeral(
                calculateInsuranceHoldHouse(
                  dataHoldHouse.data2018.poorHouseholds2018,
                  dataHoldHouse.data2018.households2018,
                  dataHoldHouse.data2018.other2018,
                  700000
                )
              ).format("0,0")}{" "}
              đồng
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {dataHoldHouse.data2022.households2022 > 0 ||
      dataHoldHouse.data2022.poorHouseholds2022 > 0 ||
      dataHoldHouse.data2022.other2022 > 0 ? (
        <div>
          <div className="mt-2">
            Số tiền Nhà nước hỗ trợ đóng BHXH tự nguyện từ tháng 01/2022 - hết
            tháng 12/2021
          </div>
          <div className="ml-8 my-2">
            {dataHoldHouse.data2022.poorHouseholds2022 > 0 ? (
              <div>
                0.22 x 700,000 (VNĐ) x 30% x
                {dataHoldHouse.data2022.poorHouseholds2022} tháng{" "}
              </div>
            ) : (
              ""
            )}
            {dataHoldHouse.data2022.households2022 > 0 ? (
              <div>
                0.22 x 700,000 (VNĐ) x 25% x
                {dataHoldHouse.data2022.households2022} tháng{" "}
              </div>
            ) : (
              ""
            )}
            {dataHoldHouse.data2022.other2022 > 0 ? (
              <div>
                0.22 x 700,000 (VNĐ) x 10% x {dataHoldHouse.data2022.other2022}{" "}
                tháng{" "}
              </div>
            ) : (
              ""
            )}
            <div>
              ={" "}
              {numeral(
                calculateInsuranceHoldHouse(
                  dataHoldHouse.data2022.poorHouseholds2022,
                  dataHoldHouse.data2022.households2022,
                  dataHoldHouse.data2022.other2022,
                  1500000
                )
              ).format("0,0")}{" "}
              đồng
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="mt-2">
        Tổng số tiền nhà nước hỗ trợ đóng BHXH ={" "}
        {numeral(
          calculateInsuranceHoldHouse(
            dataHoldHouse.data2022.poorHouseholds2022,
            dataHoldHouse.data2022.households2022,
            dataHoldHouse.data2022.other2022,
            1500000
          ) +
            calculateInsuranceHoldHouse(
              dataHoldHouse.data2018.poorHouseholds2018,
              dataHoldHouse.data2018.households2018,
              dataHoldHouse.data2018.other2018,
              700000
            )
        ).format("0,0")}{" "}
        đồng
      </div>
      <div className="mt-2 ml-4">
        *Lưu ý: BHXH 1 lần đã được tính hệ số trượt giá
      </div>
    </div>
  );
};
