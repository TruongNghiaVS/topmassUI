import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface ITmInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name: string;
  className?: string;
  classNameLabel?: string;
  classNameError?: string;
  register: UseFormRegister<any>;
  icon?: any;
  error?: FieldError;
  [key: string]: any; // Để hỗ trợ các props khác như className, id, v.v.
}

export interface ITmSelect extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  type?: string;
  name: string;
  className?: string;
  classNameLabel?: string;
  classNameError?: string;
  register: UseFormRegister<any>;
  icon?: any;
  children: any;
  error?: FieldError;
}

export interface ITmRadio {
  value: string;
  label: string;
}

export interface ITmRadioProps {
  register: UseFormRegister<any>;
  name: string;
  options: ITmRadio[];
  error?: FieldError;
  [key: string]: any; // Để hỗ trợ các props khác như className, id, v.v.
}

export interface ITmTextareaProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  error?: FieldError;
  [key: string]: any; // Để hỗ trợ các props khác như className, id, v.v.
}
