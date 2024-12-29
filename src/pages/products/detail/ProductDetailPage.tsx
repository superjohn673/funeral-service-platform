import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import SellerInfo from "./components/SellerInfo";
import ContactForm from "./components/ContactForm";
import { Product } from "../types/product";
import { productService } from "../../../services/product";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const data = await productService.getProduct(id);
        setProduct(data);
      } catch (err) {
        setError("商品資訊載入失敗");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            {error || "商品不存在"}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左側商品圖片 */}
        <div>
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* 右側商品資訊 */}
        <div className="space-y-6">
          <ProductInfo product={product} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SellerInfo
              seller={{
                _id: "seller-id",
                name: "王大明",
                company: {
                  name: "安心禮儀公司",
                  license: "ABC-12345",
                },
                phone: "0912-345-678",
              }}
            />

            <ContactForm productId={product._id} sellerId={product.sellerId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
