import { IProduct } from "../interfaces";
import { ProductCard } from "./ProductCard";

interface IProductListProps {
  products: IProduct[];
}

export function ProductList({ products }: IProductListProps) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
