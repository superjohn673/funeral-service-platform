import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { Product } from "../../products/types/product";
import { productService } from "../../../services/product";

const CreateProductPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: Partial<Product>) => {
    try {
      setLoading(true);
      await productService.createProduct(data);
      navigate("/seller/products");
    } catch (error) {
      console.error("Failed to create product:", error);
      // 這裡可以添加錯誤提示
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">新增商品</h1>
        <p className="mt-2 text-sm text-gray-700">
          請填寫以下資訊以新增您的商品
        </p>
      </div>

      <ProductForm onSubmit={handleSubmit} isLoading={loading} />
    </div>
  );
};

export default CreateProductPage;
