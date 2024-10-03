import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts";
import { ImageGallery, ProductDetails, ProductInfo } from "../components";

export function ProductDetailsPage() {
  const { id } = useParams();
  const { products } = useProductsContext();
  console.log(id);

  const product = products.find((product) => product.id === Number(id));
  console.log(product);

  return (
    <>
      {!product ? (
        <section className="product-details-page">
          <h1>Could not find that product</h1>
        </section>
      ) : (
        <section className="product-details-page">
          <ImageGallery images={product.images} title={product.title} />
          <ProductDetails product={product} />
          <ProductInfo product={product} />
        </section>
      )}
    </>
  );
}
