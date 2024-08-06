import { CheckedIcon } from "@/theme/icons/checkedIcon";
import { useState } from "react";

type Option = {
  value: any;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  onChange: (value: string) => void;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="relative inline-block text-left min-w-48">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : "Trạng thái"}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {options.map((option) => (
            <li
              key={option.value}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-indigo-600 hover:text-white"
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`block truncate ${
                  selectedOption?.value === option.value && "text-[#F37A20]"
                }`}
              >
                {option.label}
              </span>
              {selectedOption?.value === option.value && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <CheckedIcon className="text-[#F37A20]" />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
