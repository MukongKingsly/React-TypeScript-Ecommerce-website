// Home.tsx
import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components/spinner/Spinner";
import { ProductType } from "../../types/types";
import { StoreItem } from "../../components/storeItem/StoreItem";
import "./home.scss";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/data.json",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      // Shuffle the products array randomly
      const shuffledProducts = data.products.sort(() => Math.random() - 0.5);

      // Select the first 6 products
      const selectedProducts = shuffledProducts.slice(0, 6);

      // Replace image URLs
      const productsWithModifiedImages = selectedProducts.map(
        (product: ProductType) => {
          const modifiedImgs = product.imgs.map((img) =>
            img.replace(
              "https://gitcdn.link/cdn/seebham",
              "https://raw.githubusercontent.com/seebham"
            )
          );

          return { ...product, imgs: [modifiedImgs[0]] };
        }
      );

      setFeaturedProducts(productsWithModifiedImages);
    } catch (err: any) {
      setError(err.message);
      console.error(20, err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleImgClicked = () => {
    navigate("/store");
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className="landing-page">
      <header className="header">
        <div className="svg-padding">
          <div className="call-to-action">
            <h1>Your One-Stop Online Shop</h1>
            <h2>Delivering Happiness, One Package at a Time</h2>
            <button aria-label="Get started" onClick={() => navigate("/store")}>
              Get Started
            </button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,240C672,224,768,192,864,165.3C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        {error && <p className="errorText">{error}</p>}
        {loading && <Spinner />}
        <div className="featured-productsContainer">
          {featuredProducts.map((product: ProductType, index) => (
            <div key={index} className="store-item">
              <StoreItem
                onClickImg={handleImgClicked}
                id={product.id}
                name={product.title}
                price={product.price}
                imgUrl={product.imgs[0]}
                title={product.title}
              />
              {/* <img src={product.imgs[0]} alt={product.title} />
              <p>{product.title}</p>
              <span>${product.price}</span> */}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
