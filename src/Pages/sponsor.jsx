import React from "react";
import "../Static/css/sponsor.css";

export default function Sponsor() {
  return (
    <div className="wrapper">
      <div className="page-title">
        <h1>Sponsors</h1>
      </div>

      {/* <Colab_clg /> */}

      {/* <h1 style={{ marginTop: "2%" }}>ACADEMIC PARTNERS</h1> */}
      <div className="our_team">
        <div className="team_member-s">
          <div className="img-container1-sponsors">
            <img src="images/SBI.png" alt="our_team" />
          </div>
          <h3>State Bank of India</h3>
        </div>

        <div className="team_member-s">
          <div className="img-container1-sponsors">
            <img src="images/decorex.jpg" alt="our_team" />
          </div>
          <h3>Decor-x</h3>
        </div>

        <div className="team_member-s">
          <div className="img-container1-sponsors2">
            <img id="d1" src="images/imcd.jpeg" alt="our_team" />
          </div>
          <h3>Parkash Dyechem Private Limited</h3>
        </div>

        <div className="team_member-s">
          <div className="img-container1-sponsors3">
            <img src="images/WeCare Logo.jpeg" alt="our_team" />
          </div>
          <h3>Usha Surgical</h3>
        </div>
      </div>
    </div>
  );
}
