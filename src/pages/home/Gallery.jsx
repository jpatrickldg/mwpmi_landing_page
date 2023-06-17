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
            src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/289015412_5222127381190364_4948228111121627701_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGXDHsF-V-WU__UhBc1E5ZfbGg9smcvbAdsaD2yZy9sB_TWaO7S8TJANhgevl8bRrY&_nc_ohc=7c3Us2FyvtAAX8pMI-I&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfA4HZe4ImDyDxpB6WS7OTdWMxhJ8ndfIOv1UzAxqXdTqA&oe=64916711"
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
        <div>
          <img
            src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/329349471_708903990897197_4321011593324135361_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEQNo-F-zyBITffc5GsqssElBZsrh_ADVSUFmyuH8ANVGSEYlHvSPpZLLQ6LNrPL_I&_nc_ohc=3luBmKYNvKAAX_caTqg&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfDcWtFnQDPMrfVvuE1AP1OYMGSyj82ZokrGAK74wAJreQ&oe=64919934"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/261329173_4611428392260269_2359471581394851725_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFWfdr4l6QxYDkGdeRpdE_AEGlm8MFFLHoQaWbwwUUsegDc1rIotzLhHOORg0gGzQk&_nc_ohc=lhMvDQzf_n0AX8wdHDK&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfDfVXXGIUmYKW70F387vCX9W30ZSstXYCmAIcIrjKlh2Q&oe=6492CEA9"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t1.6435-9/144969132_3713410388728745_4453709193414604573_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeETQ6xIhcGutKeiiSZniXmiZ72Dvy_DJoBnvYO_L8MmgEN5I89b6fY50TJncsvxpY8&_nc_ohc=fPoHbAD7rqoAX_YVl--&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfChGxFA93izOefVRDxayqe1znDBU8eo13jNppEsiPKejg&oe=64B4EA30"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-9/109133196_3162248550511601_9207632033912325936_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeGBrS_a9P3AJ_rgX-iEUIjXsRSbBIlFpmuxFJsEiUWma6atEhd2g8OWhI1xO_LJHt0&_nc_ohc=MDezTvt7G2gAX9C2NaY&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfDc78doKhHQwewlEQLIoLiSHbIFT0wKIOi-4rUeoVWIdA&oe=64B4E06C"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.6435-9/70925391_2488620547874408_5475062148155572224_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEoUVm_2ADv32AOGAU5XNpowHipRJROyY7AeKlElE7Jjr1sM-c4qnln46UNhsuAVw8&_nc_ohc=be8l6oF-g4YAX__UxIJ&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfC9iyFsOu4EsccNmDnZg-hg393fR6Qo6OXsWXZm0tb32w&oe=64B4E233"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Gallery;
