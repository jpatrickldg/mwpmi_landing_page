import { Button, Card, Layout } from "antd";
import "./Content.scss";
import React from "react";
import Hero from "./Hero";
import Offers from "./Offers";
import Gallery from "./Gallery";
import Inquire from "./Inquire";

const Content = () => {
  return (
    <div className="home-content">
      <Hero />
      <Offers />
      <Gallery />
      <Inquire />
    </div>
  );
};

export default Content;
