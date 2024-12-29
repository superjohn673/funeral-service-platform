import React, { useState } from "react";

interface Props {
  images: string[];
  title: string;
}

const ProductGallery: React.FC<Props> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* 主圖 */}
      <div className="aspect-w-3 aspect-h-2 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage] || "/api/placeholder/800/600"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 縮圖列表 */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden 
                ${selectedImage === index ? "ring-2 ring-blue-500" : ""}`}
            >
              <img
                src={image || "/api/placeholder/200/200"}
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
