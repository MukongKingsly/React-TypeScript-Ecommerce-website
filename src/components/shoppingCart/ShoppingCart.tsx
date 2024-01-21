import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "../cartItem/CartItem";
import storeItems from "../../data/items.json";
import "./shoppingCart.scss";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

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
          {cartItems.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
          <p className="total-amount">
            Total: &nbsp;
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const storeItem = storeItems.find((i) => i.id === cartItem.id);
                return total + (storeItem?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </p>

          <button className="submit-button checkout-btn">Checkout</button>
        </div>
      </div>
    </section>
  );
}
