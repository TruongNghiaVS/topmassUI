import { InputHTMLAttributes } from "react";
import { Control, FieldError, UseFormRegister } from "react-hook-form";

export interface ITmInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
  icon?: any;
  placeholder?: string;
  type?: string;
  min?: number;
  max?: number;
}

export interface ITmInputProgress extends ITmInput {
  length?: number;
}

export interface ITmCheckBox extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label: string;
}

export interface IUpload extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  classNameImg?: string;
  title?: string;
  acceptFile?: string;
  link?: string;
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
  value: any;
  label: string;
}

export interface ITmRadioProps {
  name: string;
  control: Control<any>;
  options: Option[];
  classNameCustom?: string;
  className?: string;
}

export interface ITmTextareaProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  rows?: number;
}

export type Option = {
  label: string;
  value: any;
};

export interface SearchSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
}
