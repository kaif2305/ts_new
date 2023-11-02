import React from "react";

import Carousel from "./carousel";

import { Countdown } from "./countdown";
import doc1 from "../../Static/documents/Special issue procedure - Environmental Science and Pollution Research.docx";

import ColabClgHome from "../Header/colab_clg_home";

import "../../Static/css/home.css";

export default function Home() {
  return (
    <div>
      <ColabClgHome />
      <Carousel />
      <div className="marq">
        {/* <marquee behavior="slider" width="100%" direction="left">
          {" "}
          Authors can now submit their full papers to the journal.
          &nbsp;&nbsp;&nbsp; Procedure regarding the same can be found using
          this{" "}
          <a href={doc1} target="_blank" style={{ color: "red" }}>
            link
          </a>
        </marquee> */}
      </div>
      <Countdown />
    </div>
  );
}
