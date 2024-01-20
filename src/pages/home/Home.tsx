import React from "react";
import { Row, Col } from "react-bootstrap";
import HomeBgImage from "../../assets/images/background.jpg";
import "./home.css";

const Home: React.FC = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <img src={HomeBgImage} alt="Homepage image" className="hero-image" />
      <Row>
        <Col>
          <h1>Welcome to Our Professional Website</h1>
          <p>Your Trusted Source for Quality Products</p>
          <a href="#store" className="cta-button">
            Explore Our Store
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default Home;
