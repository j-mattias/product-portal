import { useEffect } from "react";
import { ProductList } from "../components";
import { useProductsContext, useSearchContext } from "../contexts";
import { useSearchParams } from "react-router-dom";

export function SearchPage() {
  const { results, search, searchTerm } = useSearchContext();
  const { products } = useProductsContext();
  const [searchParams] = useSearchParams();

  // If a URL is pasted with a query, perform the search. Make sure products are loaded
  useEffect(() => {
    const q = searchParams.get("q");
    
    if (products.length > 0 && q) {
      search(q);
    }
  }, [products]);

  return (
    <section className="search-page flex-col">
      <h1 className="search-page__title">{`Search results for: ${searchTerm}`}</h1>
      <ProductList products={results} />
    </section>
  );
}
