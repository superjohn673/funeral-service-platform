import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { Product } from "../../products/types/product";
import { productService } from "../../../services/product";

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const data = await productService.getProduct(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        // 這裡可以添加錯誤提示
      } finally {
        setInitialLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (data: Partial<Product>) => {
    if (!id) return;

    try {
      setLoading(true);
      await productService.updateProduct(id, data);
      navigate("/seller/products");
    } catch (error) {
      console.error("Failed to update product:", error);
      // 這裡可以添加錯誤提示
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="p-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-600 border-r-transparent"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-6">
        <div className="text-center text-gray-500">找不到商品</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">編輯商品</h1>
        <p className="mt-2 text-sm text-gray-700">修改商品資訊</p>
      </div>

      <ProductForm
        initialData={product}
        onSubmit={handleSubmit}
        isLoading={loading}
      />
    </div>
  );
};

export default EditProductPage;
