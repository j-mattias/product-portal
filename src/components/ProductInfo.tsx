import { IProduct } from "../interfaces"

interface IProductInfoProps {
  product: IProduct;
}

export function ProductInfo({product}: IProductInfoProps) {
  const computedDimensions = `${product.dimensions.width}cm x ${product.dimensions.height}cm x ${product.dimensions.depth}cm`;

  return (
    <section className="product-info flex-col">
        <h2 className="product-info__title">Description</h2>
        <p className="product-info__text">{product.description}</p>
      <div className="product-info__grid">
        <div className="product-info__wrapper flex-col">
          <h2 className="product-info__title">Warranty</h2>
          <p className="product-info__text">{product.warrantyInformation}</p>
        </div>
        <div className="product-info__wrapper flex-col">
          <h2 className="product-info__title">Return Policy</h2>
          <p className="product-info__text">{product.returnPolicy}</p>
        </div>
        <div className="product-info__wrapper flex-col">
          <h2 className="product-info__title">Dimensions</h2>
          <p className="product-info__text">{computedDimensions}</p>
        </div>
        <div className="product-info__wrapper flex-col">
          <i className="product-info__title fa-solid fa-truck"></i>
          <p className="product-info__text">{product.shippingInformation}</p>
        </div>
      </div>
    </section>
  )
}
