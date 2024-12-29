import axios from "../configs/axios";
import {
  Product,
  ProductFilter,
  ProductSort,
} from "../pages/products/types/product";
import { PaginationParams, ApiResponse } from "../types";

interface GetProductsParams extends PaginationParams {
  filter?: ProductFilter;
  sort?: ProductSort;
}

export const productService = {
  getProducts: async (
    params: GetProductsParams
  ): Promise<ApiResponse<Product[]>> => {
    const response = await axios.get("/products", { params });
    return response.data;
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  },

  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await axios.get("/products/featured");
    return response.data;
  },
};
