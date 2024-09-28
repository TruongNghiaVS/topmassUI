export interface IBlog {
  categoryName: string;
  content: string;
  coverFullLink: string;
  createAt: string;
  createdBy: number;
  id: number;
  keyWord: string;
  linked: number;
  shortDes: string;
  slug: string;
  status: number;
  title: string;
  updateAt: string;
  updatedBy: number;
}

export interface IBlogRelationProps {
  item: IBlog;
}

export interface ICareerBlogProps {
  blogs: IBlog[];
}
