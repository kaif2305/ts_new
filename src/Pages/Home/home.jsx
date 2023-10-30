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
          Full Paper Submission deadline is 31<sup>st</sup> October 2023.
        </marquee>
      </div>
      <Countdown />
    </div>
  );
}
