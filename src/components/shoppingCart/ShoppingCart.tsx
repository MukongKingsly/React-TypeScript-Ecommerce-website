// import { Offcanvas, Stack } from "react-bootstrap";
// import { useShoppingCart } from "../../context/ShoppingCartContext";
// import { formatCurrency } from "../../utilities/formatCurrency";
// import { CartItem } from "../cartItem/CartItem";
// import storeItems from "../../data/items.json";

// type ShoppingCartProps = {
//   isOpen: boolean;
// };
// export function ShoppingCart({ isOpen }: ShoppingCartProps) {
//   const { closeCart, cartItems } = useShoppingCart();
//   return (
//     <Offcanvas show={isOpen} onHide={closeCart} placement="end">
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title>Cart</Offcanvas.Title>
//       </Offcanvas.Header>
//       <Offcanvas.Body>
//         <Stack gap={3}>
//           {cartItems.map((item) => (
//             <CartItem key={item.id} {...item} />
//           ))}
//           <div className="ms-auto fw-bold fs-5">
//             Total{" "}
//             {formatCurrency(
//               cartItems.reduce((total, cartItem) => {
//                 const item = storeItems.find((i) => i.id === cartItem.id);
//                 return total + (item?.price || 0) * cartItem.quantity;
//               }, 0)
//             )}
//           </div>
//         </Stack>
//       </Offcanvas.Body>
//     </Offcanvas>
//   );
// }

import React from "react";
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
    <div className={`shopping-cart ${isOpen ? "open" : ""}`}>
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
          <div className="total-amount">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const storeItem = storeItems.find((i) => i.id === cartItem.id);
                return total + (storeItem?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
