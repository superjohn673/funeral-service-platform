import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import { Product } from "../../products/types/product";
import { productService } from "../../../services/product";

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // 實際專案中應該調用賣家專用的 API
      const response = await productService.getProducts({
        page: 1,
        limit: 50,
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("確定要刪除此商品嗎？")) {
      return;
    }

    try {
      // 實際專案中應該調用刪除 API
      await productService.deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">商品管理</h1>
          <p className="mt-2 text-sm text-gray-700">
            管理您的所有商品列表，包括生前契約及塔位商品。
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <Link
            to="/seller/products/new"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          >
            新增商品
          </Link>
        </div>
      </div>

      <div className="mt-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-600 border-r-transparent"></div>
          </div>
        ) : (
          <ProductTable products={products} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
