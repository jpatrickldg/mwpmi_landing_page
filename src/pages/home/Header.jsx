import React from "react";
import "./Header.scss";
import { Button, Layout } from "antd";

const Header = () => {
  return (
    <div className="home-header">
      <div className="logo-container">
        <span className="main-logo">MODERN WORLD</span>
        <span className="sub-logo">Property Management Inc.</span>
      </div>
      <div className="btn-container">
        <a href="#inquire">
          <Button type="primary">Inquire Now</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
