export type ProductType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImages: {
    public_id: string;
    url: string;
  }[];
  seller: string;
  category: string;
  deliveryCharges: number;
  in_Stock: number;
  feedback?: {
    customerId: string;
    rating: number;
    review: string;
  }[];
  activeOrders?: {
    orderId: string;
  }[];
  fulfilledOrders?: {
    orderId: string;
  }[];
};
