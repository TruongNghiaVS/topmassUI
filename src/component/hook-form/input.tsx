import React from "react";
import { ITmInput } from "./interface/interface";

const TmInput: React.FC<ITmInput> = ({
  register,
  name,
  type = "text",
  label,
  error,
  className,
  classNameLabel,
  classNameError,
  value,
  icon,
  ...rest
}) => {
  return (
    <div>
      {label !== null && label == "" && (
        <label className={classNameLabel != undefined ? classNameLabel : ""}>
          {label}
        </label>
      )}
      <div className={`py-2 px-4  ${icon !== undefined ? "flex" : ""}`}>
        {icon}
        <input
          type={type}
          {...register(name)}
          {...rest}
          className={` focus-visible:outline-none w-full ${
            className != null && className
          }`}
          value={value}
        />
      </div>

      {error && (
        <p style={{ color: "red" }} className={classNameError}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TmInput;
