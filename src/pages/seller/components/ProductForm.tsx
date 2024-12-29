import React, { useState } from "react";
import { Product } from "../../products/types/product";
import ProductImageUpload from "./ProductImageUpload";

interface Props {
  initialData?: Partial<Product>;
  onSubmit: (data: Partial<Product>) => Promise<void>;
  isLoading: boolean;
}

const ProductForm: React.FC<Props> = ({
  initialData = {},
  onSubmit,
  isLoading,
}) => {
  const [formData, setFormData] = useState({
    type: initialData.type || "contract",
    title: initialData.title || "",
    description: initialData.description || "",
    price: initialData.price || 0,
    location: {
      city: initialData.location?.city || "",
      district: initialData.location?.district || "",
      address: initialData.location?.address || "",
    },
    features: initialData.features || [],
    images: initialData.images || [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleImageUpload = (images: string[]) => {
    setFormData((prev) => ({ ...prev, images }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            商品類型
          </label>
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                type: e.target.value as "contract" | "columbarium",
              }))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="contract">生前契約</option>
            <option value="columbarium">塔位</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            商品名稱
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            商品說明
          </label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            價格
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                price: parseInt(e.target.value),
              }))
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              城市
            </label>
            <input
              type="text"
              value={formData.location.city}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, city: e.target.value },
                }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              區域
            </label>
            <input
              type="text"
              value={formData.location.district}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, district: e.target.value },
                }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              地址
            </label>
            <input
              type="text"
              value={formData.location.address}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  location: { ...prev.location, address: e.target.value },
                }))
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            商品照片
          </label>
          <ProductImageUpload
            images={formData.images}
            onChange={handleImageUpload}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            特色服務
          </label>
          <div className="mt-2 space-y-2">
            {["附停車場", "環境優美", "交通便利", "全年管理維護"].map(
              (feature) => (
                <label key={feature} className="inline-flex items-center mr-4">
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={(e) => {
                      const features = e.target.checked
                        ? [...formData.features, feature]
                        : formData.features.filter((f) => f !== feature);
                      setFormData((prev) => ({ ...prev, features }));
                    }}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">{feature}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          {isLoading ? "處理中..." : "儲存"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
