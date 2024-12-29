import axios from "../configs/axios";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
  phone: string;
}

export const authService = {
  login: async (data: LoginData) => {
    const response = await axios.post("/auth/login", data);
    return response.data;
  },

  register: async (data: RegisterData) => {
    const response = await axios.post("/auth/register", data);
    return response.data;
  },

  googleLogin: async (token: string) => {
    const response = await axios.post("/auth/google", { token });
    return response.data;
  },

  getProfile: async () => {
    const response = await axios.get("/auth/profile");
    return response.data;
  },
};
