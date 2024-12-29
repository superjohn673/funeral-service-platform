export interface Product {
  _id: string;
  type: "contract" | "columbarium";
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    district: string;
    address: string;
  };
  features: string[];
  images: string[];
  sellerId: string;
  status: "active" | "inactive" | "sold";
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilter {
  type?: string;
  city?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  features?: string[];
}

export interface ProductSort {
  field: "price" | "createdAt";
  order: "asc" | "desc";
}
