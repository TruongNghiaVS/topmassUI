import React from "react";
import { ITmRadioProps } from "./interface/interface";

const TmRadio: React.FC<ITmRadioProps> = ({
  register,
  name,
  options,
  error,
  ...rest
}) => {
  return (
    <div className="grid">
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            {...rest}
          />
          {option.label}
        </label>
      ))}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default TmRadio;
