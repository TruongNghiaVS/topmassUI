"use client";
import TmInput from "@/component/hook-form/input";
import TmSelect from "@/component/hook-form/select";
import { InfomationJobCompany } from "@/component/job-company-infomation";
import { IFormCompany } from "@/interface/form-slider";
import { jobCV, loations, optionsLocation } from "@/mockup-data/data";
import { SendCheckFillBootstrapIcon } from "@/theme/icons/sendCheckFillBootstrapIcon";
import {
  BuildingOffice2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { SubmitHandler, useForm } from "react-hook-form";

export default function CompanyDetail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormCompany>();

  const list = [1, 2, 3, 4, 5, 6];

  const onSubmit: SubmitHandler<IFormCompany> = (data: any) => {
    const queryString = new URLSearchParams(data).toString();
  };

  return (
    <div className="bg-[#F4F5F5]">
      <div className="container mx-auto ">
        <div className="rounded-lg overflow-hidden">
          <div>
            <img src="/imgs/bg-company.png" alt="" className="w-full" />
          </div>
          <div className="relative py-4 lg:px-10 lg:pl-60 bg-[url(/imgs/bg-title-company.png)] bg-no-repeat bg-[length:100%_100%] ">
            <div className="w-[180px] h-[180px] rounded-full bg-white flex items-center justify-center lg:absolute left-10 top-[-90px] mx-auto lg:mt-0 md:mt-[-90px]">
              <img src="/imgs/logo-new.png" alt="" className="w-auto" />
            </div>
            <div className="lg:flex lg:text-left md:text-center justify-center items-center lg:justify-between lg:space-x-8">
              <div className="">
                <div className="font-medium text-white font-lg">
                  Công ty cổ phần Tập Đoàn Vietstar Group
                </div>
                <div className="flex justify-center mt-4">
                  <div className="text-white flex mr-10">
                    <GlobeAltIcon className="w-4 mr-2 text-white" />
                    <span>www.topmass.com</span>
                  </div>
                  <div className="text-white flex mr-10">
                    <BuildingOffice2Icon className="w-4 mr-2 text-white" />
                    <span>+300 nhân viên</span>
                  </div>
                  <div className="text-white flex">
                    <UsersIcon className="w-4 mr-2 text-white" />
                    <span>1000 nguời theo dõi</span>
                  </div>
                </div>
              </div>
              <div className="md:mt-4 lg:mt-0 md:grid justify-centerpx-8 py-2">
                <div className="">
                  <button className="py-2 px-4 bg-white text-default rounded-lg">
                    + Theo dõi công ty
                  </button>
                </div>
                <div className="items-center">
                  <button className="flex items-center py-2 px-4 bg-white text-default rounded-lg mt-3">
                    <SendCheckFillBootstrapIcon className="w-4 mr-2" /> Đang
                    theo dõi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 sm:grid grid-cols-12 gap-4">
          <div className="xl:col-span-8 md:col-span-7">
            <div className="bg-white rounded overflow-hidden">
              <div className="bg-gradient-to-r from-[#603813] to-[#F6921E] text-white font-medium text-lg py-2 pl-10">
                Giới thiệu công ty
              </div>
              <div className="px-8 py-4">content</div>
            </div>

            <div className="bg-white rounded overflow-hidden mt-8">
              <div className="bg-gradient-to-r from-[#603813] to-[#F6921E] text-white font-medium text-lg py-2 pl-10">
                Tuyển dụng
              </div>
              <div className="lg:px-8 px-2 py-2">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex items-stretch bg-white rounded-3xl py-2 px-4 flex-wrap space-x-4	"
                >
                  <div className="flex-1 ">
                    <TmInput
                      register={register}
                      icon={<MagnifyingGlassIcon className="mr-2 w-6" />}
                      name="work"
                      error={errors.work}
                      className=""
                      placeholder="Tìm kiếm việc làm"
                    />
                  </div>
                  <div className="flex-1">
                    <TmSelect
                      icon={<MapPinIcon className="w-6 mr-2" />}
                      register={register}
                      error={errors.location}
                      name="location"
                      className="border"
                      placeholder="Địa điểm làm việc"
                      children={loations.map((value) => {
                        return <option key={value}>{value}</option>;
                      })}
                    />
                  </div>
                  <div className=" grid text-center rounded-lg border">
                    <button type="submit" className="px-4 py-2 flex">
                      <MagnifyingGlassIcon className="mr-2 w-6 p-1 rounded-full bg-[#555555] text-white" />
                      Tìm kiếm
                    </button>
                  </div>
                </form>
                <div className="mt-4">
                  {list.map((value) => {
                    return (
                      <div
                        key={value.toString() + jobCV.title}
                        className="mt-4"
                      >
                        <InfomationJobCompany item={jobCV} />
                      </div>
                    );
                  })}
                  <div className="pt-4  flex justify-center items-center">
                    <button className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]  ">
                      <ChevronLeftIcon className="text-[#F37A20] w-4" />
                    </button>
                    <div className="mx-2">1/3 Trang</div>
                    <button className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto] ">
                      <ChevronRightIcon className="text-[#F37A20] w-4" />
                    </button>
                  </div>
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
                    54/31 Phô Quang, phường 2, Quận Tân Bình
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex">
                    <MapIcon className="w-6 mr-2" /> Bản đồ
                  </div>
                  <div className="p-4">
                    <iframe
                      className="w-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0974982069993!2d106.66421827481837!3d10.803844289346571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529250f8a7267%3A0xf1f3a728cbdddbef!2zNTQvMzEgxJAuIFBo4buVIFF1YW5nLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1722842502503!5m2!1svi!2s"
                      style={{ border: 0 }}
                      allowFullScreen
                      height={300}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
