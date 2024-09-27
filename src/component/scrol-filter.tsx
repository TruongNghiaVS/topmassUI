import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Option } from "./hook-form/interface/interface";
import { IScrollFilterProps } from "@/app/interface/job";
import { Provinces } from "@/module/helper/master-data";

export const ScrollFilter = ({ search, setSearch }: IScrollFilterProps) => {
  const { listProvinces } = Provinces();
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
      scrollContainerRef.current.scrollBy({
        left: -distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex overflow-hidden px-2 lg:px-0 mt-2 lg:mt-0 items-center flex-1">
        <div className="mr-2">
          <button
            className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]"
            onClick={() => scrollLeftHorizontally(300)}
          >
            <ChevronLeftIcon className="text-[#F37A20] w-4" />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll flex-1"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex">
            {listProvinces?.map((item: Option, idx: number) => {
              return (
                <button
                  key={idx}
                  className={`px-4 py-2 border border-[#F37A20] ${
                    search === item.value
                      ? "text-white bg-[#F37A20] "
                      : "text-[#F37A20]"
                  } rounded-[21px] whitespace-nowrap mx-2`}
                  onClick={() => {
                    setSearch(item.value);
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="ml-2">
          <button
            className="border border-[#F37A20] rounded-full border-[2px] p-1 border-solid min-w-[auto]"
            onClick={() => scrollHorizontally(300)}
          >
            <ChevronRightIcon className="text-[#F37A20] w-4" />
          </button>
        </div>
      </div>
    </>
  );
};
