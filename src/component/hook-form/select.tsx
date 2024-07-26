import React from "react";
import { ITmSelect } from "./interface/interface";

const TmSelect: React.FC<ITmSelect> = ({
  register,
  name,
  children,
  label,
  error,
  className,
  classNameLabel,
  classNameError,
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
      <div
        className={`py-2 px-4  ${className !== undefined && className} ${
          icon !== undefined ? "flex" : ""
        }`}
      >
        {icon}
        <select
          className={`w-full focus-visible:outline-none ${className}`}
          {...register(name)}
          {...rest}
        >
          {children}
        </select>
      </div>

      {error && (
        <p style={{ color: "red" }} className={classNameError}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TmSelect;
