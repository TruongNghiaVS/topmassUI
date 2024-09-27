import { IBlogData, IBlogDataItem } from "@/app/interface/interface";
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
    <div className="rounded bg-white overflow-hidden">
      <Link href={`/tin-tuc/${slug}/${item.slug}`}>
        <img src={`${item.coverFullLink}`} alt="" className="w-full" />
      </Link>
      <Link href={`/tin-tuc/${slug}/${item.slug}`}>
        <div className="m-5 text-lg font-semibold line-clamp-3">
          {item.title}
        </div>
      </Link>
    </div>
  );
};
