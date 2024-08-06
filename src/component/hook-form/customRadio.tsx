import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

type CustomRadioProps = {
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  value,
  selectedValue,
  onChange,
}) => {
  const isSelected = value === selectedValue;

  const handleToggle = () => {
    onChange(value);
  };

  return (
    <div
      className={`w-4 h-4 rounded-full flex items-center justify-center cursor-pointer ${
        isSelected ? "bg-[#F37A20]" : "bg-white border border-gray-300"
      }`}
      onClick={handleToggle}
    >
      {isSelected && <CheckIcon className="w-4 text-white" />}
    </div>
  );
};

export default CustomRadio;
