import { ProductList } from "../components";
import { useProductsContext } from "../contexts"

export function ProductsPage() {
  const { products } = useProductsContext();

  return (
    <section className="products-page flex-col">
      <h1 className="products-page__title">Products</h1>
      <ProductList products={products} />
    </section>
  )
}
