import { Link } from "react-router-dom";
import { useCartContext } from "../contexts";
import { ICartItem } from "../interfaces";

interface ICartItemProps {
  cartItem: ICartItem;
  handleClick: () => void;
}

export function CartItem({ cartItem, handleClick }: ICartItemProps) {
  const { updateCart } = useCartContext();

  return (
    <article className="cart-item box-shadow">
      <Link className="cart-item__link" to={`product/${cartItem.item.id}`} onClick={handleClick}>
        <figure className="cart-item__figure">
          <img src={cartItem.item.thumbnail} alt={`${cartItem.item.title} packshot image`} />
        </figure>
      </Link>
      <div className="cart-item__content-wrapper">
        <div className="cart-item__info-wrapper">
          <Link
            className="cart-item__link"
            to={`product/${cartItem.item.id}`}
            onClick={handleClick}
          >
            <h5 className="cart-item__title">{cartItem.item.title}</h5>
          </Link>
          <p className="cart-item__price">$ {cartItem.item.price}</p>
        </div>
        <div className="cart-item__btn-wrapper">
          <div className="cart-item__item-counter">
            <button
              className="cart-item__btn cart-item__btn--remove"
              onClick={() => updateCart("remove", cartItem.item, 1)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <p className="cart-item__quantity">{cartItem.quantity}</p>
            <button
              className="cart-item__btn cart-item__btn--add"
              onClick={() => updateCart("add", cartItem.item, 1)}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <i
            className="cart-item__btn cart-item__btn--clear fa-solid fa-trash-can"
            onClick={() => updateCart("clear", cartItem.item)}
          ></i>
        </div>
      </div>
    </article>
  );
}
