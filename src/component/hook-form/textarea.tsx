import React from "react";
import { ITmTextareaProps } from "./interface/interface";

const TmTextarea: React.FC<ITmTextareaProps> = ({
  register,
  name,
  label,
  error,
  ...rest
}) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...register(name)} {...rest} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default TmTextarea;
