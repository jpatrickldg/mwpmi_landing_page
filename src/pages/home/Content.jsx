import { Button, Card, Layout } from "antd";
import "./Content.scss";
import React from "react";
import Hero from "./Hero";
import Offers from "./Offers";
import Gallery from "./Gallery";
import Inquire from "./Inquire";
import Location from "./Location";
import Bedspace from "./Bedspace";
import Studio from "./Studio";
import Condo from "./Condo";

const Content = () => {
  return (
    <div className="home-content">
      <Hero />
      <Offers />
      <Gallery />
      <Inquire />
      <Location />
    </div>
  );
};

export default Content;
