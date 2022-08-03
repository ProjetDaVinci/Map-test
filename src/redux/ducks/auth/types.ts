export type IAuthResponse = {
  token: string;
  user: User;
  status: boolean;
  message: string;
};

export type User = {
  email: string;
  password: string;
  isAuthorized: boolean;
  deletedAt: string;
  firstName: string;
  lastName: string;
  teamId: number | string;
  linkedinLink: string;
  avatarKey: string;
  loggedInAt: string;
  id: string;
  imported: false;
  role: string;
  isReceivingNotifications: boolean;
  createdAt: string;
  updatedAt: string;
};

export type IAuthData = {
  login: string;
  password_hash: string;
};

export type IAuthReg = {
  name: string;
  login: string;
  password_hash: string;
};
