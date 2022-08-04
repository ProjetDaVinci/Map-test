export type IAuthResponse = {
  token: string;
  user: User;
  status: boolean;
  message: string;
};

export type User = {
  email: string;
  password: string;
  token: string;
};

export type IAuthData = {
  login: string;
  password_hash: string;
};

export type IAuthReg = {
  password: string;
  login: string;
};
