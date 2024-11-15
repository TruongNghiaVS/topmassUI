import { ITOCShareLink } from "@/interface/interface";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ITOCShareLinkProps {
  data: ITOCShareLink;
}

export const TocShareLink = ({ data }: ITOCShareLinkProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    setTimeout(() => {
      if (contentRef.current) {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
      }
    }, 200);
  }, [isOpen]);

  return (
    <div className="">
      <div className="flex py-1 space-x-2 items-center">
        <div className="flex items-center space-x-2">
          {data.icon}
          <div className="font-medium">{data.title}</div>
        </div>
        {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <ChevronUpIcon className="w-4 mr-2" />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <ChevronDownIcon className="w-4 mr-2" />
          </button>
        )}
      </div>

      <div
        className="transition-all duration-400 overflow-hidden "
        style={{ maxHeight: height }}
        ref={contentRef}
      >
        <div className="pl-6">
          {data.details.map((item, idx) => (
            <div key={idx}>
              <a className="text-colorBase" href={"#" + item.id}>
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
