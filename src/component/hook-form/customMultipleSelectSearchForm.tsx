import React, { useState } from "react";
import { useController, Control, FieldError } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface CustomMultiSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
  error?: FieldError;
}

const CustomMultiSelectSearchForm: React.FC<CustomMultiSelectProps> = ({
  name,
  control,
  options,
  error,
  placeholder,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    field: { onChange, value, ref },
  } = useController({ name, control });

  const handleSelect = (optionValue: string) => {
    const newValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue];
    setSelectedValues(newValues);
    onChange(newValues);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <div>
        {filteredOptions.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              ref={ref}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => handleSelect(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <p>{error?.message}</p>}
    </div>
  );
};

export default CustomMultiSelectSearchForm;
