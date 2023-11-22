import React from "react";

import Carousel from "./carousel";

import { Countdown } from "./countdown";

import ColabClgHome from "../Header/colab_clg_home";

import "../../Static/css/home.css";

import visa from "../../Static/documents/MHA-CONFERENCE VISA-NOC.pdf";

import letter from "../../Static/documents/VIT_0001.pdf";

import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div>
      <ColabClgHome />
      <Carousel />
      <div className="marq">
        <marquee>
          Registration is now closed. Thank you for the overwhelming response.
        </marquee>
        <h4>
          MINSTRY OF EXTERNAL AFFAIRS (MEA) -{" "}
          {/* <Button
            className="btn mb-3"
            variant="outline-primary"
            target="_blank"
            href={letter}
            size="lg">
            LETTER FOR CONFERENCE VISA
          </Button> */}
          <a href={letter} target="_blank">
            LETTER FOR CONFERENCE VISA
          </a>
        </h4>

        <h4>
          Conference Visa -{" "}
          <a href={visa} target="_blank">
            NOC from Ministry of Home Affairs, Government of India
          </a>
        </h4>

        {/* <Button
          className="btn btn-primary mb-3"
          target="_blank"
          href={visa}
          size="lg">
          Conference Visa Notification from MHA, GoI
        </Button> */}
      </div>

      <Countdown />
    </div>
  );
}
