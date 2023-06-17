import React from "react";
import "./Hero.scss";
import { Button } from "antd";

const Hero = () => {
  return (
    <section class="hero">
      <div class="hero-content">
        <h1>
          Looking for a <span>home</span> near your campus?
        </h1>
        <p>
          Modern World Property Management Inc. offers various type of
          accomodation all around University Belt.
        </p>
        <a href="#inquire">
          <Button type="primary">Inquire Now</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
