import { StarRating, Stock } from ".";
import { IProduct } from "../interfaces"

interface IProductDetailsProps {
  product: IProduct;
}

export function ProductDetails({product}: IProductDetailsProps) {

  return (
    <section className="product-details flex-col">
      <div className="product-details__title-wrapper">
        <h1 className="product-details__title">{product.title}</h1>
        {product.brand && <h4 className="product-details__brand">{product.brand}</h4>}
      </div>
      <StarRating rating={product.rating} numStars={5} />
      <h2 className="product-details__price">$ {product.price}</h2>
      <h3 className="product-details__category">Category: {product.category}</h3>
      <h3 className="product-details__tags">Tags: {product.tags.join(", ")}</h3>
      <Stock stock={product.stock} className="product-details__stock" />
    </section>
  )
}
