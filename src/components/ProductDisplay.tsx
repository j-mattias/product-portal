import { Link } from "react-router-dom";
import { IProduct } from "../interfaces";
import { AddToCartButton, StarRating } from ".";

interface IProductDisplayProps {
  product: IProduct;
}

export function ProductDisplay({ product }: IProductDisplayProps) {
  return (
    <article className={`product-display`}>
      <Link className="product-display__link link-wrapper" to={`/product/${product.id}`}>
        <figure className="product-display__figure">
          <img src={product.images[0]} alt={`${product.title} packshot image`} />
        </figure>
      </Link>
      <div className="product-display__wrapper flex-col">
        <Link className="product-display__link" to={`/product/${product.id}`}>
          <h2 className="product-display__title">{product.title}</h2>
        </Link>
        {product.brand && <h4 className="product-display__brand">{product.brand}</h4>}
        <StarRating rating={product.rating} numStars={5} />
        <p className="product-display__description">{product.description}</p>
        <h3 className="product-display__price">$ {product.price}</h3>
        <AddToCartButton className="product-display__add-btn" product={product} />
      </div>
    </article>
  );
}
