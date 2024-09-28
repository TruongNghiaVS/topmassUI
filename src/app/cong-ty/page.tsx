"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { IFormSearchDetail } from "../viec-lam/[id]/search-detail";
import TmInput from "@/component/hook-form/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { InfomationCompany } from "./infomation-company";
import { Description } from "@/component/description";
import { TitleCustom } from "@/component/custom-title";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GET_ALL_COMPANY } from "@/utils/api-url";
import useSWR from "swr";
import { fetcher } from "@/utils/axios";
import { ICompanyItemData } from "../../interface/interface";
import { getToken } from "@/utils/token";
import { useState } from "react";
import { PopupLoginDetailJob } from "../viec-lam/[id]/popup-login-detail-job";
import { useLoading } from "../context/loading";

export default function CompanyPage() {
  const [key, setKey] = useState("");
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const schema = yup.object().shape({
    key: yup.string(),
  });
  const { handleSubmit, control } = useForm<IFormSearchDetail>({
    resolver: yupResolver(schema),
    defaultValues: {
      key: "",
    },
  });
  const { data: DatallCompany, error: ErrorDataAllCompany, mutate } = useSWR(
    `${GET_ALL_COMPANY}?KeyWord=${key}`,
    fetcher
  );
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    const token = getToken();
    if (token) {
    } else {
      setIsOpenModalLogin(true);
    }
  };

  const { setLoading } = useLoading();

  const onSubmit: SubmitHandler<IFormSearchDetail> = async (data) => {
    setKey(data.key || "");
  };

  return (
    <div className="bg-[#EAE9E8]">
      <div className="bg-bgHeaderJobCustom max-1280:px-2">
        <div className="container mx-auto">
          <div className="lg:pt-14 pt-8 inline-grid">
            <div className="lg:text-4xl md:text-2xl text-xl font-bold">
              Tìm hiểu văn hoá công ty
            </div>
            <div className="font-normal mt-2">
              Tìm hiểu văn hóa công ty và chọn nơi làm việc phù hợp nhất
            </div>
            <div className="pt-5 pb-12 relative z-[2]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-stretch bg-white rounded-3xl py-2 px-4 border border-[#F89E1B] flex-wrap	"
              >
                <div className="flex-1">
                  <TmInput
                    name="key"
                    control={control}
                    icon={<MagnifyingGlassIcon className="w-6" />}
                    className="border-0"
                    placeholder="Nhập tên công ty"
                  />
                </div>
                <div className="bg-[#F37A20] text-white grid text-center rounded-3xl ">
                  <button type="submit" className="px-4 py-2">
                    Tìm kiếm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-1280:px-2">
        <div className="mx-auto container">
          {DatallCompany?.data.length > 0 ? (
            <>
              <TitleCustom title="Danh Sách công ty" className="mb-8" />
              <div className="mt-4 grid xl:grid-cols-3 md:grid-cols-2 gap-4">
                {DatallCompany?.data.map(
                  (value: ICompanyItemData, index: number) => {
                    return (
                      <div key={index}>
                        <InfomationCompany
                          handleOpenModal={handleOpenModal}
                          item={value}
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </>
          ) : (
            <div className="font-normal text-xs mt-4">
              Không tìm thấy thông tin công ty phù hợp với yêu cầu của bạn.
            </div>
          )}
        </div>
      </div>
      <div>
        <Description />
      </div>
      <PopupLoginDetailJob
        isModalOpen={isOpenModalLogin}
        onClose={() => setIsOpenModalLogin(false)}
        onOpen={openModal}
      />
    </div>
  );
}
