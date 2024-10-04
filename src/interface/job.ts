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
  positionText: string;
  companyName: string;
  salaryTo: number;
  fieldArray: string;
  jobId: number;
  jobSlug: string;
  lastUpdate: string;
  salaryFrom: number;
  rangeSalary: string;
  locationText: string;
  logoImage: string;
  businessDate: string;
  id: number;
  isLike: boolean;
  isSave: boolean;
  isApply: boolean;
  typeMoney: string;
  aggrement: boolean;
  currencyCode: string;
}

export interface IDetailJob {
  companyData: {
    addressInfo: string;
    avatarLink: string;
    capacity: string;
    companyId: number;
    companyName: string;
    slug: string;
  };
  dataJob: {
    commonData: {
      experienceText: string;
      fieldText: string;
      formOfWork: string;
      genderText: string;
      levelText: string;
      numOfRecruits: number;
      professionText: string;
      publishDate: string;
    };
    content: string;
    experienceText: string;
    hashtags: string;
    jobName: string;
    locationText: string;
    rangeSalary: string;
    slug: string;
  };
  jobExtra: {
    isAply: boolean;
    isSave: boolean;
  };
  id: number;
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
  mutate?: KeyedMutator<any>;
}

export interface IInfomationJobProps {
  item: IJob;
}

export interface IInfomationJobLikeProps extends IInfomationJobProps {
  likeJob: () => Promise<void>;
}

export interface IJobSameProps {
  jobs: IJob[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export interface IInfomationJobSameProps {
  item: IJob;
  mutate?: KeyedMutator<any>;
}

export interface IjobCompanyDisplay extends IInfomationJobSameProps {
  setSlugItem: Dispatch<SetStateAction<string>>;
  onOpen: () => void;
  mutate?: KeyedMutator<any>;
}

export interface IJobApplyProps {
  item: IJob;
}

export interface IJobSaveProps extends IJobApplyProps {
  mutate: KeyedMutator<any>;
}
