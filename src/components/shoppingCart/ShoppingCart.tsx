import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "../cartItem/CartItem";
import "./shoppingCart.scss";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const navigate = useNavigate();
  const { closeCart, cartItems } = useShoppingCart();

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout", {
      state: {
        totalAmount,
      },
    });
  };

  return (
    <section className={`shopping-cart ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={closeCart}></div>
      <div className="cart-container">
        <div className="cart-header">
          <button className="close-button" onClick={closeCart}>
            &times;
          </button>
          <div className="cart-title">Cart</div>
        </div>
        <div className="cart-body">
          {cartItems.map((item) => (
            <div key={item.id}>
              <CartItem
                id={item.id}
                imgUrl={item.imgUrl!}
                price={item.price}
                quantity={item.quantity}
                title={item.title!}
              />
            </div>
          ))}
          <p className="total-amount">Total: {formatCurrency(totalAmount)}</p>

          <button
            className="submit-button checkout-btn"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
