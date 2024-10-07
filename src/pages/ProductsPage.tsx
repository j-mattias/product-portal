import { useLocation } from "react-router-dom";
import { Alert, ProductList } from "../components";
import { useProductsContext } from "../contexts";
import { useEffect } from "react";
import { useMessage } from "../customHooks";

export function ProductsPage() {
  const { products } = useProductsContext();
  const { state } = useLocation();
  const { message, color, handleMessage } = useMessage();

  useEffect(() => {
    if (state) {
      handleMessage(state.message, "red");
    }
  }, [state]);

  return (
    <>
      {message && <Alert message={message} color={color} />}
      <section className="products-page flex-col">
        <h1 className="products-page__title">Products</h1>
        <ProductList products={products} />
      </section>
    </>
  );
}
