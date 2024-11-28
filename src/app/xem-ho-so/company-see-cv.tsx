import { ICompanySeeCandidateProps } from "@/interface/interface";
import { formatDateDifference } from "@/utils/business/custom-hook";
import Link from "next/link";

export const CompanySeenCV = ({ item }: ICompanySeeCandidateProps) => {
  return (
    <div className="rounded border p-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src={
              item.fullLinkAvatar.length > 0
                ? item.fullLinkAvatar
                : "/imgs/logo-work.png"
            }
            alt=""
            className="w-20 mr-4 rounded-full"
          />
          <div>
            <div>
              <Link href={"/cong-ty/" + item.slug}>
                {item.companyName} đã xem hồ sơ
              </Link>
            </div>
          </div>
        </div>
        <div>{formatDateDifference(item.createAt)}</div>
      </div>
    </div>
  );
};
