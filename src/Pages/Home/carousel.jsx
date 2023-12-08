import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Schedule from "../../Static/documents/TS Schedule.pdf";

import Invite from "../../Static/documents/Dinner Invite.pdf";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import doc1 from "../../Static/documents/Special issue procedure - Environmental Science and Pollution Research.docx";

import "../../Static/css/carousel.css";

export default function Carousel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emailAddress = "maheshgpillai@vit.ac.in";

  return (
    <div>
      <div className="crousel-middle-section">
        <div className="crousel-left-container">
          <h3>International Conference on</h3>
          <h1>
            Sustainable Technologies for <br /> Water and Wastewater Treatment
          </h1>
          <div className="imp1">
            <p>
              Authors can now submit their full papers to the journal. Procedure
              regarding the same can be found using this{" "}
              <a href={doc1} target="_blank">
                link
              </a>
            </p>
          </div>

          <button onClick={handleShow}>
            <h4>
              <a>Invite & Schedule</a>
            </h4>
          </button>
        </div>

        <div className="crousel-right-container p-2 ms-auto">
          <h5>
            <img src="images/location.svg" />
            &nbsp; Vellore Institute of Technology, <br /> &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; Vellore, India
          </h5>
          <h5>
            <img src="images/calander.svg" />
            &nbsp; 14<sup>th</sup> - 16<sup>th</sup> December
          </h5>
        </div>
      </div>

      <Offcanvas size="xl" show={show} onHide={handleClose} scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanva-container">
            <h3 style={{ textAlign: "center", fontWeight: "500" }}>
              Technoscape
            </h3>

            <ul>
              <li>
                <h5>Kesar - Dinner Invite </h5>
                <a href={Invite} target="_blank">
                  <button>Link</button>
                </a>
              </li>

              <li>
                <h5>
                  Program Schedule - Technoscape2023 <br />{" "}
                </h5>
                <h6>(Subject to change)</h6>
                <a href={Schedule} target="_blank">
                  <button>Link</button>
                </a>
              </li>

              {/* <li>
                <h5>
                  If you need <b>Acceptance Letter</b> in hard copy, please
                  contact at: &nbsp;
                  <a
                    id="points"
                    href={`mailto:${emailAddress}`}
                    target="_blank">
                    maheshgpillai@vit.ac.in
                  </a>
                </h5>
              </li>

              <li>
                <h5>
                  If you need <b>Letter OF Invitation</b> in hard copy, please
                  contact at: &nbsp;
                  <a
                    id="points"
                    href={`mailto:${emailAddress}`}
                    target="_blank">
                    maheshgpillai@vit.ac.in
                  </a>
                </h5>
              </li>

              <li>
                <h5>
                  In case of <b>Visa assistance</b>, please do contact us at:
                  &nbsp;
                  <a
                    id="points"
                    href={`mailto:${emailAddress}`}
                    target="_blank">
                    maheshgpillai@vit.ac.in
                  </a>
                </h5>
              </li> */}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="cloab-carousel">
        <img src="images/VIT White.svg" />
        <h6>In association with</h6>
        <div className="ynu-gdansk">
          {/* <Stack direction="horizontal"> */}
          <img src="images/YNU WHITE.png" />
          <img src="images/GDANSK WHITE.png" />
          {/* </Stack> */}
        </div>
      </div>

      <div className="overlay"></div>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="images/ocean.jpg" />
        <div data-src="images/img2.jpg" />
        <div data-src="images/Group 143.png" />
      </AwesomeSlider>
    </div>
  );
}
