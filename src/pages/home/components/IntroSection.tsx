import React from "react";

const IntroSection: React.FC = () => {
  const features = [
    {
      title: "專業服務",
      description: "嚴選合法業者，提供專業諮詢服務",
      icon: "🏢",
    },
    {
      title: "透明資訊",
      description: "價格公開透明，商品資訊完整",
      icon: "📋",
    },
    {
      title: "安心保障",
      description: "完整身分驗證，交易有保障",
      icon: "🔒",
    },
    {
      title: "便利媒合",
      description: "快速媒合買賣雙方，省時省力",
      icon: "🤝",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            為什麼選擇我們？
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            我們致力於提供最專業、透明的服務，讓每個家庭都能安心規劃未來
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
