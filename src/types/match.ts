export interface Message {
  _id: string;
  senderId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Match {
  _id: string;
  productId: string;
  product: {
    title: string;
    type: "contract" | "columbarium";
    price: number;
    images: string[];
  };
  buyerId: string;
  buyer: {
    name: string;
    email: string;
    phone: string;
  };
  sellerId: string;
  seller: {
    name: string;
    company: {
      name: string;
    };
  };
  status: "pending" | "active" | "completed" | "cancelled";
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}
