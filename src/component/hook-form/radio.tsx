import React from "react";
import { ITmRadioProps } from "./interface/interface";

const TmRadio: React.FC<ITmRadioProps> = ({
  register,
  name,
  classNameCustom,
  options,
  error,
  ...rest
}) => {
  return (
    <div className={classNameCustom && classNameCustom}>
      {options.map((option) => (
        <label key={option.value} className="flex">
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            {...rest}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default TmRadio;
