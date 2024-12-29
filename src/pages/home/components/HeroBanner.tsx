import React from "react";
import { useNavigate } from "react-router-dom";

const HeroBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/api/placeholder/1920/600"
          alt="背景圖片"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          安心規劃，用心服務
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          提供透明、專業的生前契約及塔位媒合服務，讓您和家人安心規劃未來
        </p>
        <div className="mt-10 flex space-x-4">
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium"
          >
            立即瀏覽
          </button>
          <button
            onClick={() => navigate("/guide")}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-3 rounded-md text-base font-medium"
          >
            了解更多
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
