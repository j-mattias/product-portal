import { AddToCartButton, StarRating, Tags } from ".";
import { IProduct } from "../interfaces";

interface IProductDetailsProps {
  product: IProduct;
}

export function ProductDetails({ product }: IProductDetailsProps) {
  return (
    <section className="product-details flex-col">
      <p className="product-details__category">{product.category}</p>
      <div className="product-details__title-wrapper">
        <h1 className="product-details__title">{product.title}</h1>
        {product.brand && <h4 className="product-details__brand">{product.brand}</h4>}
      </div>
      <StarRating rating={product.rating} numStars={5} />
      <h2 className="product-details__price">$ {product.price}</h2>
      <div className="product-details__tags-wrapper">
        <h4 className="product-details__tags">Tags</h4>
        <Tags tags={product.tags} className="product-details__tags" />
      </div>
      <AddToCartButton className="product-details__add-btn" product={product} />
    </section>
  );
}
