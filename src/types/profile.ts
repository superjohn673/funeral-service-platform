export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string[];
  company?: {
    name: string;
    license: string;
    address: string;
  };
  notifications: {
    email: boolean;
    phone: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  company?: {
    name: string;
    license: string;
    address: string;
  };
  notifications?: {
    email: boolean;
    phone: boolean;
  };
}
