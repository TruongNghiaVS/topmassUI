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
}

export interface IFormCompany {
  work?: string;
  location?: string;
}

export interface ISearchJobProps {
  search: IFormSearchJob;
  getJobSearch: () => void;
  setSearch: Dispatch<SetStateAction<IFormSearchJob>>;
}