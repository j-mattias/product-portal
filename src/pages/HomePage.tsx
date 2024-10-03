import { useProductsContext } from "../contexts";
import { useFetchProducts } from "../customHooks";

const URL = "https://dummyjson.com/products?limit=10";

export function HomePage() {
  const { products } = useProductsContext();
  const { isPending, error } = useFetchProducts(URL);

  return (
    <>
      <div>HomePage</div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products.length > 0 && <button onClick={() => console.log(products)}>Click</button>}
    </>
  );
}
