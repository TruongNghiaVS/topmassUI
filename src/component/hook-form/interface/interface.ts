import { InputHTMLAttributes } from "react";
import { Control, FieldError, UseFormRegister } from "react-hook-form";

export interface ITmInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
}

export interface ITmCheckBox extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label: string;
}

export interface ITmSelect extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  control: Control<any>;
  label?: string;
  icon?: any;
  options: Option[];
  placeholder?: string;
}

export interface ITmRadio {
  value: string;
  label: string;
}

export interface ITmRadioProps {
  name: string;
  control: Control<any>;
  options: Option[];
  classNameCustom?: string;
}

export interface ITmTextareaProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  rows?: number;
}

export type Option = {
  label: string;
  value: string;
};

export interface SearchSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
}
