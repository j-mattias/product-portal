import { CartItem } from ".";
import { useCartContext } from "../contexts";

interface ICartProps {
  handleClick: () => void;
}

export function Cart({ handleClick }: ICartProps) {
  const { cart, clearCart } = useCartContext();
  const cartItems = cart.items;

  return (
    <>
      <div className="cart-backdrop" onClick={handleClick}></div>
      <section className="cart flex-col">
        <div className="cart__title-wrapper">
          <h2 className="cart__title">Cart</h2>
          <i className="cart__close fa-solid fa-x" onClick={handleClick}></i>
        </div>
        {cartItems.length === 0 ? (
          <p className="cart__empty">The cart is empty.</p>
        ) : (
          <>
            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.item.id} handleClick={handleClick} />
            ))}
            <h3 className="cart__total">Total: {cart.total.toFixed(2)}</h3>
            <button className="cart__btn-checkout">Checkout</button>
            <button className="cart_btn-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </section>
    </>
  );
}
