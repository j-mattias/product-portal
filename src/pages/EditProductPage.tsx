import { useParams } from "react-router-dom";
import { Alert, ProductForm } from "../components";
import { useProductsContext } from "../contexts";
import { useMessage } from "../customHooks";

export function EditProductPage() {
  const { id } = useParams();
  const { products } = useProductsContext();
  const { message, color, handleMessage } = useMessage();

  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      {message && <Alert message={message} color={color} />}
      <section className="edit-product-page flex-col">
        <h1 className="edit-product-page__title">Edit Product</h1>
        <ProductForm type="Edit" product={product} handleMessage={handleMessage} />
      </section>
    </>
  );
}
