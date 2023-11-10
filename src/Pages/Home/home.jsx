import React from "react";

import Carousel from "./carousel";

import { Countdown } from "./countdown";

import ColabClgHome from "../Header/colab_clg_home";

import "../../Static/css/home.css";

import visa from "../../Static/documents/MHA-CONFERENCE VISA-NOC.pdf";

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
          Conference Visa - NOC from Ministry of Home Affairs, Government of
          India
        </h4>

        <Button
          className="btn btn-primary mb-3"
          target="_blank"
          href={visa}
          size="lg">
          Conference Visa Notification from MHA, GoI
        </Button>
      </div>
      <Countdown />
    </div>
  );
}
