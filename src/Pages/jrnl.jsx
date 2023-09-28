import React from "react";

import "../Static/css/jrnl.css";

import CEC from "../Static/documents/CEC FLYER.pdf";
import EMA from "../Static/documents/EMA Flyer.pdf";
import ESPR from "../Static/documents/FLYER Espr updated.pdf";

export default function jrnl() {
  return (
    <div className="Jwrapper">
      <div className="Jpage-title">
        <h1>Associated Journals</h1>
      </div>

      {/* <Colab_clg /> */}

      {/* <h1 style={{ marginTop: "2%" }}>ACADEMIC PARTNERS</h1> */}
      <div className="Jour_team">
        <div className="Jteam_member-s">
          <a href={CEC} target="_blank" rel="noopener noreferrer">
            <div className="img-container1-sponsors">
              <img src="images/CEC AND TAYLOR LOGO.png" alt="our_team" />
            </div>
          </a>
        </div>

        <div className="Jteam_member-s">
          <a href={EMA} target="_blank" rel="noopener noreferrer">
            <div className="img-container1-sponsors">
              <img src="images/EMA AND SPRINGER OBINE.png" alt="our_team" />
            </div>
          </a>
        </div>

        <div className="Jteam_member-s">
          <a href={ESPR} target="_blank" rel="noopener noreferrer">
            <div className="img-container1-sponsors">
              <img src="images/ESPR AND SPRINGER.png" alt="our_team" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
