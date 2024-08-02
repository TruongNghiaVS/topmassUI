import Link from "next/link";

export const Career = () => {
  const career = [
    {
      img: "career.png",
      title:
        "Lừa đảo tuyển dụng vẫn tăng cao, hàng loạt công ty lớn được gọi tên",
      description:
        "Những chiêu trò lừa đảo trên không gian mạng với thủ đoạn khó lường vẫn khiến không ít người sập bẫy trong đó tình trạng lừa đảo tuyển dụng vẫn đang diễn ra",
    },
    {
      img: "career.png",
      title:
        "Lừa đảo tuyển dụng vẫn tăng cao, hàng loạt công ty lớn được gọi tên",
      description:
        "Những chiêu trò lừa đảo trên không gian mạng với thủ đoạn khó lường vẫn khiến không ít người sập bẫy trong đó tình trạng lừa đảo tuyển dụng vẫn đang diễn ra",
    },
    {
      img: "career.png",
      title:
        "Lừa đảo tuyển dụng vẫn tăng cao, hàng loạt công ty lớn được gọi tên",
      description:
        "Những chiêu trò lừa đảo trên không gian mạng với thủ đoạn khó lường vẫn khiến không ít người sập bẫy trong đó tình trạng lừa đảo tuyển dụng vẫn đang diễn ra",
    },
    {
      img: "career.png",
      title:
        "Lừa đảo tuyển dụng vẫn tăng cao, hàng loạt công ty lớn được gọi tên",
      description:
        "Những chiêu trò lừa đảo trên không gian mạng với thủ đoạn khó lường vẫn khiến không ít người sập bẫy trong đó tình trạng lừa đảo tuyển dụng vẫn đang diễn ra",
    },
  ];

  return (
    <div className="mt-12 px-2 max-1280:px-2">
      <div className="container mx-auto">
        <div className="mb-9 text-center text-2xl font-bold text-default ">
          Cẩm Nang Nghề Nghiệp
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-2 lg:px-0">
          {career.map((value: any, index: number) => {
            return (
              <div
                key={value.title + index.toString()}
                className="rounded-md border-[1px] border-solid boder-[#DBDBDB]"
              >
                <div className="">
                  <Link href="/tin-tuc/test/1">
                    <img src={`/imgs/${value.img}`} alt="" className="w-full" />
                  </Link>
                </div>
                <div className="px-4 py-5">
                  <div className="text-xl font-bold line-clamp-3 ">
                    <Link href="/tin-tuc/test/1">{value.title}</Link>
                  </div>
                  <div className="line-clamp-4 mt-2">
                    <Link href="/tin-tuc/test/1">{value.description}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <a href="">
            <div className="inline-block py-2 px-6  rounded-lg border-[1px] border-solid border-[#F9BA06] text-default bg-[#F3F5F7]">
              <Link href="/tin-tuc/abc">Xem thêm cẩm nang nghề nghiệp</Link>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
