import { IProduct } from "../interfaces"

interface IProductDetailsProps {
  product: IProduct;
}

export function ProductDetails({product}: IProductDetailsProps) {

  return (
    <section className="product-details flex-col">
      <div className="product-details__title-wrapper">
        <h1 className="product-details__title">{product.title}</h1>
        <h4 className="product-details__brand">{product.brand}</h4>
      </div>
      <h3 className="product-details__rating">Rating: {product.rating}</h3>
      <h2 className="product-details__price">$ {product.price}</h2>
      <h3 className="product-details__category">Category: {product.category}</h3>
      <h3 className="product-details__tags">Tags: {product.tags.join(", ")}</h3>
      <h3 className="product-details__stock">Stock: {product.stock}</h3>
    </section>
  )
}
