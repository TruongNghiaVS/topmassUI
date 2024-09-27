import { Option } from "@/component/hook-form/interface/interface";
import { Dispatch, SetStateAction } from "react";
import { KeyedMutator } from "swr";

export interface IScrollFilterProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}

export interface IScrollSearchDetailProps extends IScrollFilterProps {
  optionSearch: Option[];
}

export interface IJob {
  businessDate: string;
  companyName: string;
  fieldArray: string;
  id: number;
  isLike: boolean;
  isSave: boolean;
  jobId: number;
  jobSlug: string;
  lastUpdate: string;
  locationText: string;
  logoImage: string;
  positionText: string;
  rangeSalary: string;
  salaryFrom: number;
  salaryTo: number;
}

export interface IHotJobProps extends IScrollFilterProps {
  jobs: IJob[];
}

export interface ISearchJobWithTypeFilter extends IHotJobProps {
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

export interface IAllJobsProps {
  jobs: IJob[];
}

export interface IInfomationJobProps {
  item: IJob;
}

export interface IJobSameProps {
  jobs: IJob[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface IInfomationJobSameProps {
  item: IJob;
}
