import { Dispatch, SetStateAction } from "react";

export interface IRegister {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  password: string;
  // is_used: boolean;
}

export interface ILogin {
  userName: string;
  password: string;
}

export interface IEditUser {
  username: string;
  phone_number?: string;
  email?: string;
}

export interface IResetpassword {
  email: string;
}

export interface IChangePassword {
  password: string;
}

export interface IConfirmResetPassword {
  password: string;
}

export interface ISettingSuggestJob {
  gender?: string;
  position: string;
  job_type: string[];
  skill?: string[];
  experience: string;
  salary: string;
  location: string[];
}

export interface IContact {
  name: string;
  email: string;
  phone: string;
  title: string;
  content: string;
}

export interface ILoginForm {
  onClose?: () => void;
}

export type ISubmenuProps = {
  subMenu: {
    title: string;
    slug: string;
    icon: any;
    border?: boolean;
    after?: any;
  }[];
  pathCheck: string;
};

export type IDropdownMenu = {
  subMenu: {
    title: string;
    slug: string;
    icon: any;
    border?: boolean;
    after?: any;
  }[];
  pathCheck: string;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export interface IProfileInfomation {
  firstName: string;
  lastName: string;
  phone?: string;
  email?: string;
  avatarLink?: string;
}

export interface IAvatarProps {
  avatarLink: string;
  setAvatarLink: Dispatch<SetStateAction<string>>;
}

export interface IApplyModal {
  isModalOpen: boolean;
  onClose: () => void;
}

export interface IModalLoginProps extends IApplyModal {
  onOpen: () => void;
}

export interface ICv {
  label: string;
  link: string;
  id: number;
}

export interface IApplyCv {
  username: string;
  email: string;
  phone_number: string;
  description?: string;
}

export interface ICompanyDetailJob {
  companyName: string;
  capacity: string;
  addressInfo: string;
  companyId: number;
  slug: string;
  avatarLink: string;
}

export interface ICompanyDetailJobProps {
  company: ICompanyDetailJob;
}

export interface IInfomationBasicJob {
  publishDate: string;
  experienceText: string;
  levelText: string;
  numOfRecruits: number;
  professionText: string;
  formOfWork: string;
  fieldText: string;
  genderText: string;
}

export interface IInfomationBasicJobProps {
  infomation: IInfomationBasicJob;
}

export interface IJobSame {
  isLike: boolean;
  positionText: string;
  companyName: string;
  logoImage: string;
  salaryFrom: number;
  salaryTo: number;
  fieldArray: string;
  jobId: number;
  jobSlug: string;
  lastUpdate: string;
  locationtext: string;
}

export interface IJobSameProps {
  jobs: IJobSame[];
}

export interface IInfomationJobSameProps {
  item: IJobSame;
}
