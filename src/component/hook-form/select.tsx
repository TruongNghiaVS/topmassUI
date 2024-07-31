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
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3">{icon}</div>}
        <select
          {...register(name)}
          {...rest}
          className={`pl-10 py-2 border border-gray-300 rounded-md focus-visible:outline-none w-full ${className} ${
            icon ? "pl-10" : "pl-4"
          }`}
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