import { ProductForm } from "../components";

export function AddProductPage() {

  return (
    <section className="add-product-page flex-col">
      <h1 className="add-product-page__title">Add Product</h1>
      <ProductForm type="Add" />
    </section>
  );
}
