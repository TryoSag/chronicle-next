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
export interface INewChronicle {
  chronicleName: string;
  owner: string;
  tags: ITag[];
}
export interface IChronicle {
  chronicleName: string;
  chronicleId: string;
  owner: string;
  tags: ITag[];
}

export interface IChronicles {
  chronicles: IChronicle[];
}
