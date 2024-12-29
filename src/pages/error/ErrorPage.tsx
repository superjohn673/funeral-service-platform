import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import SEO from "../../components/common/SEO";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  const getErrorMessage = () => {
    if (error?.status === 404) {
      return "找不到頁面";
    }
    return "系統發生錯誤";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <SEO
        title={getErrorMessage()}
        description="抱歉，您請求的頁面發生錯誤。"
      />

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {error?.status || "500"}
          </h2>
          <p className="text-xl text-gray-600 mb-6">{getErrorMessage()}</p>
          <div className="space-y-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              返回上一頁
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              回到首頁
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
