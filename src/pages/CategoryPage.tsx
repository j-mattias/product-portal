import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts";
import { ProductList } from "../components";

export function CategoryPage() {
  const { name } = useParams();
  const { products } = useProductsContext();

  const categoryProducts = products.filter((p) => p.category === name);

  return (
    <section className="category-page flex-col">
      <h1 className="category-page__title">{name?.replace("-", " ")}</h1>
      <ProductList products={categoryProducts} />
    </section>
  );
}
