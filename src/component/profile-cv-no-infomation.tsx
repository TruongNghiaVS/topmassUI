import { Dispatch, SetStateAction, useState } from "react";

interface Iprops {
  title: string;
  setSelected: Dispatch<SetStateAction<number>>;
  numberSelect: number;
  onOpen: () => void;
  setTitle: Dispatch<SetStateAction<string>>;
}

export const ProfileCvNoInfomation = ({
  title,
  setSelected,
  numberSelect,
  onOpen,
  setTitle,
}: Iprops) => {
  return (
    <div>
      <div className="p-4 rounded-lg bg-white mt-4">
        <div className="text-base font-bold">{title}</div>
        <button
          className="mt-2 px-3 py-1 rounded-lg border border-[#F37A20] text-default"
          onClick={() => (setSelected(numberSelect), onOpen(), setTitle(title))}
        >
          Bổ sung thông tin
        </button>
      </div>
    </div>
  );
};
