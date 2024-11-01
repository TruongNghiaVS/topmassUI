import Link from "next/link";
import { ICompanyData } from "../../interface/interface";
import { convertToMillionDongFixed } from "@/utils/business/custom-hook";
import { useLoading } from "../context/loading";
import axiosInstance from "@/utils/axios";
import { POST_COMPANY_ADDFOLLOW } from "@/utils/api-url";
import { toast } from "react-toastify";

export const InfomationCompany = ({ item }: ICompanyData) => {
  const { setLoading } = useLoading();
  const AddFollow = async (id: number) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(POST_COMPANY_ADDFOLLOW, {
        slug: id,
      });
      toast.success("Đã theo dõi công ty");
    } catch (error) {
      toast.error("Thao tác thất bại, quay lại sau");
    } finally {
      setLoading(false);
    }
  };

  let slugCompany = "/cong-ty/" + item.slug;
  return (
    <div className="overflow-hidden rounded-lg md:mb-10  bg-white mb-4 border border-[#F37A20]">
      <div className=" h-[150px]  border-b overflow-hidden ">
        <Link href={`${slugCompany}`}>
          <img
            src={`${item.coverFullLink}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-2">
        <div className="flex items-center space-x-2  h-[72px]">
          <div className="p-2 bg-[#EAE9E8] rounded flex-auto w-[20%] overflow-hidden">
            <Link href={`${slugCompany}`}>
              <img
                src={
                  item.logoFullLink != null && item.logoFullLink.length > 0
                    ? item.logoFullLink
                    : "/imgs/img-company.png"
                }
                alt=""
                className="w-auto h-auto"
              />
            </Link>
          </div>
          <div className="flex-auto w-[80%]">
            <Link href={`${slugCompany}`}>
              <div className="font-medium line-clamp-2 ">{item.fullName}</div>
            </Link>
            <div className="flex justify-between">
              <div className="font-normal text-[10px]">
                {item.followCount} lượt theo dõi
              </div>
              <button
                onClick={() => AddFollow(item.id)}
                className="text-default text-xs "
              >
                + Theo dõi
              </button>
            </div>
          </div>
        </div>
        <div className="h-[160px]">
          {item.dataJob.map((detail: any, index: number) => {
            return (
              <div key={index} className="mt-2 p-4 border rounded-lg">
                <div className="leading-[18px] font-bold line-clamp-1">
                  <Link href={`/viec-lam/${detail.slug}`}>
                    {detail.positionText}
                  </Link>
                </div>
                <div className="flex">
                  <div className="flex mt-2	justify-center sm:justify-start">
                    <div className="text-xs text-[#FF5500] pr-[0.65em] mr-2 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]">
                      <Link href={`/viec-lam/${detail.slug}`}>
                        {detail.salaryFrom === 0 && detail.salaryTo === 0
                          ? "Thoả thuận"
                          : `${convertToMillionDongFixed(
                              detail.salaryFrom,
                              detail.currencyCode
                            )} - ${convertToMillionDongFixed(
                              detail.salaryTo,
                              detail.currencyCode
                            )} ${
                              detail.currencyCode === "0"
                                ? "Triệu"
                                : detail.currencyCode === "1"
                                ? "USD"
                                : ""
                            }`}
                      </Link>
                    </div>
                    <div className="text-xs px-[0.65em]">
                      <Link href={`/viec-lam/${detail.slug}`}>
                        {detail.locationText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 py-4">
          <Link href={`/cong-ty/${item.slug}`} className="p-0">
            <p className="py-1 rounded-lg border border-[#F37A20] text-default text-center">
              Xem công ty
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
