// checkout.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { formatCurrency } from "../../utilities/formatCurrency";
import "./checkout.scss";

const Checkout: React.FC = () => {
  const location = useLocation();
  const totalAmount = location.state.totalAmount;
  return (
    <section className="checkout-container">
      <h2>Checkout</h2>
      {totalAmount && <h4>Total: {formatCurrency(totalAmount)}</h4>}
      <form className="checkout-form">
        <div className="row">
          <div className="row-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>

          <div className="row-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="address" id="address" name="address" required />
        </div>

        <div className="row">
          <div className="row-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>

          <div className="row-group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input type="text" id="zipCode" name="zipCode" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" required />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" required />
        </div>

        <div className="row">
          <div className="row-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" name="expiryDate" required />
          </div>

          <div className="row-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
        </div>

        <button type="submit" aria-label="Place order">
          Place Order
        </button>
      </form>
    </section>
  );
};

export default Checkout;
