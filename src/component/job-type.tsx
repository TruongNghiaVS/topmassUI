import Link from "next/link";
import numeral from "numeral";
import { TitleCustom } from "./custom-title";

export const JobType = () => {
  const company = [
    {
      title: "Kiến trúc/ Xây dựng",
      img: "nganhhang_xaydung.png",
      count: 1800,
      slug: "57",
    },
    {
      title: "Thương mại điện tử",
      img: "nganhhang_thuongmaidientu.png",
      count: 1800,
      slug: "12",
    },
    {
      title: "Ngân hàng & Dịch vụ tài chính",
      img: "nganhhang_taichinhnganhang.png",
      count: 1800,
      slug: "60",
    },
    {
      title: "Nhà hàng- Khách sạn/ Du lịch",
      img: "nganhhang_nhahangkhachsan.png",
      count: 1800,
      slug: "61",
    },
    {
      title: "Bán lẻ/ Tiêu dùng",
      img: "nganhhang_hangtieudung.png",
      count: 1800,
      slug: "44",
    },
    {
      title: "Giáo dục/ Đào tạo",
      img: "nganhhang_giaoduc.png",
      count: 1800,
      slug: "52",
    },
    {
      title: "Du lịch",
      img: "nganhhang_dulich.png",
      count: 1800,
      slug: "17",
    },
    {
      title: "Kinh doanh/ Bán hàng",
      img: "nganhhang_kinhdoanh.png",
      count: 1800,
      slug: "56",
    },
    {
      title: "Bưu chính viễn thông",
      img: "nganhhang_bcvt.png",
      count: 1800,
      slug: "19",
    },
    {
      title: "Bảo hiểm",
      img: "nganhhang_baohiem.png",
      count: 1800,
      slug: "31",
    },
  ];
  return (
    <div className=" max-1280:px-2">
      <div className="container mx-auto mt-4 px-1 ">
        <TitleCustom title="Ngành nghề nổi bật" className="mb-4" />
        <div>
          Xem danh sách việc làm theo ngành nghề{" "}
          <Link href="/tim-kiem-viec-lam" className="text-[#F2821D]">
            tại đây
          </Link>
          .
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 mt-5 ">
          {company.map((value: any, index: number) => {
            return (
              <div
                key={value.title}
                className="rounded-xl transition duration-300 p-5 col-span-1 border border-[1px] border-solid hover:!border-[#F89E1B] border-transparent bg-[#f0f8ff]	 hover:bg-white hover:shadow-[0_3px_10px_rgba(248,158,27,1)]"
              >
                <Link href={`/tim-kiem-viec-lam?Field=${value.slug}`}>
                  <div className=" flex justify-center">
                    <img
                      src={`/imgs/${value.img}`}
                      alt=""
                      className="w-40 bg-[#f3f5f7] rounded-xl"
                    />
                  </div>
                  <div className="text-center text-[#596D54] mt-2">
                    {value.title}
                  </div>
                  {/* <div className="text-center text-[#C89836] text-sm">
                    {numeral(value.count).format("0,0")} việc làm
                  </div> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
