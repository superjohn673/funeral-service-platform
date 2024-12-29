import React from "react";
import { ProductFilter } from "../types/product";

interface Props {
  filter: ProductFilter;
  onFilterChange: (filter: ProductFilter) => void;
}

const ProductFilter: React.FC<Props> = ({ filter, onFilterChange }) => {
  const cities = ["台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市"];
  const features = ["附停車場", "環境優美", "交通便利", "全年管理維護"];
  const priceRanges = [
    { min: 0, max: 200000, label: "20萬以下" },
    { min: 200000, max: 500000, label: "20-50萬" },
    { min: 500000, max: 1000000, label: "50-100萬" },
    { min: 1000000, max: null, label: "100萬以上" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">類型</h3>
        <div className="mt-4 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="type"
              value="all"
              checked={!filter.type}
              onChange={() => onFilterChange({ ...filter, type: undefined })}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">全部</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="type"
              value="contract"
              checked={filter.type === "contract"}
              onChange={() => onFilterChange({ ...filter, type: "contract" })}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">生前契約</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="type"
              value="columbarium"
              checked={filter.type === "columbarium"}
              onChange={() =>
                onFilterChange({ ...filter, type: "columbarium" })
              }
              className="form-radio text-blue-600"
            />
            <span className="ml-2">塔位</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">地區</h3>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {cities.map((city) => (
            <label key={city} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={filter.city === city}
                onChange={() =>
                  onFilterChange({
                    ...filter,
                    city: filter.city === city ? undefined : city,
                  })
                }
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{city}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">價格範圍</h3>
        <div className="mt-4 space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="inline-flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={
                  filter.priceRange?.min === range.min &&
                  filter.priceRange?.max === range.max
                }
                onChange={() =>
                  onFilterChange({
                    ...filter,
                    priceRange: { min: range.min, max: range.max },
                  })
                }
                className="form-radio text-blue-600"
              />
              <span className="ml-2">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900">特色服務</h3>
        <div className="mt-4 space-y-2">
          {features.map((feature) => (
            <label key={feature} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={filter.features?.includes(feature)}
                onChange={() => {
                  const newFeatures = filter.features || [];
                  const updatedFeatures = newFeatures.includes(feature)
                    ? newFeatures.filter((f) => f !== feature)
                    : [...newFeatures, feature];
                  onFilterChange({
                    ...filter,
                    features: updatedFeatures,
                  });
                }}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{feature}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
