import { Link } from "react-router-dom";
import { IProduct } from "../interfaces"
import { StarRating } from "./StarRating";
import { Stock } from "./Stock";

interface IProductDisplayProps {
  product: IProduct;
}

export function ProductDisplay({product} :IProductDisplayProps) {

  return (
    <article className={`product-display`}>
      <Link className="product-display__link" to={`/product/${product.id}`}>
        <figure className="product-display__figure">
          <img src={product.images[0]} alt={`${product.title} packshot image`} />
        </figure>
      </Link>
      <div className="product-display__wrapper flex-col">
        <h2 className="product-display__title">{product.title}</h2>
        {product.brand && <h4 className="product-display__brand">{product.brand}</h4>}
        <StarRating rating={product.rating} numStars={5} />
        <h2>Description</h2>
        <p className="product-display__description">{product.description}</p>
        <h3 className="product-display__price">$ {product.price}</h3>
        <Stock stock={product.stock} />
      </div>
    </article>
  );
}
