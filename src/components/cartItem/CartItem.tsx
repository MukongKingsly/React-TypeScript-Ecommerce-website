// import { Button, Stack } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
// import storeItems from "../data/items.json";

// type CartItemProps = {
//     id: number
//     quantity: number
// }

// export function CartItem({ id, quantity }: CartItemProps) {
//     const { removeFromCart } = useShoppingCart();
//     const item = storeItems.find(i => i.id === id)
//     if (item == null) return null
//     return (
//         <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
//             <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
//             {/* className="me-auto" pushes everything to the far right */}
//             <div className="me-auto">
//                 <div>
//                     {item.name} {quantity > 1 && <span className="text-muted" style={{ fontSize: "0.65rem" }}>X{quantity}</span>
//                     }
//                 </div>
//                 <div className="text-muted" style={{ fontSize: "0.75rem" }}>
//                     {formatCurrency(item.price)}
//                 </div>
//                 </div >
//                 <div>{formatCurrency(item.price * quantity)}</div>
//                 <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
//         </Stack >
//     )
// }

import React from "react";
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
      <img src={item.imgUrl} alt={item.name} className="cart-item__image" />
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

// export default CartItem;
