export interface IUserTagCategory {
  categoryName: string;
}

export interface IUserTag {
  tagName: string;
  color: string;
  categories: IUserTagCategory[];
}

export interface IUser {
  username: string;
  userId: string;
  tags: IUserTag[];
}

export interface IUsername {
  username: string;
}
export interface IToken {
  username: string;
  userId: string;
}

export interface IUserToRegister {
  name: string;
  username: string;
  password: string;
}

export interface IUserToLogin {
  username: string;
  password: string;
}
