import React from "react";
import { ITmInput } from "./interface/interface";

const TmCheckBox: React.FC<ITmInput> = ({
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
  console.log(label !== null && label == "");
  return (
    <div>
      <div className={`py-2 px-4  ${icon !== undefined ? "flex" : ""}`}>
        {icon}
        <input
          type={type}
          {...register(name)}
          {...rest}
          className={` focus-visible:outline-none mr-2 ${
            className != null && className
          }`}
          value={value}
        />
        {label !== null && label !== "" && (
          <label className={classNameLabel != undefined ? classNameLabel : ""}>
            {label}
          </label>
        )}
      </div>

      {error && (
        <p style={{ color: "red" }} className={classNameError}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TmCheckBox;
