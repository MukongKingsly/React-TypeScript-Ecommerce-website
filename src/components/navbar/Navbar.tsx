// import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useShoppingCart } from "../../context/ShoppingCartContext";

// export function Navbar() {
//   const { openCart, cartQuantity } = useShoppingCart();
//   return (
//     <NavbarBs sticky="top" className="bg-white shadow-sm navbar-container">
//       <Container className="d-flex justify-content-between">
//         <NavLink className="logo" to="/">
//           Mukong
//         </NavLink>

//         <Nav className="">
//           <Nav.Link to="/store" as={NavLink} className="mx-3">
//             Store
//           </Nav.Link>
//           <Nav.Link to="/about" as={NavLink} className="mx-3">
//             About
//           </Nav.Link>
//           <Nav.Link to="/contact" as={NavLink} className="mx-3">
//             Contact
//           </Nav.Link>
//         </Nav>
//         <div
//           className="d-flex align-items-center justify-content-end"
//           style={{ width: 150 }}
//         >
//           {cartQuantity > 0 && (
//             <Button
//               onClick={openCart}
//               style={{ width: "3rem", height: "3rem", position: "relative" }}
//               variant="outline-primary"
//               className="rounded-circle mx-4
//     "
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 576 512"
//                 fill="currentColor"
//               >
//                 <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
//               </svg>
//               <div
//                 className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
//                 style={{
//                   color: "#fff",
//                   width: "1.5rem",
//                   height: "1.5rem",
//                   position: "absolute",
//                   bottom: 0,
//                   right: 0,
//                   transform: "translate(25%, 25%)",
//                 }}
//               >
//                 {cartQuantity}
//               </div>
//             </Button>
//           )}
//           <Nav.Link>Account</Nav.Link>
//         </div>
//       </Container>
//     </NavbarBs>
//   );
// }

import React from "react";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./navbar.scss";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <nav className="navbar-container">
      <div className="navbar-inner container">
        <NavLink to="/" className="logo">
          Mukong
        </NavLink>

        <div className="nav-links">
          <NavLink to="/store" className="nav-link">
            Store
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        <div className="nav-actions">
          {cartQuantity > 0 && (
            <button className="cart-button" onClick={openCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div className="cart-badge">{cartQuantity}</div>
            </button>
          )}
          <NavLink to="/account" className="nav-link">
            Account
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
