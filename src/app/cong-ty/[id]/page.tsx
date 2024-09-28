"use client";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import { useEffect, useState } from "react";
import { InfomationJobCompany } from "@/component/infomation-job/infomation-job-company";
import { SendCheckFillBootstrapIcon } from "@/theme/icons/sendCheckFillBootstrapIcon";
import {
  BuildingOffice2Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { PopupLoginDetailJob } from "../../viec-lam/[id]/popup-login-detail-job";
import { getToken } from "@/utils/token";
import { useLoading } from "@/app/context/loading";
import axiosInstance, { fetcher } from "@/utils/axios";
import useSWR from "swr";
import { toast } from "react-toastify";
import { IjobDisplayItemData } from "@/interface/interface";
import { Option } from "@/component/hook-form/interface/interface";
import {
  GET_COMPANY_DETAIL,
  GET_COMPANY_GETALLJOB,
  GET_PROVINCE,
  POST_COMPANY_ADDFOLLOW,
} from "@/utils/api-url";
import { IFormCompany } from "@/interface/search-job";

export default function CompanyDetail({ params }: { params: { id: string } }) {
  const schema = yup.object().shape({
    work: yup.string(),
    location: yup.string(),
  });
  const { id } = params;
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoading } = useLoading();
  const [searchObj, setSearchObj] = useState({
    work: "",
    location: -1,
  });
  const [provicesOptionData, setProvicesOptionData] = useState<Option[]>([]);

  const { control, handleSubmit } = useForm<IFormCompany>({
    resolver: yupResolver(schema),
    defaultValues: { location: "", work: "" },
  });

  const { data: detail, error, mutate } = useSWR(
    `${GET_COMPANY_DETAIL}?slug=${id}`,
    fetcher
  );

  const { data: allProvinces } = useSWR(`${GET_PROVINCE}`, fetcher);

  if (allProvinces?.length > 0) {
    setProvicesOptionData(allProvinces);
  }

  const { data: allJobs, mutate: mutateAllJobs } = useSWR(
    `${GET_COMPANY_GETALLJOB}?slug=${id}&location=${searchObj.location}&work=${searchObj.work}`,
    fetcher
  );

  useEffect(() => {
    if (allProvinces) {
      setProvicesOptionData([
        { label: "Địa điểm làm việc", value: "" },
        ...allProvinces.data.map((item: any) => {
          return {
            label: item.name,
            value: item.code,
          };
        }),
      ]);
    }
  }, [allProvinces]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenModal = () => {
    const token = getToken();
    if (token) {
      AddFollow();
    } else {
      setIsOpenModalLogin(true);
    }
  };

  const companyDetail = detail?.data;
  const AddFollow = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(POST_COMPANY_ADDFOLLOW, {
        slug: id,
      });
      toast.success("Đã theo dõi công ty");
      mutate();
    } catch (error) {
      toast.error("Thao tác thất bại, quay lại sau");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<IFormCompany> = (data: any) => {
    setSearchObj(data);
    mutateAllJobs();
  };

  return (
    <div className="bg-[#F4F5F5]">
      <div className="container mx-auto ">
        <div className="rounded-lg overflow-hidden">
          <div>
            <img
              src={`${companyDetail?.coverFullLink}`}
              alt=""
              className="w-full"
            />
          </div>
          <div className="relative py-4 lg:px-10 lg:pl-60 bg-[url(/imgs/bg-title-company.png)] bg-no-repeat bg-[length:100%_100%] ">
            <div className="w-[180px] h-[180px] rounded-full bg-white flex items-center justify-center lg:absolute left-10 top-[-90px] mx-auto lg:mt-0 md:mt-[-90px]">
              <img
                src={`${companyDetail?.logoFullLink}`}
                alt=""
                className="w-auto"
              />
            </div>
            <div className="lg:flex lg:text-left md:text-center justify-center items-center lg:justify-between lg:space-x-8">
              <div className="">
                <div className="font-medium text-white font-lg">
                  {companyDetail?.name}
                </div>
                <div className="flex justify-center mt-4">
                  <div className="text-white flex mr-10">
                    <GlobeAltIcon className="w-4 mr-2 text-white" />
                    {companyDetail?.website != "" ? (
                      <span>{companyDetail?.website}</span>
                    ) : (
                      <span>Chua cập nhật</span>
                    )}
                  </div>
                  <div className="text-white flex mr-10">
                    <BuildingOffice2Icon className="w-4 mr-2 text-white" />
                    {companyDetail?.capacity != "" ? (
                      <span>{companyDetail?.capacity}</span>
                    ) : (
                      <span>Chua cập nhật</span>
                    )}
                  </div>
                  <div className="text-white flex">
                    <UsersIcon className="w-4 mr-2 text-white" />

                    {companyDetail?.countFollow > 0 ? (
                      <span>{companyDetail?.countFollow} theo dõi</span>
                    ) : (
                      <span>Chua cập nhật</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:mt-4 lg:mt-0 md:grid justify-centerpx-8 py-2">
                {companyDetail?.isFollow == false ? (
                  <div className="">
                    <button
                      className="py-2 px-4 bg-white text-default rounded-lg"
                      onClick={() => {
                        handleOpenModal();
                      }}
                    >
                      + Theo dõi công ty
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <button className="flex items-center py-2 px-4 bg-white text-default rounded-lg mt-3">
                      <SendCheckFillBootstrapIcon className="w-4 mr-2" /> Đang
                      theo dõi
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:grid grid-cols-12 gap-4 max-1280:px-2">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="bg-white rounded overflow-hidden">
              <div className="bg-gradient-to-r from-[#603813] to-[#F6921E] text-white font-medium text-lg py-2 pl-10">
                Giới thiệu công ty
              </div>
              <div
                className="px-8 py-4"
                dangerouslySetInnerHTML={{
                  __html: companyDetail?.introduction,
                }}
              ></div>
            </div>

            <div className="bg-white rounded overflow-hidden mt-8">
              <div className="bg-gradient-to-r from-[#603813] to-[#F6921E] text-white font-medium text-lg py-2 pl-10">
                Tuyển dụng
              </div>
              <div className="lg:px-8 px-2 py-2">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex items-center bg-white rounded-3xl py-2 px-4 flex-wrap space-x-4	"
                >
                  <div className="flex-1 ">
                    <TmInput
                      icon={<MagnifyingGlassIcon className="mr-2 w-6" />}
                      control={control}
                      name="work"
                      className=""
                      placeholder="Tìm kiếm việc làm"
                    />
                  </div>
                  <div className="flex-1">
                    <TmSelect
                      icon={<MapPinIcon className="w-6 mr-2" />}
                      name="location"
                      className="border"
                      control={control}
                      options={provicesOptionData}
                    />
                  </div>
                  <div className=" grid text-center rounded-lg border">
                    <button type="submit" className="px-4 py-1.5 flex">
                      <MagnifyingGlassIcon className="mr-2 w-6 p-1 rounded-full bg-[#555555] text-white" />
                      Tìm kiếm
                    </button>
                  </div>
                </form>
                <div className="mt-4">
                  {allJobs?.map((value: IjobDisplayItemData, index: number) => {
                    return (
                      <div key={index.toString()} className="mt-4">
                        <InfomationJobCompany
                          handleOpenModal={handleOpenModal}
                          item={value}
                          mutate={mutateAllJobs}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <div className="bg-white rounded overflow-hidden">
              <div className="bg-gradient-to-r from-[#603813] to-[#F6921E] text-white font-medium text-lg py-2 pl-10">
                Giới thiệu công ty
              </div>
              <div className="p-1">
                <div className="p-4 border-b">
                  <div className="flex font-medium text-xs">
                    <MapPinIcon className="w-6 mr-2" /> Địa chỉ công ty
                  </div>
                  <div className="font-normal text-xs">
                    {companyDetail?.addressInfo != "" ? (
                      <span>{companyDetail?.addressInfo}</span>
                    ) : (
                      <span>Chua cập nhật</span>
                    )}
                  </div>
                </div>

                {companyDetail?.mapInfo != "" ? (
                  <div className="mt-4">
                    <div className="flex">
                      <MapIcon className="w-6 mr-2" /> Bản đồ
                    </div>
                    <div className="p-4">
                      <iframe
                        className="w-full"
                        src={`${companyDetail?.mapInfo}`}
                        style={{ border: 0 }}
                        allowFullScreen
                        height={300}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupLoginDetailJob
        isModalOpen={isOpenModalLogin}
        onClose={() => setIsOpenModalLogin(false)}
        onOpen={openModal}
      />
    </div>
  );
}
