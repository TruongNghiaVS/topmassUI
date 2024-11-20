import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { ReactNode, useEffect, useRef, useState } from "react";

interface IInfomationViewEdit {
  title: string;
  isOpenModal: () => void;
  children: ReactNode;
  edit?: boolean;
}

export const InfomationViewEdit = ({
  title,
  isOpenModal,
  edit = true,
  children,
}: IInfomationViewEdit) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    setTimeout(() => {
      if (contentRef.current) {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
      }
    }, 200);
  }, [isOpen, children]);

  return (
    <div className="p-4 rounded-lg bg-white mt-4">
      <div className="flex justify-between py-1 items-center">
        <div className="flex items-center">
          <div className="font-medium text-lg">{title}</div>
          {edit ? (
            <button onClick={() => isOpenModal()}>
              <PencilSquareIcon className="w-4 text-default ml-2" />
            </button>
          ) : (
            ""
          )}
        </div>
        {isOpen ? (
          <button
            className="flex items-center text-default"
            onClick={() => setIsOpen(false)}
          >
            <ChevronUpIcon className="w-4 mr-2" />
            Ẩn
          </button>
        ) : (
          <button
            className="flex items-center text-default"
            onClick={() => setIsOpen(true)}
          >
            <ChevronDownIcon className="w-4 mr-2" />
            Hiện
          </button>
        )}
      </div>
      <div
        className="transition-all duration-400 overflow-hidden "
        style={{ maxHeight: height }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};
