import React from "react";

type ReviewerType = {
  name: string;
  title: string;
};

type ProductDetailsType = {
  Brand?: string;
  RAM?: string;
  price?: number;
  specs?: string[];
  reviews?: ReviewerType[];
  category?: string;
};

const SingleProductDetails: React.FC<ProductDetailsType> = (productDetails) => {
  const { Brand, RAM, price, specs, reviews, category } = productDetails;

  return category?.toLowerCase() === "mobiles" ? (
    <div className="mobile-details">
      {Brand && <p>Brand: {Brand}</p>}
      {RAM && <p>RAM: {RAM}</p>}
      {price && <p>Price: {price}</p>}
      {specs && <p>Specs: {specs}</p>}
      {reviews && (
        <>
          <h4>Reviews</h4>
          {reviews.map((reviewer: ReviewerType, index: number) => (
            <div key={index} className="single-review">
              <p>{reviewer.name}:</p>
              <p>{reviewer.title}:</p>
            </div>
          ))}
        </>
      )}
    </div>
  ) : (
    <>{JSON.stringify(productDetails)}</>
  );
};

export default SingleProductDetails;
