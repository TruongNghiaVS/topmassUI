import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface ITmInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  type?: string;
  name: string;
  className?: string;
  classNameLabel?: string;
  classNameError?: string;
  register: UseFormRegister<any>;
  icon?: any;
  error?: FieldError;
  value?: any;
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
