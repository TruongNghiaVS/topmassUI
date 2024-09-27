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
