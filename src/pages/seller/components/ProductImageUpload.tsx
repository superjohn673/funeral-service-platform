import React, { useRef } from "react";

interface Props {
  images: string[];
  onChange: (images: string[]) => void;
}

const ProductImageUpload: React.FC<Props> = ({ images, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // 模擬上傳到 S3 的過程
    const uploadedUrls = await Promise.all(
      files.map(async (file) => {
        // 實際專案中，這裡應該是真實的檔案上傳邏輯
        return `/api/placeholder/400/300`;
      })
    );

    onChange([...images, ...uploadedUrls]);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  return (
    <div className="mt-1 space-y-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((url, index) => (
          <div key={index} className="relative">
            <img
              src={url}
              alt={`圖片 ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {images.length < 5 && (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          新增圖片
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      <p className="text-sm text-gray-500">
        最多可上傳 5 張圖片，建議尺寸 1200x800 像素
      </p>
    </div>
  );
};

export default ProductImageUpload;
