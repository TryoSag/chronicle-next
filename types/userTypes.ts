export interface IUserTagCategory {
  categoryName: string;
}

export interface IUserTag {
  tagName: string;
  color: string;
  categories: IUserTagCategory[];
}

export interface IUser {
  userId: string;
  name: string;
  tags: IUserTag[];
}
export interface IToken {
  name: string;
  userId: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  pass: string;
}

export interface IUserLogin {
  email: string;
  pass: string;
}
