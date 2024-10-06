import { Link } from "react-router-dom";
import { IProduct } from "../interfaces";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {

  return (
    <article className="product-card b-radius-4 box-shadow">
      <Link className="product-card__link" to={`/product/${product.id}`}>
        <figure className="product-card__figure">
          <img
            src={product.thumbnail}
            alt={`${product.title} packshot image`}
            className="product-card__img"
          />
        </figure>
      </Link>
      <div className="product-card__wrapper">
        <Link className="product-card__link" to={`/product/${product.id}`}>
          <h4 className="product-card__title">{product.title}</h4>
        </Link>
        <p className="product-card__rating">Rating: {product.rating}</p>
        <p className="product-card__price">$ {product.price}</p>
        <p className="product-card__stock">Stock: {product.stock}</p>
        <Link className="product-card__edit b-radius-4" to={`/edit-product/${product.id}`}>Edit</Link>
      </div>
    </article>
  );
}
