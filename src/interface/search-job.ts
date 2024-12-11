import { Dispatch, SetStateAction } from "react";

export interface IFormSlider {
  Location?: string;
  KeyWord?: string;
  Field?: string;
}

export interface IFormSearchJob extends IFormSlider {
  RankLevel?: string;
  TypeOfWork?: string;
  ModeGet?: string;
  ExperienceId?: number;
  SalaryFrom?: number;
  SalaryTo?: number;
  Salary?: number;
  JobType?: string;
  Gender?: number;
}

export interface IFormCompany {
  work?: string;
  location?: string;
}

export interface ISearchJobProps {
  search: IFormSearchJob;
  setSearch: Dispatch<SetStateAction<IFormSearchJob>>;
  setModeOderby: Dispatch<SetStateAction<number>>;
  modeOderby: number;
}
