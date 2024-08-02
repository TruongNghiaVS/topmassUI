import React from "react";
import { ITmInput } from "./interface/interface";

const TmInput: React.FC<ITmInput> = ({
  register,
  name,
  type = "text",
  error,
  className,
  classNameError,
  value,
  icon,
  ...rest
}) => {
  return (
    <div>
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3">{icon}</div>}
        <input
          type={type}
          {...register(name)}
          {...rest}
          value={value}
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
