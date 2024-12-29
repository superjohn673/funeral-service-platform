import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  type: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

const FeaturedProducts: React.FC = () => {
  // 模擬精選商品數據
  const products: Product[] = [
    {
      id: "1",
      type: "生前契約",
      title: "完善規劃套餐",
      location: "台北市",
      price: 250000,
      image: "/api/placeholder/400/300",
    },
    {
      id: "2",
      type: "塔位",
      title: "山景雙人套位",
      location: "新北市",
      price: 350000,
      image: "/api/placeholder/400/300",
    },
    // 可以添加更多商品
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center mb-12">
          精選推薦
        </h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-4">
                  <span className="text-sm text-blue-600 font-medium">
                    {product.type}
                  </span>
                  <h3 className="mt-1 text-lg font-medium text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.location}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    NT$ {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
