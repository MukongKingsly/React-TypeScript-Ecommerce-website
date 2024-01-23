import React from "react";
import StarRating from "../starRating/StarRating";
import AddToCartButton from "../addToCartButton/AddToCartButton";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ProductType, ReviewerType } from "../../types/types";
import "./singleProductDetails.scss";

const SingleProductDetails: React.FC<ProductType> = (productDetails) => {
  const { Brand, RAM, price, specs, reviews, Language, Genre, title, id } =
    productDetails;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const handleAddToCart = () => {
    increaseCartQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    decreaseCartQuantity(id);
  };

  const handleIncreaseQuantity = () => {
    increaseCartQuantity(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <>
      <AddToCartButton
        quantity={quantity}
        onAddToCart={handleAddToCart}
        onDecreaseQuantity={handleDecreaseQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onRemove={handleRemoveFromCart}
      />
      <div className="single-product-details">
        {Brand && (
          <p>
            <strong>Brand: </strong>
            {Brand}
          </p>
        )}
        {RAM && (
          <p>
            <strong>RAM: </strong>
            {RAM}
          </p>
        )}
        {Language && (
          <p>
            <strong>Language: </strong>
            {Language}
          </p>
        )}
        {Genre && (
          <p>
            <strong>Genre</strong>
            {Genre}
          </p>
        )}
        {title && (
          <p>
            <strong>Title: </strong>
            {title}
          </p>
        )}
        {price && (
          <p>
            <strong>Price: </strong>
            {price}
          </p>
        )}
        {specs && (
          <p>
            <strong>Specs: </strong>
            {specs}
          </p>
        )}
        {reviews && (
          <>
            <h4>Reviews</h4>
            {reviews.map((reviewer: ReviewerType, index: number) => (
              <div key={index} className="single-review">
                <p>{reviewer.name}:</p>
                {reviewer.title && <p>{reviewer.title}</p>}
                {/* <p>{reviewer.rating}</p> */}
                <StarRating rating={reviewer.rating ?? 1} />
              </div>
            ))}
          </>
        )}
        {/* {JSON.stringify(productDetails)} */}
      </div>
    </>
  );
};

export default SingleProductDetails;
