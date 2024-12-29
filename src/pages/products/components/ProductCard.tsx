import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
        <div className="aspect-w-3 aspect-h-2">
          <img
            src={product.images[0] || "/api/placeholder/400/300"}
            alt={product.title}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            {product.type === "contract" ? "生前契約" : "塔位"}
          </span>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {product.location.city} {product.location.district}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">
              NT$ {product.price.toLocaleString()}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
