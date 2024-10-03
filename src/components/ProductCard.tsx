import { IProduct } from "../interfaces";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <article className="product-card b-radius-4 box-shadow">
      <figure className="product-card__figure">
        <img
          src={product.thumbnail}
          alt={`${product.title} packshot image`}
          className="product-card__img"
        />
      </figure>
      <div className="product-card__wrapper">
        <h4 className="product-card__title">{product.title}</h4>
        <p className="product-card__rating">Rating: {product.rating}</p>
        <p className="product-card__price">$ {product.price}</p>
        <p className="product-card__stock">Stock: {product.stock}</p>
        <button className="product-card__edit">Edit</button>
        <button className="product-card__delete">Delete</button>
      </div>
    </article>
  );
}
