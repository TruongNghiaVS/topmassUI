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
