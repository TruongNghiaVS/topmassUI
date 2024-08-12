// components/SearchSelect.tsx
"use client";
import React, { useState } from "react";
import { useController, Control } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface SearchSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
}

const CustomSelectSearchForm: React.FC<SearchSelectProps> = ({
  name,
  control,
  options,
  placeholder = "Select an option...",
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleSelect = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 border rounded-md cursor-pointer ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {value ? (
          <span>{options.find((opt) => opt.value === value)?.label}</span>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
      </div>
      {isOpen && (
        <div className="relative mt-1">
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md max-h-60 overflow-y-auto p-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border rounded-md w-full focus-visible:outline-none"
              placeholder="Search..."
            />
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
        </div>
      )}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default CustomSelectSearchForm;
