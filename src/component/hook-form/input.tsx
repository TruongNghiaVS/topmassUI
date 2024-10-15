import React from "react";
import { useController, Control } from "react-hook-form";
import { ITmInput } from "./interface/interface";

const TmInput: React.FC<ITmInput> = ({
  name,
  control,
  icon,
  afterIcon,
  placeholder = "",
  type = "text",
  className,
  min,
  max,
  disabled = false,
}) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3">{icon}</div>}
        <input
          type={type}
          defaultValue={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
          className={`p-2 border rounded-md w-full focus-visible:outline-none ${className} ${
            icon && "pl-10"
          } ${error ? "border-red-500" : "border-gray-300"}`}
        />
        {afterIcon && <div className="absolute right-1">{afterIcon}</div>}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TmInput;
