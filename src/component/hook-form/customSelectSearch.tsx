import { CheckedIcon } from "@/theme/icons/checkedIcon";
import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

type CustomSelectSearchProps = {
  options: Option[];
  onChange: (value: string) => void;
};

const CustomSelectSearch: React.FC<CustomSelectSearchProps> = ({
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>({
    value: "",
    label: "Tất cả thiết kế",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="relative inline-block text-left min-w-[200px]">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.label : ""}
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
        <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 p-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="max-h-60 overflow-auto">
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:text-default"
                onClick={() => handleOptionClick(option)}
              >
                <span className="block truncate ">{option.label}</span>
                {selectedOption?.value === option.value && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <CheckedIcon className="text-[#F37A20]" />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelectSearch;
