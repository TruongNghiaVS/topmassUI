import { IBlogRelationProps } from "@/interface/blog";
import { getCategorySlug } from "@/utils/business/custom-hook";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NewRelative = ({ item }: IBlogRelationProps) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug(getCategorySlug(item.categoryName));
  }, [item]);

  return (
    <div className="p-4 rounded-lg bg-white">
      <div>
        <Link href={`/tin-tuc/${slug}/${item.slug}`}>
          <img
            src={`${
              item.coverFullLink.length > 0
                ? item.coverFullLink
                : "/imgs/img-detail-new.png"
            }  `}
            alt=""
            className="w-full h-[200px]"
          />
        </Link>
      </div>
      <Link href={`/tin-tuc/${slug}/${item.slug}`}>
        <div className="font-semibold ">{item.title}</div>
      </Link>
      <div className="mt-2">
        <span className="font-medium">Ngày cập nhật:</span>{" "}
        {dayjs(item.updateAt).format("DD/MM/YYYY")}
      </div>
    </div>
  );
};
