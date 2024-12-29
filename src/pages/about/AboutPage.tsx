import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          關於我們
        </h1>

        {/* 平台介紹 */}
        <div className="prose prose-lg mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            平台理念
          </h2>
          <p className="text-gray-600 mb-8">
            我們致力於提供一個透明、專業的生前契約及塔位媒合平台，讓每個家庭都能安心規劃未來。透過專業的服務流程和嚴格的審核機制，我們確保每筆交易都能安全進行。
          </p>

          {/* 核心價值 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            核心價值
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                專業服務
              </h3>
              <p className="text-gray-600">
                提供專業的諮詢服務，協助您做出最適合的選擇。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                資訊透明
              </h3>
              <p className="text-gray-600">
                確保所有商品資訊清楚透明，讓您能做出明智的決定。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                用心把關
              </h3>
              <p className="text-gray-600">
                嚴格審核每一位合作廠商，確保服務品質。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                安心保障
              </h3>
              <p className="text-gray-600">
                完整的媒合機制，保障買賣雙方權益。
              </p>
            </div>
          </div>

          {/* 聯絡資訊 */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            聯絡我們
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-medium w-24">客服電話：</span>
                <span>(02) 1234-5678</span>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium w-24">服務時間：</span>
                <span>週一至週五 09:00-18:00</span>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium w-24">電子信箱：</span>
                <span>service@example.com</span>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium w-24">公司地址：</span>
                <span>台北市信義區信義路五段</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
