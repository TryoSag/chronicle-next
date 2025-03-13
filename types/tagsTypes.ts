export interface ICategory {
  categoryName: string;
  categoryText: string;
}

export interface ITag {
  tagName: string;
  color: string;
  title: string;
  resume: string;
  categories: ICategory[];
  description: string;
}
