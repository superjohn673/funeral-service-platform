import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">關於我們</h3>
            <p className="text-gray-300">
              提供專業且透明的生前契約及塔位媒合服務
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  商品列表
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-gray-300 hover:text-white">
                  使用指南
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <ul className="space-y-2 text-gray-300">
              <li>電話：(02) 1234-5678</li>
              <li>Email：contact@example.com</li>
              <li>地址：台北市信義區信義路五段</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">服務時間</h3>
            <p className="text-gray-300">
              週一至週五：09:00 - 18:00
              <br />
              週六：10:00 - 17:00
              <br />
              週日：休息
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 生前契約服務平台. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
