import React from "react";
import { ProductSort } from "../types/product";

interface Props {
  sort: ProductSort;
  onSortChange: (sort: ProductSort) => void;
}

const ProductSortComponent: React.FC<Props> = ({ sort, onSortChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700">排序：</span>
      <select
        value={`${sort.field}-${sort.order}`}
        onChange={(e) => {
          const [field, order] = e.target.value.split("-");
          onSortChange({
            field: field as ProductSort["field"],
            order: order as ProductSort["order"],
          });
        }}
        className="form-select rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="createdAt-desc">最新上架</option>
        <option value="price-asc">價格由低到高</option>
        <option value="price-desc">價格由高到低</option>
      </select>
    </div>
  );
};

export default ProductSortComponent;
