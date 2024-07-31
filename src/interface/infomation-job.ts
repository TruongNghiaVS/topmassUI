export interface IInfomationJob {
  title: string;
  company: string;
  price: string;
  city: string;
}

export interface IInfomationJobProps {
  item: IInfomationJob;
}

export interface IInfomationJobSame {
  title: string;
  company: string;
  price: string;
  city: string;
  status: string;
  groupType: string[];
}

export interface IInfomationJobSameProps {
  item: IInfomationJobSame;
}
