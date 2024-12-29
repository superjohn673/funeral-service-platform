import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../products/types/product";

interface Props {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductTable: React.FC<Props> = ({ products, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              商品名稱
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              類型
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              價格
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              位置
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              狀態
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              操作
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      src={product.images[0] || "/api/placeholder/100/100"}
                      alt={product.title}
                      className="h-10 w-10 rounded-lg object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {product.title}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                  {product.type === "contract" ? "生前契約" : "塔位"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                NT$ {product.price.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                {product.location.city} {product.location.district}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    product.status === "active"
                      ? "bg-green-100 text-green-800"
                      : product.status === "inactive"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.status === "active"
                    ? "上架中"
                    : product.status === "inactive"
                    ? "已下架"
                    : "已售出"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link
                  to={`/seller/products/${product._id}/edit`}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  編輯
                </Link>
                <button
                  onClick={() => onDelete(product._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  刪除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
