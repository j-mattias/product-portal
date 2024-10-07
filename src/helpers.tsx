import { IFetchOptions, IProduct, IProductRaw } from "./interfaces";

// Returns a new array with product objects mapped to IProduct scheme
export function mapProductData(arr: IProductRaw[]) {
  return arr.map((product) => ({
    brand: product.brand ? product.brand : "",
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

export function getNewId(arr: IProduct[]) {
  if (arr.length > 0) {
    return Math.max(...arr.map((a) => a.id)) + 1;
  }
  return 1;
}

export function validateProduct(product: IProduct) {
  // Validate category isn't null
  if (!product.category) return false;

  // Validate that props are strings
  if (
    !isValidString(product.brand) ||
    !isValidString(product.category) ||
    !isValidString(product.description )||
    !isValidString(product.returnPolicy) ||
    !isValidString(product.shippingInformation) ||
    !isValidString(product.thumbnail) ||
    !isValidString(product.title) ||
    !isValidString(product.warrantyInformation)
  ) {
    return false;
  }

  // Validate that props are numbers
  if (
    !isValidNumber(product.id) ||
    !isValidNumberInRange(product.rating, 5) ||
    !isValidNumberInRange(product.dimensions.width) ||
    !isValidNumberInRange(product.dimensions.height) ||
    !isValidNumberInRange(product.dimensions.depth) ||
    !isValidNumberInRange(product.stock) ||
    !isValidNumberInRange(product.price)
  ) {
    return false;
  }

  // Validate that reviews is an array
  if (!Array.isArray(product.reviews)) return false;

  // Validate there are values in the images and tags arrays
  if (product.images.length === 0 || product.tags.length === 0) return false;

  // Validate that there are string values in the images and tags arrays
  // Whether it's a valid img url or not is not validated
  for (let img of product.images) {
    if (!isValidString(img)) return false;
  }

  for (let tag of product.tags) {
    if (!isValidString(tag)) return false;
  }

  return true;
}

// Validate string
function isValidString(s: string) {
  return (s.trim() && typeof s === "string");
}

// Validate number
function isValidNumber(n: number) {
  return !isNaN(n) && typeof n === "number";
}

// Ensure valid number above 0 or in a set range
function isValidNumberInRange(n: number, high?: number, low = 0) {
  return isValidNumber(n) && n >= low && (high ? n <= high : true);
}

// Generic fetch function to avoid repetition
export async function fetchData(url: string, notOkMsg: string, options?: IFetchOptions) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(notOkMsg);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
};