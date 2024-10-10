export interface IProduct {
  brand: string;
  category: string;
  description: string;
  dimensions: IDimensions;
  id: number;
  images: string[];
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: IReview[];
  shippingInformation: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
}

interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface IReview {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface IProductRaw {
  availabilityStatus: string;
  brand: string | undefined;
  category: string;
  description: string;
  dimensions: IDimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: IMeta;
  minumumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: IReview[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

interface IMeta {
  barcode: string;
  createdAt: string;
  qrCode: string;
  updatedAt: string;
}

export interface IFetchOptions {
  method: string;
  headers?: { "Content-Type": string };
  body?: string;
}

export type TAlertColors = "green" | "red";
export interface ICart {
  cartId: number;
  items: ICartItem[];
  total: number;
}

export interface ICartItem {
  item: IProduct;
  quantity: number;
}