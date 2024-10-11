import { useCartContext } from "../contexts";
import { IProduct } from "../interfaces";
import { Stock } from ".";

interface IAddToCartButtonProps {
  product: IProduct;
  className?: string;
}

export function AddToCartButton({ product, className }: IAddToCartButtonProps) {
  const { updateCart } = useCartContext();

  return (
    <div className="add-to-cart-wrapper">
      <Stock stock={product.stock} className="add-to-cart__stock" />
      <button
        className={`add-to-cart-btn ${className}`}
        onClick={() => updateCart("add", product, 1)}
      >
        Add To Cart
      </button>
    </div>
  );
}
