import React from "react";
import "./Gallery.scss";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <Carousel className="gallery-carousel" autoplay>
        <div>
          <img
            src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/329241370_1148202752530561_2242798955756227963_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFto8cXtP1wZkPxW5BIdncXCM1-8ZeRA0AIzX7xl5EDQFnrMoB2EVgQ-dE3FiooD6I&_nc_ohc=cD7SkYWRxz8AX_gjnrx&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfAyfR-bDwbBFCDcQEHz3gcEvYVdHMRnGnkj4iW3CCgiFg&oe=64923651"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/329264832_2379831745516265_7259725856232443989_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFAPtsoLED4naEe9QiL9Ihqzn_ZZDDW2WnOf9lkMNbZaU4HIg0-NyVE9Xrwc6bN5Dw&_nc_ohc=GVNQhZErOboAX-hoo1N&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfA6XtG_8J5VANMBfDs950kb9lMWov-gCCZ_2MP2lgLd_A&oe=649245E3"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/329613428_2394704220702925_3944927624196451364_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEMqjOf65i6t7uBAa8fNzKd6OPgESGI58Do4-ARIYjnwNxr9QmLflMbpy3FR681RjM&_nc_ohc=MAGaMQfV97gAX_FBPTC&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBPO7xydT1yTPUh8JVJH4pGD0QiYekumWDnjtTDgX8RrQ&oe=64929D7F"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Gallery;
