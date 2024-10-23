import React from "react";
import { useController } from "react-hook-form";
import { ITmRadioProps } from "./interface/interface";

const TmRadio: React.FC<ITmRadioProps> = ({
  name,
  control,
  options,
  classNameCustom,
  className,
  ...rest
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: any
  ) => {
    onChange(value); // Update React Hook Form state
    if (rest.onChange) {
      rest.onChange(event); // Call the custom onChange handler
    }
  };

  return (
    <div>
      <div className={classNameCustom && classNameCustom}>
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center ">
            <input
              type="radio"
              onBlur={onBlur}
              {...rest}
              checked={value === option.value}
              onChange={(e) => handleChange(e, option.value)}
              className={`form-radio text-blue-600 h-4 w-4 ${
                className && className
              }`}
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TmRadio;
