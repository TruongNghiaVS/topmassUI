import { IBlogRelationProps } from "@/interface/blog";
import { getCategorySlug } from "@/utils/business/custom-hook";
import Link from "next/link";
import { useEffect, useState } from "react";

export const NewInfomation = ({ item }: IBlogRelationProps) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug(getCategorySlug(item.categoryName));
  }, [item]);
  return (
    <div>
      <div>
        <Link href={`/${item.slug}`}>
          <img
            src={`${
              item.coverFullLink.length > 0
                ? item.coverFullLink
                : "/imgs/img-detail-new.png"
            }  `}
            alt=""
            className="w-full h-[200px] object-fill rounded-lg overflow-hidden"
          />
        </Link>
      </div>
      <Link href={`/${item.slug}`}>
        <div className="font-semibold mt-3 line-clamp-3">{item.title}</div>
      </Link>
    </div>
  );
};
