export interface User {
  username: string;
  email: string;
  password?: string;
  firstname: string;
  lastname: string;
  bio?: string;
}

export interface PostType {
  content: string;
  created_at: string;
  id: number;
  title: string;
  updated_at: string;
  user: User;
}
