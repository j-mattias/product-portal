import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts";
import { ImageGallery, ProductDetails, ProductInfo, ProductReviews } from "../components";

export function ProductDetailsPage() {
  const { id } = useParams();
  const { products } = useProductsContext();

  const product = products.find((product) => product.id === Number(id));

  return (
    <section className="product-details-page">
      {!product ? (
        <h1>Could not find that product</h1>
      ) : (
        <>
          <ImageGallery images={product.images} title={product.title} />
          <ProductDetails product={product} />
          <ProductInfo product={product} />
          <ProductReviews reviews={product.reviews} />
        </>
      )}
    </section>
  );
}
