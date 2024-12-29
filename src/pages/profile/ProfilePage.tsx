import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserProfile, UpdateProfileData } from "../../types/profile";
import { profileService } from "../../services/profile";
import { setCredentials } from "../../store/slices/authSlice";
import BasicInfoForm from "./components/BasicInfoForm";
import CompanyInfoForm from "./components/CompanyInfoForm";
import ChangePasswordForm from "./components/ChangePasswordForm";

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("basic");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await profileService.getProfile();
      setProfile(data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (data: UpdateProfileData) => {
    try {
      const updatedProfile = await profileService.updateProfile(data);
      setProfile(updatedProfile);
      // 更新 Redux store 中的用戶資訊
      dispatch(
        setCredentials({
          user: updatedProfile,
          token: localStorage.getItem("token") || "",
        })
      );
    } catch (error) {
      console.error("Failed to update profile:", error);
      throw error;
    }
  };

  const handleChangePassword = async (data: {
    currentPassword: string;
    newPassword: string;
  }) => {
    try {
      await profileService.changePassword(data);
    } catch (error) {
      console.error("Failed to change password:", error);
      throw error;
    }
  };

  if (loading || !profile) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-600 border-r-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("basic")}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === "basic"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              基本資料
            </button>
            {profile.role.includes("seller") && (
              <button
                onClick={() => setActiveTab("company")}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === "company"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                公司資料
              </button>
            )}
            <button
              onClick={() => setActiveTab("password")}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === "password"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              修改密碼
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "basic" && (
            <BasicInfoForm profile={profile} onSubmit={handleUpdateProfile} />
          )}
          {activeTab === "company" && profile.role.includes("seller") && (
            <CompanyInfoForm profile={profile} onSubmit={handleUpdateProfile} />
          )}
          {activeTab === "password" && (
            <ChangePasswordForm onSubmit={handleChangePassword} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
