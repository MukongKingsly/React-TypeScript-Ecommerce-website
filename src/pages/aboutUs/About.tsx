import React from "react";
import "./aboutUs.scss";

const AboutUs: React.FC = () => {
  return (
    <section className="container">
      <div>
        <div>
          <h1>About Us</h1>
          <p>Our Story, Mission, and Commitment to Quality</p>
        </div>
      </div>
      <section>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          elementum purus at dolor vulputate bibendum. Suspendisse potenti.
          Phasellus volutpat justo non laoreet volutpat. Nulla facilisi. Morbi
          in bibendum nunc, ut maximus lectus.
        </p>
        <p>
          Integer at sagittis urna. Fusce auctor quam a odio euismod fringilla.
          Phasellus finibus ipsum nec cursus hendrerit. Donec dapibus, nunc id
          ultrices aliquam, ipsum arcu eleifend purus, vel elementum nunc leo a
          urna.
        </p>
      </section>
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          justo a elit lacinia dictum. In ac massa eu libero gravida tincidunt.
        </p>
        <p>
          Vestibulum volutpat euismod fringilla. Integer semper varius
          facilisis. Quisque id tincidunt nisl, id efficitur urna. Donec nec
          bibendum ipsum, ac fermentum arcu.
        </p>
      </section>
      <section className="commitment">
        <h2>Our Commitment to Quality</h2>
        <p>
          Vestibulum volutpat euismod fringilla. Integer semper varius
          facilisis. Quisque id tincidunt nisl, id efficitur urna. Donec nec
          bibendum ipsum, ac fermentum arcu.
        </p>
        <p>
          In eu lectus quam. Vivamus dictum vestibulum quam, ut eleifend ex
          lacinia eget. Curabitur dignissim, nisi id hendrerit tempus, nunc urna
          varius tortor.
        </p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <h3>David Johnson</h3>
          <p>Marketing Director</p>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
