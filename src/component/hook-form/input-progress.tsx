import React, { useRef, useState } from "react";
import { useController, Control } from "react-hook-form";
import { ITmInputProgress } from "./interface/interface";
import { StarIcon } from "@heroicons/react/16/solid";

const TmInputProgress: React.FC<ITmInputProgress> = ({
  name,
  control,
  length = 5,
}) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [progressValue, setProgressValue] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      onChange(value);
    }
  };

  const arr = Array.from({ length }, (_, i) => {
    return i + 1;
  });

  const hanldleClick = (value: number) => {
    setProgressValue(value);
    onChange(value);
  };

  return (
    <div>
      <div className="flex space-x-2">
        {arr.map((item) => {
          return (
            <button key={item} onClick={() => hanldleClick(item)} type="button">
              <StarIcon className={`w-5 ${item <= value && "text-default"}`} />
            </button>
          );
        })}
      </div>
      <input
        type="number"
        value={value}
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TmInputProgress;
