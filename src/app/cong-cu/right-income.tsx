import { ClipboardDocumentListIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export const RightIncome = () => {
  const list = [1, 2, 3, 4];
  return (
    <div>
      <div>
        <img src="/imgs/banner-5.png" alt="" className="w-full rounded-lg" />
      </div>
      <div className="mt-4 p-4 rounded-lg bg-white">
        <div className="flex text-default text-xl">
          <ClipboardDocumentListIcon className="w-6 mr-2" /> Bài viết liên quan
        </div>
        <div className="mt-2">
          {list.map((value) => {
            return (
              <div key={value} className="mt-2">
                <Link href="/tin-tuc/test/1">
                  KOL là gì? Bật mí 7 bước trở thành KOL chuyên nghiệp thu hút
                  triệu fans
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <img src="/imgs/banner-6.png" alt="" className="w-full rounded-lg" />
      </div>
      <div className="mt-4">
        <img src="/imgs/banner-7.png" alt="" className="w-full rounded-lg" />
      </div>
    </div>
  );
};
