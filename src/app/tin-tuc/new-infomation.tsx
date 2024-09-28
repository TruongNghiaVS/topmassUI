import { IBlogRelationProps } from "@/interface/blog";
import Link from "next/link";

export const NewInfomation = ({ item }: IBlogRelationProps) => {
  return (
    <div>
      <div>
        <Link href="#">
          <img
            src={`${
              item.coverFullLink.length > 0
                ? item.coverFullLink
                : "/imgs/img-detail-new.png"
            }  `}
            alt=""
            className="w-full rounded-lg"
          />
        </Link>
      </div>
      <Link href="#">
        <div className="font-normal mt-3 line-clamp-3">{item.title}</div>
      </Link>
    </div>
  );
};
