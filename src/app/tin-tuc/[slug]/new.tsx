import { IBlogData, IBlogDataItem } from "@/interface/interface";
import Link from "next/link";

export interface INew {
  img: string;
  title: string;
  slug: string;
}

export interface INewProps {
  item: INew;
  slug: string;
}

export const New = ({ item, slug }: IBlogData) => {
  return (
    <div className="rounded-lg bg-white overflow-hidden ">
      <div className="w-full h-[200px] object-fill">
        <Link href={`/tin-tuc/${slug}/${item.slug}`}>
          <img src={`${item.coverFullLink}`} alt="" className="w-full h-full" />
        </Link>
      </div>
      <Link href={`/tin-tuc/${slug}/${item.slug}`}>
        <div className="m-5 text-lg font-semibold line-clamp-3 h-[84px]">
          {item.title}
        </div>
      </Link>
    </div>
  );
};
