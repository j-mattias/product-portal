import { useSearchParams } from "react-router-dom";
import { IProduct } from "../interfaces";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";

interface IProductListProps {
  products: IProduct[];
}

const MAX_RESULTS = 12;

export function ProductList({ products }: IProductListProps) {
  const [searchParams] = useSearchParams();

  // Get current page, and calculate the number of pages needed
  const currentPage = Number(searchParams.get("page")) || 1;
  const listLen = products.length;
  const numPages = Math.ceil(listLen / MAX_RESULTS);

  // Move first- and last index depending on currentPage
  const lastIndex = currentPage * MAX_RESULTS;
  const firstIndex = lastIndex - MAX_RESULTS;

  // Get the products to display
  const productResults = products.slice(firstIndex, lastIndex);

  return (
    <>
      {currentPage > numPages && products.length > 0 && <p className="results-error">{`Not enough results`}</p>}
      <div className="product-list">
        {productResults.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </>
  );
}
