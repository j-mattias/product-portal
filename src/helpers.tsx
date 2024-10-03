import { IProductRaw } from "./interfaces";

// Returns a new array with product objects mapped to IProduct scheme
export function mapProductData(arr: IProductRaw[]) {
  return arr.map((product) => ({
    brand: product.brand ? product.brand : null,
    category: product.category,
    description: product.description,
    dimensions: product.dimensions,
    id: product.id,
    images: product.images,
    price: product.price,
    rating: product.rating,
    returnPolicy: product.returnPolicy,
    reviews: product.reviews,
    shippingInformation: product.shippingInformation,
    stock: product.stock,
    tags: product.tags,
    thumbnail: product.thumbnail,
    title: product.title,
    warrantyInformation: product.warrantyInformation,
  }));
}
