import { Button } from "@mui/material";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export const ScrollFilter = () => {
  const listFilter = [
    "Ngẫu nhiên",
    "Việc làm mới nhất",
    "Quan tâm nhiều nhất",
    "Tuyển gấp",
    "Ngẫu nhiên",
    "Việc làm mới nhất",
    "Quan tâm nhiều nhất",
    "Tuyển gấp",
    "Ngẫu nhiên",
    "Việc làm mới nhất",
    "Quan tâm nhiều nhất",
    "Tuyển gấp",
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollHorizontally = (distance: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftHorizontally = (distance: number) => {
    if (scrollContainerRef.current) {
      console.log(scrollContainerRef.current.clientWidth);
      console.log(scrollContainerRef.current.offsetWidth);
      console.log(scrollContainerRef.current.scrollWidth);
      scrollContainerRef.current.scrollBy({
        left: -distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex overflow-hidden lg:w-[60%] px-2 lg:px-0 mt-2 lg:mt-0 items-center">
        <div className="mr-2">
          <Button
            size="small"
            className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]"
            onClick={() => scrollLeftHorizontally(300)}
          >
            <ChevronLeftIcon className="text-[#F37A20] w-4" />
          </Button>
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex">
            {listFilter.map((value: string, idx: number) => {
              return (
                <div
                  key={idx.toString() + value}
                  className="px-4 py-2 text-white bg-[#F37A20] rounded-[21px] whitespace-nowrap mx-2"
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>
        <div className="ml-2">
          <Button
            size="small"
            className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]"
            onClick={() => scrollHorizontally(300)}
          >
            <ChevronRightIcon className="text-[#F37A20] w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};
