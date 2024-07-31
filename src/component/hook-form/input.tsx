import React from "react";
import { ITmInput } from "./interface/interface";

const TmInput: React.FC<ITmInput> = ({
  register,
  name,
  type = "text",
  label,
  required = false,
  error,
  className,
  classNameLabel,
  classNameError,
  value,
  icon,
  ...rest
}) => {
  if (type === "checkbox") {
  }

  return (
    <div>
      {label !== null && label !== "" && (
        <label className={classNameLabel != undefined ? classNameLabel : ""}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3">{icon}</div>}
        <input
          type={type}
          {...register(name, { required })}
          {...rest}
          className={`pl-10 py-2 border border-gray-300 rounded-md focus-visible:outline-none  w-full ${className} ${
            icon ? "pl-10" : "pl-4"
          }`}
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
