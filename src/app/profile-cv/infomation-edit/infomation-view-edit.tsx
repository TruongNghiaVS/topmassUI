import {
  ChevronDownIcon,
  ChevronUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import { ReactNode, useState } from "react";

interface IInfomationViewEdit {
  title: string;
  isOpenModal: () => void;
  children: ReactNode;
}

export const InfomationViewEdit = ({
  title,
  isOpenModal,
  children,
}: IInfomationViewEdit) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="p-4 rounded-lg bg-white mt-4">
      <div className="flex justify-between py-1 items-center">
        <div className="flex items-center">
          <div className="font-medium">{title}</div>
          <button onClick={() => isOpenModal()}>
            <PencilSquareIcon className="w-4 text-default ml-2" />
          </button>
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
        className={`transition-[max-height] duration-400 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[50rem]" : "max-h-0"
        }  `}
      >
        {children}
      </div>
    </div>
  );
};
