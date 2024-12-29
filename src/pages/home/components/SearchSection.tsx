import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    type: "all",
    location: "",
    keyword: "",
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    navigate(`/products?${params.toString()}`);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearch}
          className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4"
        >
          <select
            value={searchParams.type}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, type: e.target.value }))
            }
            className="block w-full sm:w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">所有類型</option>
            <option value="contract">生前契約</option>
            <option value="columbarium">塔位</option>
          </select>

          <input
            type="text"
            placeholder="搜尋地區"
            value={searchParams.location}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, location: e.target.value }))
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="關鍵字搜尋"
            value={searchParams.keyword}
            onChange={(e) =>
              setSearchParams((prev) => ({ ...prev, keyword: e.target.value }))
            }
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            搜尋
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
