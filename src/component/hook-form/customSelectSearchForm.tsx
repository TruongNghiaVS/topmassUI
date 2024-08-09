import React, { useState } from "react";
import { useController, Control, FieldError } from "react-hook-form";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  error?: FieldError;
  placeholder?: string;
}

const CustomSelectSearchForm: React.FC<CustomSelectProps> = ({
  name,
  control,
  options,
  placeholder,
  error,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    field: { onChange, value, ref },
  } = useController({ name, control });

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <select
        ref={ref}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p>{error?.message}</p>}
    </div>
  );
};

export default CustomSelectSearchForm;
