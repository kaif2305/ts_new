import React from "react";

import Carousel from "./carousel";

import { Countdown } from "./countdown";

import ColabClgHome from "../Header/colab_clg_home";

import "../../Static/css/home.css";

export default function Home() {
  return (
    <div>
      <ColabClgHome />
      <Carousel />
      <div className="marq">
        <marquee behavior="slider" width="100%" direction="left">
          {" "}
          As per Delegates requests, Early Bird Registration extended till
          October 2<sup>nd</sup>, 2023.
        </marquee>
      </div>
      <Countdown />
    </div>
  );
}
