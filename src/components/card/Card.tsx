import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import { ProductType } from "../../types/types";
import AddToCartButton from "../addToCartButton/AddToCartButton";
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
        <AddToCartButton
          quantity={quantity}
          onAddToCart={onAddToCart}
          onDecreaseQuantity={onDecreaseQuantity}
          onIncreaseQuantity={onIncreaseQuantity}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
};

export default Card;
