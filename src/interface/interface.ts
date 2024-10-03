import { Option } from "@/component/hook-form/interface/interface";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Key, KeyedMutator } from "swr";

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
  gender?: number;
  position: string;
  field: string[];
  skill?: string;
  experience: string;
  salary: string;
  locationAddress: string[];
}

export interface SettingJobState {
  gender: number;
  position: string;
  field: string[];
  skill: string;
  experience: string;
  salary: string;
  locationAddress: string[];
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

export interface IAvatarCvProps extends IAvatarProps {
  user: IInfomationUserCv;
}

export interface IApplyModal {
  isModalOpen: boolean;
  onClose: () => void;
  jobId?: string;
  mutate?: KeyedMutator<any>;
}

export interface IModalLoginProps extends IApplyModal {
  onOpen?: () => void;
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

export interface IJobAplly {
  positionText: string;
  companyName: string;
  businessDate: string;
  logoImage: string;
  salaryFrom: number;
  salaryTo: number;
  fieldArray: string;
  id: number;
  jobId: number;
  jobSlug: string;
  lastUpdate: string;
  reasonText: string;
  reasonId: number;
  note: string;
  linkFile: string;
  locationText: string;
}

export interface IJobApplyProps {
  item: IJobAplly;
}

export interface IJobSaveProps extends IJobApplyProps {
  mutate: KeyedMutator<any>;
}

export interface ICvCreate {
  create_At: string;
  id: number;
  linkFile: string;
  typeData: number;
}

export interface IPopupUploadCv {
  isOpenModal: boolean;
  onClose: () => void;
  mutate: KeyedMutator<any>;
}

export interface ILoadCv {
  file: File;
}

export interface ICompanyData {
  item: ICompanyItemData;
}

export interface ICompanyItemData {
  coverFullLink: string;
  followCount: number;
  fullName: string;
  id: number;
  logoFullLink: string;
  slug: string;
}

export interface IInfomationCompany extends ICompanyData {
  handleOpenModal: () => void;
}

export interface IjobDisplayItemData {
  jobName: string;
  companyName: number;
  avatarLink: string;
  fullLink: number;
  rangeSalary: string;
  isJobSave: boolean;
  isJobApply: boolean;
  locationText: string;
  dayRemainApply: string;
  statusCode: number;
  dateExpried: string;
  slug: string;
  jobId: number;
}

export interface IJobInfoCompanyDisplay {
  item: IjobDisplayItemData;
}

export interface IProvinceData {
  code: number;
  name: string;
}
export interface ImasterData {
  id: number;
  text: string;
}
export interface IInfoEducation {
  fromMonth: string;
  fromYear: string;
  id: number;
  introduction: string;
  isEnd: boolean;
  linkFile?: string;
  major: string;
  position: string;
  relId: number;
  schoolName: string;
  toMonth: string;
  toYear: string;
  rank: string;
}

export interface IInfoEducationProps {
  educations: IInfoEducation[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface IInfomationSchoolCv {
  educations: {
    id?: number;
    schoolName: string;
    major: string;
    position: string;
    fromMonth: string;
    fromYear: string;
    toMonth?: string;
    toYear?: string;
    isEnd?: boolean;
    rank?: string;
    introduction?: string;
    files?: FileList;
    linkFile?: string;
  }[];
}

export interface IInfomationExperience {
  experiences: {
    id?: number;
    companyName: string;
    position: string;
    fromMonth: string;
    fromYear: string;
    toMonth?: string;
    toYear?: string;
    isEnd?: boolean;
    introduction?: string;
    files?: FileList;
  }[];
}

export interface IInfomationExperiencesView {
  id?: number;
  companyName: string;
  position: string;
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  isEnd?: boolean;
  introduction: string;
  linkFile?: string;
  files?: FileList;
}

export interface IInfomationExperienceProps {
  experiences: IInfomationExperiencesView[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface IProjectCv {
  projects: {
    id?: number;
    projectName: string;
    customerName: string;
    numOfMember: number;
    position: string;
    technology: string;
    fromMonth: string;
    fromYear: string;
    toMonth?: string;
    toYear?: string;
    isEnd?: boolean;
    introduction?: string;
    files?: FileList;
  }[];
}

export interface IInfomationProjectView {
  id: number;
  projectName: string;
  customerName: string;
  numOfMember: number;
  position: string;
  technology: string;
  fromMonth: string;
  fromYear: string;
  toMonth: string;
  toYear: string;
  isEnd?: boolean;
  introduction: string;
  files?: FileList;
  linkFile?: string;
}

export interface IInfomationProjectProps {
  projects: IInfomationProjectView[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface ISkillCv {
  skills: {
    id?: number;
    fullName: string;
    level: number;
  }[];
}

export interface IInfoamtionSkillView {
  id?: number;
  fullName: string;
  level: number;
  description: string;
}

export interface IInfomationSkillViewProps {
  skills: IInfoamtionSkillView[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface IToolCv {
  tools: {
    id?: number;
    fullName: string;
    level: number;
    description?: string;
  }[];
}

export interface IInfoamtionToolView {
  id?: number;
  fullName: string;
  level: number;
  description: string;
}

export interface IInfomationToolViewProps {
  tools: IInfoamtionToolView[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface IReWardCv {
  rewards: {
    id?: number;
    fullName: string;
    companyName: string;
    monthGet: string;
    yearGet: string;
    introduction?: string;
    files?: FileList;
  }[];
}

export interface IInfomationRewardView {
  id: number;
  fullName: string;
  companyName: string;
  monthGet: string;
  yearGet: string;
  introduction: string;
  files?: FileList;
  linkFile?: string;
}

export interface IInfomationRewardProps {
  rewards: IInfomationRewardView[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface ICertificateCv {
  certificates: {
    id?: number;
    fullName: string;
    companyName: string;
    monthGet: string;
    yearGet: string;
    monthExpired?: string;
    yearExpired?: string;
    isExpired?: boolean;
    introduction?: string;
    files?: FileList;
  }[];
}

export interface IInfomationCertificateView {
  id: number;
  fullName: string;
  companyName: string;
  monthGet: string;
  yearGet: string;
  introduction: string;
  monthExpired: string;
  yearExpired: string;
  isExpired: boolean;
  files?: FileList;
  linkFile?: string;
}

export interface IInfomationCertificateProps {
  certificates: IInfomationCertificateView[];
  mutate?: KeyedMutator<any>;
  onClose?: () => void;
}

export interface IInfomationUserCv {
  fullName: string;
  position: string;
  level: string;
  gender: number;
  email: string;
  phoneNumber: string;
  introduction?: string;
  linkFile?: string;
  addressInfo: string;
}

export interface IInfoamtionFormUserCv {
  user: IInfomationUserCv;
  mutate: KeyedMutator<any>;
  onClose: () => void;
}

export interface ISliderJobsParram {
  allProvinces: Option[];
  allRealms: Option[];
}

export interface ISliderFormParram extends ISliderJobsParram {}

export interface IHotCompanyDetail {
  coverFullLink: string;
  logoFullLink: string;
  fullName: string;
  slug: string;
  id: number;
  followCount: number;
}

export interface IHotCompanyProps {
  companys: IHotCompanyDetail[];
}

export type IBlogDataItem = {
  title: string;
  coverImage: string;
  coverFullLink: string;
  keyWord: string;
  content: string;
  shortDes: string;
  categoryName: string;
  slug: string;
  status: number;
  id: number;
};

export type IBlogData = {
  item: IBlogDataItem;
  slug: string;
};

export interface IInsuranceOneTime {
  month_from: string;
  year_from: string;
  month_to: string;
  year_to: string;
  salary: number;
  status: number;
}

export interface IInsuarnceVoluntary {
  month_from: string;
  year_from: string;
  month_to: string;
  year_to: string;
  salary: number;
  object: number;
}

export interface IVoluntaryCompulsoryInsurance extends IInsuranceOneTime {
  object: number;
}

export interface IButtonLogin {
  className: string;
  onClick: () => void;
  children: ReactNode;
}
