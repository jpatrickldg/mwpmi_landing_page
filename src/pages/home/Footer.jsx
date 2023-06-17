import { Layout } from "antd";
import "./Footer.scss";
import React from "react";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="home-footer">
      <div>
        <a href="#">
          <h3>MODERN WORLD</h3>
          <span>Property Management Inc.</span>
        </a>
      </div>
      <div>
        <h3>Contact</h3>
        <div>
          <EnvironmentOutlined />
          <span>
            1985 3rd Flr, Recto Ave., Corner S.H. Loyola St., Sampalco, Manila
          </span>
        </div>
        <div>
          <PhoneOutlined />
          <div>
            <span>0928-222-1010</span>
            <span>0927-516-8899</span>
          </div>
        </div>
        <div>
          <a href="https://www.facebook.com/ucbresidences">
            <img
              src="https://img.icons8.com/?size=512&id=yGcWL8copNNQ&format=png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
