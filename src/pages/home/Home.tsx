import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeBgImage from "../../assets/images/background.jpg";
import "./home.css";

const Home: React.FC = () => {
  return (
    // <section className="home-container">
    <section className="hero">
      <div className="overlay"></div>
      <img src={HomeBgImage} alt="Homepage image" className="hero-image" />
      {/* <div className="hero-content"> */}
      <Row>
        <Col>
          <h1>Welcome to Our Professional Website</h1>
          <p>Your Trusted Source for Quality Products</p>
          <a href="#store" className="cta-button">
            Explore Our Store
          </a>
        </Col>
      </Row>
      {/* </div> */}
    </section>
    //   <section className="features">
    //     <div className="feature">
    //       <h2>Quality Products</h2>
    //       <p>
    //         Discover a wide range of high-quality products curated just for you.
    //       </p>
    //     </div>
    //     <div className="feature">
    //       <h2>Exceptional Service</h2>
    //       <p>
    //         Our dedicated team is here to provide you with the best customer
    //         experience.
    //       </p>
    //     </div>
    //     <div className="feature">
    //       <h2>Secure Shopping</h2>
    //       <p>
    //         Shop with confidence using our secure and easy-to-use online
    //         platform.
    //       </p>
    //     </div>
    //   </section>
    //   <section className="testimonials">
    //     <h2>What Our Customers Say</h2>
    //     <div className="testimonial">
    //       <div className="testimonial-avatar">
    //         <img src="https://via.placeholder.com/200" alt="Customer" />
    //       </div>
    //       <p>
    //         "I had an amazing experience shopping here. The product quality is
    //         outstanding!"
    //       </p>
    //       <p className="customer-name">- Sarah Johnson</p>
    //     </div>
    //     <div className="testimonial">
    //       <div className="testimonial-avatar">
    //         <img src="https://via.placeholder.com/200" alt="Customer" />
    //       </div>
    //       <p>
    //         "The customer service is excellent. They go above and beyond to meet
    //         your needs."
    //       </p>
    //       <p className="customer-name">- John Smith</p>
    //     </div>
    //   </section>
    // </section>
  );
};

export default Home;
