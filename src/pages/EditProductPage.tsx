import { useParams } from "react-router-dom";
import { ProductForm } from "../components";
import { useProductsContext } from "../contexts";

export function EditProductPage() {
  const { id } = useParams();
  const { products } = useProductsContext();

  const product = products.find(p => p.id === Number(id));

  return (
    <section className="edit-product-page flex-col">
      <h1 className="edit-product-page__title">Edit Product</h1>
      <ProductForm type="Edit" product={product} />
    </section>
  );
}
