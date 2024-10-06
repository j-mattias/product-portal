import { useProductsContext } from "../contexts";

export function HomePage() {
  const { products } = useProductsContext();

  return (
    <>
      <div>HomePage</div>
      {products.length > 0 && <button onClick={() => console.log(products)}>Click</button>}
    </>
  );
}
