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
import { useLoading } from "@/app/context/loading";
import axiosInstance, { fetcher } from "@/utils/axios";
import useSWR from "swr";
import { toast } from "react-toastify";
import { Option } from "@/component/hook-form/interface/interface";
import {
  GET_COMPANY_DETAIL,
  GET_COMPANY_GETALLJOB,
  GET_PROVINCE,
  POST_COMPANY_ADDFOLLOW,
} from "@/utils/api-url";
import { IFormCompany } from "@/interface/search-job";
import { IJob } from "@/interface/job";
import { WrapButtonLogin } from "@/component/button-modal-login";
import { PopupApplyJob } from "@/modules/detail-jobs/popup-apply-job";

export default function CompanyDetail({ params }: { params: { id: string } }) {
  const schema = yup.object().shape({
    work: yup.string(),
    location: yup.string(),
  });
  const { id } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slugItem, setSlugItem] = useState("");
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
      <div className="container mx-auto">
        <div className="pt-6">
          <div className="rounded-xl overflow-hidden">
            <div className="max-h-60 min-h-60 bg-white ">
              <img
                alt={companyDetail?.name}
                src="/imgs/bg-company.png"
                className="w-full object-cover"
              />
            </div>
            <div className="relative py-8 lg:px-10 lg:pl-60 bg-[url(/imgs/bg-title-company.png)] bg-no-repeat bg-[length:100%_100%] max-1280:px-2">
              <div className="w-[180px] h-[180px] rounded-full bg-white flex items-center justify-center lg:absolute left-10 top-[-90px] mx-auto lg:mt-0 md:mt-[-90px] overflow-hidden">
                <img
                  src={`${companyDetail?.logoFullLink}`}
                  alt={companyDetail?.name}
                  className="w-auto"
                />
              </div>
              <div className="lg:flex lg:text-left md:text-center justify-center items-center lg:justify-between lg:space-x-8">
                <div className="">
                  <div className="font-medium text-white font-lg">
                    {companyDetail?.name}
                  </div>
                  <div className="flex justify-center mt-4 sm:flex-row flex-col">
                    <div className="text-white flex justify-center sm:mr-10">
                      <GlobeAltIcon className="w-4 mr-2 text-white" />
                      {companyDetail?.website != "" ? (
                        <span>{companyDetail?.website}</span>
                      ) : (
                        <span>Chua cập nhật</span>
                      )}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-white flex mr-10">
                        <BuildingOffice2Icon className="w-4 mr-2 text-white" />
                        {companyDetail?.capacity != "" ? (
                          <span>{companyDetail?.capacity} nhân viên</span>
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
                </div>

                <div className="md:mt-4 lg:mt-0 md:grid justify-centerpx-8 py-2">
                  {companyDetail?.isFollow == false ? (
                    <div className="">
                      <WrapButtonLogin
                        className="py-2 px-4 bg-white text-default rounded-lg"
                        onClick={() => {
                          AddFollow();
                        }}
                      >
                        + Theo dõi công ty
                      </WrapButtonLogin>
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
        </div>
        <div className="py-6 sm:grid grid-cols-12 gap-4 max-1280:px-2">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#603813] to-[#F6921E] text-white font-medium text-lg py-2 pl-10">
                Thông tin liên hệ
              </div>
              <div
                className="px-8 py-4"
                dangerouslySetInnerHTML={{
                  __html: companyDetail?.introduction,
                }}
              ></div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden mt-8">
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
                  {allJobs?.length > 0 ? (
                    allJobs?.map((value: IJob, index: number) => {
                      return (
                        <div key={index.toString()} className="mt-4">
                          <InfomationJobCompany
                            item={value}
                            onOpen={() => setIsModalOpen(true)}
                            setSlugItem={setSlugItem}
                            mutate={mutateAllJobs}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div>Không có kết quả phù hợp</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 md:col-span-5">
            <div className="bg-white rounded-xl overflow-hidden">
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

                {companyDetail?.iframeEmbeddedMap ? (
                  <div className="mt-4">
                    <div className="flex">
                      <MapIcon className="w-6 mr-2" /> Bản đồ
                    </div>
                    {companyDetail?.iframeEmbeddedMap.length > 0 ? (
                      <div
                        className="mt-2 p-2 iframeContainer"
                        dangerouslySetInnerHTML={{
                          __html: companyDetail?.iframeEmbeddedMap,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div> </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <PopupApplyJob
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobId={slugItem}
        />
      </div>
    </div>
  );
}
