import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import { ProductType } from "../../types/types";
import "./card.scss";

type CardProps = {
  imageUrl: any;
  title: string;
  price: number;
  onClickImg: React.MouseEventHandler<HTMLImageElement> | undefined;
  onAddToCart?: () => void;
  onDecreaseQuantity?: () => void;
  onIncreaseQuantity?: () => void;
  onRemove?: () => void;
  quantity: number;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  price,
  onClickImg,
  onAddToCart,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove,
  quantity,
}: CardProps) => {
  return (
    <div className="custom-card">
      <img
        src={imageUrl}
        alt={title}
        className="card-image"
        onClick={onClickImg}
        loading="lazy"
      />
      <div className="card-body">
        <div className="card-title">
          <p className="title" title={title}>
            {title}
          </p>
          <p className="price text-muted">{formatCurrency(price)}</p>
        </div>
        <div className="card-actions">
          {quantity === 0 ? (
            <button className="add-to-cart" onClick={onAddToCart}>
              + Add To Cart
            </button>
          ) : (
            <div className="quantity-controls">
              <div className="quantity-display">
                <button
                  className="quantity-button"
                  onClick={onDecreaseQuantity}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={onIncreaseQuantity}
                >
                  +
                </button>
              </div>
              <button className="remove-button" onClick={onRemove}>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
