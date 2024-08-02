import Link from "next/link";

export const NewInfomation = () => {
  return (
    <div>
      <div>
        <Link href="#">
          <img
            src="/imgs/img-detail-new.png"
            alt=""
            className="w-full rounded-lg"
          />
        </Link>
      </div>
      <Link href="#">
        <div className="font-normal mt-3 line-clamp-3">
          KOL là gì? Bật mí 7 bước trở thành KOL chuyên nghiệp thu hút triệu
          fans
        </div>
      </Link>
    </div>
  );
};
