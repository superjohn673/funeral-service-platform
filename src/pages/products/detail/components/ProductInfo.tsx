import React from "react";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductInfo: React.FC<Props> = ({ product }) => {
  return (
    <div className="space-y-6">
      <div>
        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
          {product.type === "contract" ? "生前契約" : "塔位"}
        </span>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {product.title}
        </h1>
      </div>

      <div className="flex items-center">
        <span className="text-3xl font-bold text-gray-900">
          NT$ {product.price.toLocaleString()}
        </span>
      </div>

      <div>
        <h2 className="text-lg font-medium text-gray-900">位置</h2>
        <p className="mt-1 text-gray-600">
          {product.location.city} {product.location.district}
          <br />
          {product.location.address}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-medium text-gray-900">特色服務</h2>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium text-gray-900">詳細說明</h2>
        <div className="mt-2 prose prose-sm text-gray-600">
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
