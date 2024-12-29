export interface User {
  _id: string;
  name: string;
  email: string;
  role: string[];
  company?: {
    name: string;
    license: string;
    address: string;
  };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}
