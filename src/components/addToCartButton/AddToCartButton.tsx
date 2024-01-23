import React from "react";

type AddToCartButtonTypes = {
  quantity: number;
  onAddToCart?: () => void;
  onDecreaseQuantity?: () => void;
  onIncreaseQuantity?: () => void;
  onRemove?: () => void;
};

const AddToCartButton: React.FC<AddToCartButtonTypes> = ({
  quantity,
  onAddToCart,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove,
}) => {
  return (
    <div className="card-actions">
      {quantity === 0 ? (
        <button className="add-to-cart" onClick={onAddToCart}>
          + Add To Cart
        </button>
      ) : (
        <div className="quantity-controls">
          <div className="quantity-display">
            <button className="quantity-button" onClick={onDecreaseQuantity}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="quantity-button" onClick={onIncreaseQuantity}>
              +
            </button>
          </div>
          <button className="remove-button" onClick={onRemove}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
