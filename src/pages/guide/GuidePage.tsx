import React, { useState } from "react";

const GuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          使用指南
        </h1>

        {/* 標籤切換 */}
        <div className="flex justify-center mb-8">
          <div className="border rounded-lg">
            <button
              onClick={() => setActiveTab("buyer")}
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "buyer"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              買家指南
            </button>
            <button
              onClick={() => setActiveTab("seller")}
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "seller"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              賣家指南
            </button>
          </div>
        </div>

        {/* 買家指南內容 */}
        {activeTab === "buyer" && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                如何開始使用
              </h2>
              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-medium mr-4">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      註冊帳號
                    </h3>
                    <p className="text-gray-600">
                      點擊右上角的「註冊」按鈕，填寫基本資料完成註冊。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-medium mr-4">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      瀏覽商品
                    </h3>
                    <p className="text-gray-600">
                      在商品列表中搜尋您感興趣的商品，可以使用篩選功能找到合適的選項。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-medium mr-4">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      聯繫賣家
                    </h3>
                    <p className="text-gray-600">
                      找到心儀的商品後，可以透過平台與賣家聯繫，詢問更多細節。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                注意事項
              </h2>
              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>仔細閱讀商品描述和條款</li>
                  <li>確認賣家資質和評價</li>
                  <li>保持良好溝通，清楚表達需求</li>
                  <li>注意個人資料的保護</li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* 賣家指南內容 */}
        {activeTab === "seller" && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                如何成為賣家
              </h2>
              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-medium mr-4">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      註冊賣家帳號
                    </h3>
                    <p className="text-gray-600">
                      提供公司相關證明文件，完成賣家身份驗證。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-medium mr-4">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      上架商品
                    </h3>
                    <p className="text-gray-600">
                      登入後前往賣家中心，填寫完整的商品資訊進行上架。
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 font-medium mr-4">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      管理商品和訂單
                    </h3>
                    <p className="text-gray-600">
                      在賣家中心管理商品狀態，及時回覆買家諮詢。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                商品上架規範
              </h2>
              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>提供真實、準確的商品資訊</li>
                  <li>上傳清晰的商品圖片</li>
                  <li>明確標示價格和服務內容</li>
                  <li>遵守平台相關規定和法規要求</li>
                </ul>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidePage;
