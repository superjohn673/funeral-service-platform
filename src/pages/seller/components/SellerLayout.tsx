import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const SellerLayout: React.FC = () => {
  const { user } = useAuth();

  const navigation = [
    { name: "商品列表", path: "/seller/products" },
    { name: "新增商品", path: "/seller/products/new" },
    { name: "媒合紀錄", path: "/seller/matches" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 側邊欄 */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-2">
              {user?.company && (
                <div className="pb-4 border-b">
                  <h3 className="font-medium text-gray-900">
                    {user.company.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.name}</p>
                </div>
              )}

              <nav className="space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* 主要內容區 */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
