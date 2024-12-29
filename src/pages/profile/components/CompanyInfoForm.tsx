import React, { useState } from "react";
import { UserProfile, UpdateProfileData } from "../../../types/profile";

interface Props {
  profile: UserProfile;
  onSubmit: (data: UpdateProfileData) => Promise<void>;
}

const CompanyInfoForm: React.FC<Props> = ({ profile, onSubmit }) => {
  const [formData, setFormData] = useState({
    company: {
      name: profile.company?.name || "",
      license: profile.company?.license || "",
      address: profile.company?.address || "",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700"
        >
          公司名稱
        </label>
        <input
          type="text"
          id="companyName"
          value={formData.company.name}
          onChange={(e) =>
            setFormData((prev) => ({
              company: { ...prev.company, name: e.target.value },
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="license"
          className="block text-sm font-medium text-gray-700"
        >
          營業執照號碼
        </label>
        <input
          type="text"
          id="license"
          value={formData.company.license}
          onChange={(e) =>
            setFormData((prev) => ({
              company: { ...prev.company, license: e.target.value },
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          公司地址
        </label>
        <input
          type="text"
          id="address"
          value={formData.company.address}
          onChange={(e) =>
            setFormData((prev) => ({
              company: { ...prev.company, address: e.target.value },
            }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          {loading ? "儲存中..." : "儲存變更"}
        </button>
      </div>
    </form>
  );
};

export default CompanyInfoForm;
