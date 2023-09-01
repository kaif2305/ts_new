import React from "react";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import Colab_clg from "./Header/colab_clg";

import "../Static/css/about.css";

export default function About() {
  return (
    <div>
      <Container>
        <div className="page-title">
          <h1>About Us</h1>
          <h3></h3>
        </div>
      </Container>
      {/* <Colab_clg /> */}

      <div className="tech-outer1">
        <div className="tech-left-container">
          <div className="tech-title">
            <img
              src="images/Technoscape black_ black 23_blue_20 logo.png"
              alt=""
            />
          </div>

          <div className="tech-images">
            <div className="img-big-tech">
              <img src="images/rock water.jpg" alt="" />
            </div>

            <div className="img-small-tech">
              <img src="images/beach new.jpg" alt="" />
              <img src="images/turtle.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="tech-right-container">
          <p>
            Water, the most vital natural resource, has touched every aspect of
            human life. Various anthropogenic activities are threatening its
            very existence. If the judicious utilization of remaining supplies
            is to be ensured, it is our responsibility as human beings to search
            for viable conservation techniques. The international community has
            enthusiastically embraced the Sustainable Development Goals (SDG).
            In particular, SDG 6 has become the guiding light for efforts to
            meet the rising water demand and avert a worldwide water crisis. In
            tune with the United Nations' goal to "Ensure availability and
            sustainable management of water and sanitation for all" by 2030, we
            at Vellore Institute of Technology-Vellore, INDIA, propose to host
            TECHNOSCAPE<sup>23</sup>, an{" "}
            <b>
              "International Conference on Sustainable Technologies for Water
              and Wastewater Treatment"
            </b>
            , from 14<sup>th</sup> to 16<sup>th</sup> December 2023. TECHNOSCAPE
            <sup>23</sup> aims to provide a platform for water enthusiasts and
            environmental experts to share their rich scientific experiences.
          </p>
        </div>
      </div>

      <div className="about_flex_container1">
        <div className="about_left_container">
          <div className="clg_name">
            <h1>Vellore Institute of Technology, Vellore</h1>
            <h1>INDIA</h1>
          </div>

          <p>
            Vellore Institute of Technology was established in 1984 as Vellore
            Engineering College by the Chancellor, Dr G. Viswanathan. It was
            conferred the university status in 2001 to recognize its excellence
            in academics, research and extra-curricular initiatives. VIT has
            been consistently ranked among the best institutions in the country,
            and is aspiring to emerge as a global leader. VIT is recognised as
            an Institution of Eminence (IoE) by the Government of India. The
            Engineering and Technology subject areas of VIT are ranked 346 in
            the world and 9 in India as per the QS World University Rankings by
            Subject 2022.
          </p>
        </div>
        <div className="about_right_container">
          <img src="images/vit logo new.png" alt="VIT" />
        </div>
      </div>

      <div className="about_flex_container2">
        <div className="about_left_container2">
          <img src="images/ynu logo new.png" alt="YNU" />
        </div>

        <div className="about_right_container2">
          <div className="clg_name">
            <h2>Yokohama National University, Yokohama</h2>
            <h2>JAPAN</h2>
          </div>
          <p>
            Founded in 1874, Yokohama National University has emerged as a
            leading international educational hub. The institution fosters
            practical learning based on Yokohama's deep-rooted history and
            tradition as a thriving city of commerce, industry and trade. The
            flexibility and adaptability of YNU’s vibrant campus enables the
            cultivation of globally competitive talents. YNU was bestowed with
            the prestigious Nihon-Ryugaku Awards, in the categories of Graduate
            Schools of the Eastern Japan division (2018 and 2020) and National &
            Public Universities of the Eastern Japan division (2017 - 2021).
            According to the QS World University Rankings 2022, YNU has been
            ranked 801-1000 globally and 169 in Asia.
          </p>
        </div>
      </div>

      <div className="about_flex_container1">
        <div className="about_left_container">
          <div className="clg_name">
            <h1>Gdańsk University of Technology, Gdańsk</h1>
            <h1>POLAND</h1>
          </div>

          <p>
            The Gdansk University of Technology (GUT) was founded in 1899 by the
            decree of Emperor Wilhelm II and started for the first time in 1904.
            According to the prestigious Shanghai Ranking, GUT is one of the
            oldest technical colleges in Poland and ranks in the top eight among
            Polish universities and between 801 and 900 internationally. The
            European Commission gave Gdansk Tech permission to utilize the
            coveted HR Excellence in Research mark in 2017. GUT has been
            recognized as an institution that provides some of the most
            excellent working and growth environments for European researchers.{" "}
          </p>
        </div>
        <div className="about_right_container">
          <img src="images/dunsk logo new.png" alt="GUT" />
        </div>
      </div>

      <div className="flex_container3">
        <h4>
          <f>G</f>OALS OF THE <f>C</f>ONFERENCE
        </h4>
        <p>
          <f>T</f>ECHNOSCAPE<sup>23</sup> aims to establish a sustainable
          environment by achieving the following goals:
        </p>
        <ul>
          <li>
            Bring together water professionals to address the existing state of
            water resources, contribute plausible ideas and inculcate better
            water management practices to meet the colossal demand.
          </li>
          <br />

          <li>
            Offer a platform to share prodigious knowledge about advanced and
            sustainable technologies for water and wastewater treatment.
          </li>
          <br />

          <li>
            Provide a holistic view of the latest water research and insights on
            some of the modern technologies such as IoT, Remote Sensing and
            Geographic Information System (GIS).
          </li>
          <br />

          <li>
            Focus on trans disciplinary research to facilitate a systematic
            approach towards challenges.
          </li>
        </ul>
      </div>
    </div>
  );
}
