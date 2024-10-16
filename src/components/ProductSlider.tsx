import { IProduct } from "../interfaces";
import { ProductCard } from "./ProductCard";

interface IProductSliderProps {
  title: string;
  products: IProduct[];
}

export function ProductSlider({ title, products }: IProductSliderProps) {
  return (
    <section className="product-slider flex-col">
      <h2 className="product-slider__title">{title}</h2>
      <div className="product-slider__container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
