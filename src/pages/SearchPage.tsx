import { ProductList } from "../components";
import { useSearchContext } from "../contexts"

export function SearchPage() {
  const {results} = useSearchContext();

  return (
    <section className="search-page flex-col">
      <h1 className="search-page__title">Search results</h1>
      <ProductList products={results} />
    </section>
  )
}
