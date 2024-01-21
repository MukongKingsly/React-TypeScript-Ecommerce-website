import React, { useEffect } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";
import "./cartItem.scss";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  quantity,
}: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <div className="cart-item">
      <div className="img-wrapper">
        <img src={item.imgUrl} alt={item.name} className="cart-item__image" />
      </div>
      <div className="cart-item__details">
        <div className="cart-item__name">
          {item.name}{" "}
          {quantity > 1 && (
            <span className="cart-item__quantity">X{quantity}</span>
          )}
        </div>
        <div className="cart-item__price">{formatCurrency(item.price)}</div>
      </div>
      <div className="cart-item__total">
        {formatCurrency(item.price * quantity)}
      </div>
      <button
        className="cart-item__remove-button"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  );
};
