import Link from "next/link";

export const InfomationCompany = ({ item }: any) => {
  return (
    <div className="overflow-hidden rounded-lg md:mb-10 mb-4 border border-[#F37A20]">
      <div>
        <Link href="/cong-ty/test">
          <img src={`imgs/${item.img}`} alt="" className="w-full" />
        </Link>
      </div>
      <div className="p-2 bg-white">
        <div className="flex items-center">
          <div className="p-2 bg-[#EAE9E8] rounded mr-4">
            <Link href="/cong-ty/test">
              <img src={`/imgs/${item.img_small}`} alt="" className="" />
            </Link>
          </div>
          <div>
            <Link href="/cong-ty/test">
              <div className="text-lg font-medium line-clamp-2">
                Công ty cổ phần VietStar
              </div>
            </Link>
            <div className="flex justify-between">
              <div className="font-normal text-[10px]">
                {item.follow} lượt theo dõi
              </div>
              <button className="text-default text-xs ">+ Theo dõi</button>
            </div>
          </div>
        </div>
        <div>
          {item.data.map((value: any, index: number) => {
            return (
              <div
                key={index.toString() + value.name}
                className="mt-2 p-4 border rounded-lg"
              >
                <div className="text-[16px]	leading-[18px] font-bold ">
                  <Link href={`/viec-lam/${value.slug}`}>{item.title}</Link>
                </div>
                <div className="flex">
                  <div className="flex mt-2	justify-center sm:justify-start">
                    <div className="text-xs text-[#FF5500] pr-[0.65em] mr-2 relative after:absolute after:right-0 after:top-0 after:bottom-0 after:my-auto after:w-[1px] after:h-[60%] after:bg-[#666666]">
                      <Link href={`/viec-lam/${value.slug}`}>
                        {value.price}
                      </Link>
                    </div>
                    <div className="text-xs px-[0.65em]">
                      <Link href={`/viec-lam/${value.slug}`}>{value.city}</Link>
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
