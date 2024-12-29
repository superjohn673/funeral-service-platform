import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductFilter from "./components/ProductFilter";
import ProductSort from "./components/ProductSort";
import ProductList from "./components/ProductList";
import {
  Product,
  ProductFilter as FilterType,
  ProductSort as SortType,
} from "./types/product";
import Pagination from "../../components/common/Pagination";
import { productService } from "../../services/product";

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>({});
  const [sort, setSort] = useState<SortType>({
    field: "createdAt",
    order: "desc",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // 模擬從API獲取數據
  useEffect(() => {
    setLoading(true);
    // 這裡應該是實際的API調用
    setTimeout(() => {
      setProducts([
        // 模擬數據
        {
          _id: "1",
          type: "contract",
          title: "全套生前服務契約",
          description: "包含完整服務...",
          price: 280000,
          location: {
            city: "台北市",
            district: "信義區",
            address: "信義路五段100號",
          },
          features: ["專業諮詢", "24小時服務", "交通便利"],
          images: ["/api/placeholder/400/300"],
          sellerId: "seller1",
          status: "active",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        // 可以添加更多模擬數據
      ]);
      setLoading(false);
    }, 1000);
  }, [filter, sort]);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    // 更新 URL 參數
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilter).forEach(([key, value]) => {
      if (value) {
        params.set(key, JSON.stringify(value));
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };

  const handleSortChange = (newSort: SortType) => {
    setSort(newSort);
    const params = new URLSearchParams(searchParams);
    params.set("sort", `${newSort.field}-${newSort.order}`);
    setSearchParams(params);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await productService.getProducts({
          page,
          limit: 12,
          filter,
          sort,
        });
        setProducts(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter, sort, page]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左側過濾器 */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">篩選條件</h2>
            <ProductFilter
              filter={filter}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>

        {/* 右側商品列表 */}
        <div className="lg:w-3/4">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              商品列表
              {!loading && (
                <span className="text-gray-500">
                  共 {products.length} 項商品
                </span>
              )}
            </h1>
            <ProductSort sort={sort} onSortChange={handleSortChange} />
          </div>

          <ProductList products={products} loading={loading} />
        </div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default ProductsPage;
