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
dayjs.extend(duration);

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
    </div>
  );
};
