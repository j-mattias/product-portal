import { useCartContext } from "../contexts";
import { IProduct } from "../interfaces";
import { Stock } from ".";
import { useEffect, useState } from "react";

interface IAddToCartButtonProps {
  product: IProduct;
  className?: string;
}

export function AddToCartButton({ product, className }: IAddToCartButtonProps) {
  const { updateCart } = useCartContext();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    updateCart("add", product, 1);
    setAdded(true);
  };

  // Reset added after 1.5s
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAdded(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [added]);

  return (
    <div className="add-to-cart-wrapper">
      <Stock stock={product.stock} className="add-to-cart__stock" />
      <button
        className={`add-to-cart-btn ${className} ${added ? "added-to-cart" : ""}`}
        onClick={handleClick}
      >
        {!added ? "Add To Cart" : "Added To Cart"}
      </button>
    </div>
  );
}
