export interface PaginationParams {
  page: number;
  limit: number;
}

export interface ApiResponse<T> {
  data: T;
  total: number;
  page: number;
  totalPages: number;
}
