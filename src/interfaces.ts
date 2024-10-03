export interface IProduct {
  brand: string | null;
  category: string;
  description: string;
  dimensions: IDimensions;
  id: number;
  images: string[];
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: IComment[];
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

interface IComment {
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
  reviews: IComment[];
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