import axios from "../configs/axios";
import { UserProfile, UpdateProfileData } from "../types/profile";

export const profileService = {
  getProfile: async (): Promise<UserProfile> => {
    const response = await axios.get("/profile");
    return response.data;
  },

  updateProfile: async (data: UpdateProfileData): Promise<UserProfile> => {
    const response = await axios.patch("/profile", data);
    return response.data;
  },

  changePassword: async (data: {
    currentPassword: string;
    newPassword: string;
  }): Promise<void> => {
    await axios.post("/profile/change-password", data);
  },
};
