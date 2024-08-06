import React from "react";
import { ITmInput } from "./interface/interface";

const TmCheckBox: React.FC<ITmInput> = ({
  register,
  name,
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
      <div className=" flex">
        <input
          type="checkbox"
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
