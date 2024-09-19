export interface IInfomationJob {
  title: string;
  slug: string;
  company: string;
  price: string;
  city: string;
}

export interface IInfomationJobProps {
  item: IInfomationJob;
}

export interface IInfomationJobCV {
  title: string;
  slug: string;
  company: string;
  price: string;
  city: string;
  date: number;
  time: number;
}

export interface IInfomationJobCVProps {
  item: IInfomationJobCV;
}
export interface IInfomationJobSave {
  title: string;
  slug: string;
  company: string;
  price: string;
  city: string;
  status: string;
  groupType: string[];
  date: string;
  time: string;
  day: string;
}

export interface IInfomationJobSaveProps {
  item: IInfomationJobSave;
}
export interface IInfomationJobSame {
  title: string;
  slug: string;
  company: string;
  price: string;
  city: string;
  status: string;
  groupType: string[];
}

export interface IInfomationJobSameProps {
  item: IInfomationJobSame;
}
