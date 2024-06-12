export type UserState = {
  users: Array<User>,
  isLoading: boolean;
}

export type User = {
  id  : number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}