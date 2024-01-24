import React from "react";
import "./footer.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <hr />
      <p>© {year} Our Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
