import TmNumberFormatInput from "@/component/hook-form/custom-input-number";
import TmSelect from "@/component/hook-form/select";
import { IInsuranceSecurity } from "@/interface/interface";
import { months } from "@/mockup-data/data";
import { TrashIcon } from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import duration from "dayjs/plugin/duration";
import { useState } from "react";
import {
  avgCalculateCountSalary,
  calculateCountSalary,
  calculateSalary,
  calculateSumSalary,
  countAllTotalSalary,
  getCoefficient,
  getCountYearToTotalcalcuSalary,
  getDataBefore2014,
  getStringCountMonth,
  getTotalMonth,
  splitDateRangesByYear,
} from "../coefficient";
import numeral from "numeral";
dayjs.extend(duration);

export interface ISalary {
  start: string;
  end: string;
  salary: number;
  status: number;
  year: number;
  countMonth: number;
}

export interface ISalaryBefore2014 {
  count: number;
  items: ISalary[];
}

export const InsuranceSecurity = () => {
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
        })
      )
      .min(1, "Phải có ít nhất đoạn thời gian")
      .required("Phải có ít nhất đoạn thời gian"),
  });

  const [dataInsurance, setDataInsurance] = useState<ISalary[]>([]);
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
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "datas",
  });

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

    let year = 1900;
    let month = 1;
    if (
      data.datas.some((item, index) => {
        if (
          item.status &&
          item.status === 1 &&
          new Date(item.year_from || 1900, item.month_from || 1, 1) <=
            new Date(
              data.datas[index - 1].year_to || 1900,
              data.datas[index - 1].month_to || 1,
              1
            )
        ) {
          year = data.datas[index - 1].year_to || 1900;
          month = data.datas[index - 1].month_to || 1;
          return true;
        }
      })
    ) {
      toast.error(
        `Thời gian không hợp lệ, vui lòng chọn thời gian thai sản lớn hơn ${dayjs(
          new Date(year, month, 1)
        ).format("YYYY-MM")}`
      );
      return;
    }

    if (
      data.datas.some(
        (item) =>
          item.status &&
          item.status === 1 &&
          ((item.year_to || 1900) - (item.year_from || 1900)) * 12 +
            ((item.month_to || 1) - (item.month_from || 1)) <
            4
      )
    ) {
      toast.error("Thời gian thai sản phải lớn hơn hoặc bằng 4");
      return;
    }

    if (
      data.datas.some(
        (item) =>
          item.status &&
          item.status === 1 &&
          ((item.year_to || 1900) - (item.year_from || 1900)) * 12 +
            ((item.month_to || 1) - (item.month_from || 1)) >
            6
      )
    ) {
      toast.error("Thời gian thai sản phải nhỏ hơn hoặc bằng 6");
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
        item.status || 0
      );
      console.log(range);
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
  };

  const years = Array.from({ length: 100 }, (_, i) => {
    const item = {
      label: `${new Date().getFullYear() - i}`,
      value: new Date().getFullYear() - i,
    };
    return item;
  });

  const addStage = (value: number) => {
    const datas = getValues("datas");
    if (
      datas &&
      datas.length > 0 &&
      datas[datas.length - 1].status === 1 &&
      value === 1
    ) {
      toast.error(
        "Quý khách vui lòng thêm giai đoạn nộp BHXH trước giai đoạn thai sản."
      );
    } else if (datas.length === 0 && value === 1) {
      toast.error(
        "Quý khách vui lòng thêm giai đoạn nộp BHXH trước giai đoạn thai sản."
      );
    } else {
      append({
        month_from: 1,
        year_from: new Date().getFullYear(),
        month_to: 1,
        year_to: new Date().getFullYear(),
        salary: 0,
        status: value,
      });
    }
  };

  return (
    <div>
      <div className="mt-4 p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-auto col-span-2 mt-4">
            <table className="min-w-full text- border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-2 w-4 font-medium w-4">STT</th>
                  <th className="p-2  font-medium ">Giai đoạn nộp BHXH</th>
                  <th className="p-2 text-right font-medium text-right">
                    Mức lương đóng BHXH
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fields.map((field, index) => {
                  return (
                    <tr key={index}>
                      <td className="p-2 w-4">{index + 1}</td>
                      <td className="p-2">
                        <div className="flex space-x-2 items-center">
                          <div className="flex space-x-2 items-center">
                            <div>Từ</div>
                            <TmSelect
                              control={control}
                              name={`datas.${index}.month_from`}
                              className="p-2 rounded-lg border"
                              placeholder="Tháng"
                              options={months}
                            />
                            <TmSelect
                              name={`datas.${index}.year_from`}
                              control={control}
                              className="p-2 rounded-lg border"
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
                              className="p-2 rounded-lg border"
                            />

                            <TmSelect
                              name={`datas.${index}.year_to`}
                              control={control}
                              options={years}
                              placeholder="Năm"
                              className="p-2 rounded-lg border"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex space-x-1 items-center justify-end">
                          {field.status === 0 ? (
                            <TmNumberFormatInput
                              name={`datas.${index}.salary`}
                              control={control}
                              min={0}
                              afterIcon={"VND"}
                            />
                          ) : (
                            <div className="italic">
                              (Giai đoạn hưởng thai sản)
                            </div>
                          )}
                          <button type="button" onClick={() => remove(index)}>
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
      <div className="ml-2 font-medium">
        Tiền BHXH 1 lần được nhận:{" "}
        <span className="text-[#C10000]">
          {numeral(
            countAllTotalSalary(
              dataInsuranceBefore2014,
              dataInsuranceAfter2014,
              dataInsurance
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
      <div className="mt-2 ml-4">
        *Lưu ý: BHXH 1 lần đã được tính hệ số trượt giá
      </div>
    </div>
  );
};
