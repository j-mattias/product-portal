import { Alert, ProductForm } from "../components";
import { useMessage } from "../customHooks";

export function AddProductPage() {
  const { message, color, handleMessage } = useMessage();

  return (
    <>
      {message && <Alert message={message} color={color} />}
      <section className="add-product-page flex-col">
        <h1 className="add-product-page__title">Add Product</h1>
        <ProductForm type="Add" handleMessage={handleMessage} />
      </section>
    </>
  );
}
