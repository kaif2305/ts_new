import { useState } from "react";
import React from "react";
import "../Static/css/speaker.css";
import Colab_clg from "./Header/colab_clg";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Modal } from "react-bootstrap";

const MyModal = ({ show, onHide, title, children }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {/* Add additional buttons or actions */}
      </Modal.Footer>
    </Modal>
  );
};

export default function Speaker() {
  const [speaker1, setspeaker1] = useState(false);
  const [speaker2, setspeaker2] = useState(false);
  const [speaker3, setspeaker3] = useState(false);
  const [speaker4, setspeaker4] = useState(false);
  const [speaker5, setspeaker5] = useState(false);
  const [speaker6, setspeaker6] = useState(false);
  const [speaker7, setspeaker7] = useState(false);
  const [speaker8, setspeaker8] = useState(false);
  const [speaker9, setspeaker9] = useState(false);
  const [speaker10, setspeaker10] = useState(false);
  const [speaker11, setspeaker11] = useState(false);
  const [speaker12, setspeaker12] = useState(false);
  const [speaker13, setspeaker13] = useState(false);
  const [speaker14, setspeaker14] = useState(false);
  const [speaker15, setspeaker15] = useState(false);
  const [speaker16, setspeaker16] = useState(false);
  const [speaker17, setspeaker17] = useState(false);

  const sp1 = () => {
    setspeaker1(!speaker1);
  };

  const sp2 = () => {
    setspeaker2(!speaker2);
  };

  const sp3 = () => {
    setspeaker3(!speaker3);
  };

  const sp4 = () => {
    setspeaker4(!speaker4);
  };

  const sp5 = () => {
    setspeaker5(!speaker5);
  };

  const sp6 = () => {
    setspeaker6(!speaker6);
  };

  const sp7 = () => {
    setspeaker7(!speaker7);
  };

  const sp8 = () => {
    setspeaker8(!speaker8);
  };

  const sp9 = () => {
    setspeaker9(!speaker9);
  };

  const sp10 = () => {
    setspeaker10(!speaker10);
  };

  const sp11 = () => {
    setspeaker11(!speaker11);
  };

  const sp12 = () => {
    setspeaker12(!speaker12);
  };

  const sp13 = () => {
    setspeaker13(!speaker13);
  };

  const sp14 = () => {
    setspeaker14(!speaker14);
  };

  const sp15 = () => {
    setspeaker15(!speaker15);
  };

  const sp16 = () => {
    setspeaker16(!speaker16);
  };

  const sp17 = () => {
    setspeaker17(!speaker17);
  };

  return (
    <div>
      <Container>
        <div className="page-title">
          <h1>Keynote Speakers</h1>
          <h3></h3>
        </div>
      </Container>

      <Colab_clg />

      <div className="wrapper2">
        {/* <h1>KEYNOTE SPEAKERS</h1> */}

        <div className="speaker-outer">
          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Hideaki Yoshitake.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. HIDEAKI YOSHITAKE</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Yokohama National university,
                  <br />
                  JAPAN
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Hideaki Yoshitake is an esteemed academician from Japan,
                holding the distinguished position of Professor at the Faculty
                of Engineering, Division of Materials Science and Chemical
                Engineering, Yokohama National University (YNU). With a wide
                array of research domains, including Nanotechnology,
                Materials....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp1}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker1}
              onHide={sp1}
              title="Prof. Hideaki Yoshitake"
              keyboard={true}>
              <h5>
                Prof. Hideaki Yoshitake is an esteemed academician from Japan,
                holding the distinguished position of Professor at the Faculty
                of Engineering, Division of Materials Science and Chemical
                Engineering, Yokohama National University (YNU). With a wide
                array of research domains, including Nanotechnology, Materials,
                Green sustainable chemistry, environmental chemistry, and
                Functional solid-state chemistry, Prof. Yoshitake's expertise
                spans critical areas of scientific exploration. With a prolific
                publication record, Prof. Yoshitake has contributed
                significantly to the scientific community, having authored over
                132 papers. Their scholarly work extends beyond research papers,
                encompassing various books and chapters, adding further depth
                and impact to their contributions. Moreover, Prof. Yoshitake is
                an active member of the Chemical Society of Japan, demonstrating
                his commitment to professional development and engagement within
                the academic community. Additionally, Prof. Yoshitake is
                involved in eight joint research or commissioned research
                projects.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Dr. Mohammed J.K. Bashir.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. MOHAMMED J.K. BASHIR</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Universiti Tunku Abdul Rahman,
                  <br />
                  MALAYSIA
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Mohammed J.K. Bashir is currently holding the esteemed
                position of Professor and serving as the Head of the
                Environmental Engineering Department at Universiti Tunku Abdul
                Rahman. He is renowned for his expertise in Environmental
                Engineering with a diverse range of research domains, including
                Wastewater Treatment....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp2}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker2}
              onHide={sp2}
              title="Prof. Mohammed J.K. Bashir"
              keyboard={true}>
              <h5>
                Prof. Mohammed J.K. Bashir is currently holding the esteemed
                position of Professor and serving as the Head of the
                Environmental Engineering Department at Universiti Tunku Abdul
                Rahman. He is renowned for his expertise in Environmental
                Engineering with a diverse range of research domains, including
                Wastewater Treatment, Solid Waste Management, Pollution Control,
                and Waste to Energy, Prof. Bashir's work addresses critical
                environmental challenges and sustainability issues. Prof. Dr.
                Mohammed J.K. Bashir's contributions to academia are
                substantial, evident from his impressive publication record
                comprising more than 250 works. These publications encompass a
                mix of journal articles and book chapters, demonstrating the
                breadth and depth of their scholarly contributions. Prof. Bashir
                is also actively involved in a funded research project which
                significantly influences environmental engineering practices in
                Malaysia and beyond, making a valuable contribution to the
                sustainable development of society.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img src="images/speakers/GP Rangaiah.png" alt="cprof-outer" />
              </div>

              <div className="speaker-details">
                <h1>Prof. GP RANGAIAH</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  National University of Singapore,
                  <br />
                  SINGAPORE
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. GP Rangaiah is a highly respected academician from
                Singapore, currently an Emeritus Professor at the Department of
                Chemical and Biomolecular Engineering, National University of
                Singapore (NUS). Prof. Rangaiah also serves as an adjunct
                professor in the School of Chemical Engineering at VIT Vellore.
                With....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp3}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker3}
              onHide={sp3}
              title="Prof. GP Rangaiah"
              keyboard={true}>
              <h5>
                Prof. GP Rangaiah is a highly respected academician from
                Singapore, currently an Emeritus Professor at the Department of
                Chemical and Biomolecular Engineering, National University of
                Singapore (NUS). Prof. Rangaiah also serves as an adjunct
                professor in the School of Chemical Engineering at VIT Vellore.
                With a distinguished career, Prof. Rangaiah's teaching
                contributions have garnered widespread recognition throughout
                the globe, including the Annual Teaching Excellence Award from
                NUS for four consecutive years. Prof. GP Rangaiah's research
                interests lie in modeling, optimization, and control of chemical
                and related processes. Such research is crucial in improving the
                efficiency, safety, and sustainability of chemical processes,
                contributing to advancements in various industries, and
                addressing global challenges. Prof. Rangaiah has supervised the
                work of more than 50 doctoral and master's students, guiding
                them in their academic pursuits and research endeavors.
                Moreover, he has played a significant role in the research
                journeys of over 200 undergraduates, providing them with
                valuable research experiences.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Gerold Rahmann.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. GEROLD RAHMANN</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Thünen-Institute of Organic Farming,
                  <br />
                  GERMANY
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Gerold Rahmann is a highly accomplished academician from
                Germany, known for his influential work in the field of Organic
                Farming. He is currently serving as the Director and Professor
                at the Thünen-Institute of Organic Farming, part of the German
                Federal Research Institute of Rural Areas, Forests, and
                Fisheries....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp4}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker4}
              onHide={sp4}
              title="Prof. Gerold Rahmann"
              keyboard={true}>
              <h5>
                Prof. Gerold Rahmann is a highly accomplished academician from
                Germany, known for his influential work in the field of Organic
                Farming. He is currently serving as the Director and Professor
                at the Thünen-Institute of Organic Farming, part of the German
                Federal Research Institute of Rural Areas, Forests, and
                Fisheries. With over ten years of international working
                experience, Prof. Rahmann's expertise extends across Europe and
                several other countries. He was also the chair of a
                cross-countries working group to increase agricultural
                production through innovation. Additionally, he initiated and
                chaired the cross-countries working group "Organic Agriculture"
                of the GIAE network. He is involved in numerous funded projects,
                including those supported by the EU and other prominent
                organizations, amounting to approximately 1 million euros per
                annum. He was also known for introducing the German global
                initiative "One World No Hunger." and also establishing the
                "Green Innovation Centre - Ethiopia" and designing the German
                support program for Ethiopia. His extensive research output is
                impressive, with over 380 papers and 18 books published till
                2020. As an academic mentor, Prof. Rahmann has supervised more
                than 100 BSc, MSc, and Ph.D. students till 2020, nurturing the
                next generation of researchers and scientists in the field of
                Organic Farming.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Shivendu Ranjan.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. SHIVENDU RANJAN</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Indian Institute of Technology,
                  <br />
                  INDIA
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Shivendu Ranjan is currently working as an Assistant
                Professor at the School of Nano Science and Technology at the
                Indian Institute of Technology Kharagpur, West Bengal, India.
                With a diverse range of expertise, Prof. Ranjan's contributions
                span various fields, including Biotechnology, Nanobiotechnology,
                Nanomedicine....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp5}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker5}
              onHide={sp5}
              title="Prof. Shivendu Ranjan"
              keyboard={true}>
              <h5>
                Prof. Shivendu Ranjan is currently working as an Assistant
                Professor at the School of Nano Science and Technology at the
                Indian Institute of Technology Kharagpur, West Bengal, India.
                With a diverse range of expertise, Prof. Ranjan's contributions
                span various fields, including Biotechnology, Nanobiotechnology,
                Nanomedicine, Nanotoxicology, and Food Nanotechnology. He is
                also an Associate Editor in the prominent journal Environmental
                Chemistry Letters. Prof. Shivendu Ranjan plays a significant
                role in advancing research and knowledge dissemination in the
                realm of environmental chemistry, addressing critical issues
                related to the environment and sustainability. Additionally, he
                is an active Executive Member in the Society for Research and
                Studies of Nanotechnology reflecting his dedication in promoting
                advancements in nanotechnology and its applications. Prof.
                Ranjan's passion for the field of food science is evident
                through his Life Membership in the Association of Food
                Scientists and Technologists (India). His work involves
                cutting-edge research in nanotechnology, biotechnology, and
                related fields, with potential applications that can positively
                impact various industries and contribute to scientific
                advancements.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Nandita Das Gupta.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Dr. NANDITA DASGUPTA</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  CSIR-Indian Institute of Toxicology Research,
                  <br />
                  INDIA
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Dr. Nandita Dasgupta is a prominent scientist affiliated with
                the REACT Division of CSIR-Indian Institute of Toxicology
                Research in Lucknow, Uttar Pradesh, India. Her area of expertise
                lies in the interdisciplinary field of Nanobiotechnology,
                Toxicology, Biomaterials, and Drug Delivery. Throughout her
                career....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp6}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker6}
              onHide={sp6}
              title="Dr. Nandita Das Gupta"
              keyboard={true}>
              <h5>
                Dr. Nandita Dasgupta is a prominent scientist affiliated with
                the REACT Division of CSIR-Indian Institute of Toxicology
                Research in Lucknow, Uttar Pradesh, India. Her area of expertise
                lies in the interdisciplinary field of Nanobiotechnology,
                Toxicology, Biomaterials, and Drug Delivery. Throughout her
                career, she has made significant contributions to these areas
                through her extensive research work. Having published over 90
                research papers, Prof. Nandita Dasgupta has demonstrated a
                remarkable commitment to advancing scientific knowledge. Her
                extensive research output showcases a deep understanding of
                nanotechnology and its application in various fields, especially
                in the biomedical domain. Her work has played a pivotal role in
                advancing knowledge and technology, making her a prominent
                figure in the scientific community.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Murugesan Thanabalan.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof . MURUGESAN THANABALAN</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Crescent University,
                  <br />
                  INDIA
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Murugesan Thanabalan is a distinguished academician and
                researcher who currently serves as the Vice Chancellor of
                Crescent University in Chennai, Tamil Nadu, India. Earlier he
                also worked in premier institutes like Universiti Teknologi
                PETRONAS in Malaysia and ACT Anna University in Chennai
                reflecting....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp7}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker7}
              onHide={sp7}
              title="Prof. Murugesan Thanabalan"
              keyboard={true}>
              <h5>
                Prof. Murugesan Thanabalan is a distinguished academician and
                researcher who currently serves as the Vice Chancellor of
                Crescent University in Chennai, Tamil Nadu, India. Earlier he
                also worked in premier institutes like Universiti Teknologi
                PETRONAS in Malaysia and ACT Anna University in Chennai
                reflecting international exposure and collaborative research
                experiences. He has made significant contributions to various
                research domains like Biosorption, Wastewater Treatment, Water
                Treatment, and Environmental Pollution. With an extensive
                research background, Prof. Thanabalan has published over 100
                research papers, reflecting his expertise and dedication to
                advancing scientific knowledge in the field of environmental
                engineering.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Jakub Drewnowski.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. JAKUB DREWNOWSKI</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Gdansk University of Technology,
                  <br />
                  POLAND
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Jakub Drewnowski is a highly accomplished and respected
                academician, currently serving as a Professor at Gdansk
                University of Technology in Gdańsk, Poland. In addition to his
                role at the Gdansk University of Technology, Prof. Drewnowski
                holds Visiting Associate Professor positions at Tongji
                University....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp8}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker8}
              onHide={sp8}
              title="Prof. Jakub Drewnowski"
              keyboard={true}>
              <h5>
                Prof. Jakub Drewnowski is a highly accomplished and respected
                academician, currently serving as a Professor at Gdansk
                University of Technology in Gdańsk, Poland. In addition to his
                role at the Gdansk University of Technology, Prof. Drewnowski
                holds Visiting Associate Professor positions at Tongji
                University in Shanghai, China, and he has also been an Adjunct
                Professor at the Gdansk University of Technology since October
                2006. He has been a consistent contributor to the institution's
                academic and research excellence. His long-standing association
                with the universities reflects his commitment to education and
                mentorship. With a Ph.D. and a Habilitation degree (PG Dr.
                Hab.), his expertise lies in the field of Water and Wastewater
                Treatment, making significant contributions to society.
                Throughout his career, Prof. Drewnowski's research interests
                have been focused on various aspects of water treatment and
                management, Water Quality, and Environmental Impact Assessment.
                He has published over 60 research papers, Prof. Jakub
                Drewnowski's academic output is indicative of his dedication to
                advancing scientific knowledge in the field.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Nakumura Kazuho.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Dr. KAZUHO NAKAMURA</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Yokohama National university,
                  <br />
                  JAPAN
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Dr. Kazuho Nakamura is an accomplished Associate Professor in
                the Faculty of Engineering, specializing in the Division of
                Materials Science and Chemical Engineering at Yokohama National
                University. His research interests encompass various areas,
                including process monitoring and control systems, physical
                chemistry of....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp9}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker9}
              onHide={sp9}
              title="Dr. Kazuho Nakamura"
              keyboard={true}>
              <h5>
                Dr. Kazuho Nakamura is an accomplished Associate Professor in
                the Faculty of Engineering, specializing in the Division of
                Materials Science and Chemical Engineering at Yokohama National
                University. His research interests encompass various areas,
                including process monitoring and control systems, physical
                chemistry of surface diagnosis, membrane separation, and
                filtration. With a remarkable academic career, he has over 60
                publications to his name, highlighting his significant
                contributions to the field. As an active member of the academic
                community, NAKAMURA Kazuho is associated with over 10
                prestigious organizations.NAKAMURA Kazuho's contributions have
                not gone unnoticed, as he has received the prestigious JPI Award
                for Distinguished Papers, recognizing the excellence and impact
                of his scholarly work. He has completed 2 grant-aided research
                projects and is currently working on a grant-aided project
                related to sewage treatment in South India.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img src="images/speakers/Taro Arakawa.png" alt="cprof-outer" />
              </div>

              <div className="speaker-details">
                <h1>Prof. TARO ARAKAWA</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Yokohama National university,
                  <br />
                  JAPAN
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Taro Arakawa is an Associate Professor at the Faculty of
                Engineering, Division of Intelligent Systems Engineering,
                Yokohama National university. His research domains include a
                wide range of cutting-edge topics, like optical waveguides,
                compound semiconductors, Molecular Beam Epitaxy (MBE), optical
                switches....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp10}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker10}
              onHide={sp10}
              title="Prof. Taro Arakawa"
              keyboard={true}>
              <h5>
                Prof. Taro Arakawa is an Associate Professor at the Faculty of
                Engineering, Division of Intelligent Systems Engineering,
                Yokohama National university. His research domains include a
                wide range of cutting-edge topics, like optical waveguides,
                compound semiconductors, Molecular Beam Epitaxy (MBE), optical
                switches, optical modulators, quantum nanostructures,
                semiconductors, and optoelectronics. Throughout his academic
                journey, Taro Arakawa has made significant contributions to the
                field, earning him six prestigious awards. Two of the notable
                awards he received are the "APEX/JJAP Editorial Contribution
                Award" from The Japan Society of Applied Physics and the
                "Institute of Electronics, Information and Communication
                Engineers Electronics Society Achievement Award" from the
                Electronics Society of IEICE. Taro Arakawa's dedication to
                advancing scientific knowledge is further evident through his
                vast publication record, with a total of 167 research papers to
                his credit. Moreover, he has actively participated in five
                research projects, demonstrating his commitment to pushing the
                boundaries of innovation and technology in his field.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Jedrzej Bylka.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. JEDRZEJ BYLKA</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Poznan University of Technology,
                  <br />
                  POLAND
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Jędrzej is currently employed as an Assistant Professor in the
                Department of Environmental Engineering at Poznan University of
                Technology. His primary area of research revolves around the
                utilization of ICT tools for water distribution system control
                and management. He is particularly focused on integrating GIS,
                SCADA....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp11}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker11}
              onHide={sp11}
              title="Prof. Jedrzej Bylka"
              keyboard={true}>
              <h5>
                Jędrzej is currently employed as an Assistant Professor in the
                Department of Environmental Engineering at Poznan University of
                Technology. His primary area of research revolves around the
                utilization of ICT tools for water distribution system control
                and management. He is particularly focused on integrating GIS,
                SCADA, ERP, and computer models to develop innovative tools that
                can effectively support asset management in water utilities.
                Additionally, he also exhibits a keen interest in exploring
                Jędrzej is an excellent lecturer and academician, possessing
                outstanding domain knowledge on various subjects such as GIS,
                CAD, urban planning, and computer modeling. His expertise also
                extends to practical applications in the industry, as evidenced
                by his involvement as a co-author in several technical reports.
                Furthermore, he has provided valuable consultation for the
                implementation of computer systems in water companies. Jędrzej's
                academic and professional pursuits highlight his commitment to
                advancing the field of Environmental Engineering and his
                dedication to enhancing water distribution systems through
                innovative technological solutions.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Maciej Dzikuć.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. MACIEJ DZIKUĆ</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  University of Zielona Góra,
                  <br />
                  POLAND
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Maciej Dzikuć is currently working as a distinguished Professor
                (Assistant) in the Faculty of Economics and Management at the
                University of Zielona Góra. Prof. M. Dzikuć is also an esteemed
                expert with significant experience in evaluating projects
                related to low-emission solutions. Since 2016, he has been
                actively involved....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp12}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker12}
              onHide={sp12}
              title="Prof. Maciej Dzikuć"
              keyboard={true}>
              <h5>
                Maciej Dzikuć is currently working as a distinguished Professor
                (Assistant) in the Faculty of Economics and Management at the
                University of Zielona Góra. Prof. M. Dzikuć is also an esteemed
                expert with significant experience in evaluating projects
                related to low-emission solutions. Since 2016, he has been
                actively involved in evaluating proposals submitted to various
                organizations. In his role as a leading expert and chairman of
                the panel or commission responsible for assessing the submitted
                projects, nearly 200 projects, the total value of which during
                implementation exceeded PLN 1 billion. His expertise lies in
                various domains of economics, including energy, emission
                reduction, and sustainable development. Throughout his career,
                he has contributed significantly to the academic community with
                over 110 published papers in renowned journals and conference
                proceedings. As a recognized scholar in his field, he actively
                participates in scientific committees of various conferences and
                associations and also serves as a reviewer for numerous
                international journals. Maciej Dzikuć's outstanding individual
                scientific achievements have been repeatedly recognized, and he
                has been awarded several times with the prestigious scientific
                prize of the 1st degree of the Rector of the University of
                Zielona Góra.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Jacek Czerwinski.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. JACEK CZERWINSKI</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Lublin University of Technology,
                  <br />
                  POLAND
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Jacek Czerwinski is a distinguished academic and researcher
                currently holding the position of Professor at the Lublin
                University of Technology known for his work in the field of
                Environmental Chemistry, particularly he specializes in
                chromatography and mass spectrometry techniques, particularly
                Gas Chromatography....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp13}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker13}
              onHide={sp13}
              title="Prof. Jacek Czerwinski"
              keyboard={true}>
              <h5>
                Jacek Czerwinski is a distinguished academic and researcher
                currently holding the position of Professor at the Lublin
                University of Technology known for his work in the field of
                Environmental Chemistry, particularly he specializes in
                chromatography and mass spectrometry techniques, particularly
                Gas Chromatography (GC), High-Performance Liquid Chromatography
                (HPLC), and Tandem Mass Spectrometry (MS/MS). Professor
                Czerwinski's primary area of interest revolves around studying
                environmental contaminants and their transformation products.
                His research also focuses on understanding the behavior, fate,
                and impact of various pollutants in the environment, which are
                crucial for developing effective strategies for environmental
                protection and sustainability. His works also involve assessing
                water quality, Environmental Impact Assessment, and climate
                change. With a remarkable volume of work, Professor Czerwinski
                has published 45 research papers, highlighting the depth and
                breadth of his scientific contributions.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Jennifer Tamayo.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. JENNIFER TAMAYO</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Forest Products Research and Development Institute,
                  <br />
                  PHILIPPINES
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Jennifer Tamayo is a Senior Science Research Specialist
                affiliated with the Department of Science and Technology (DOST)
                at the Forest Products Research and Development Institute in the
                Philippines. She is a member of many renowned professional
                organizations such as the Integrated Chemists of the
                Philippines....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp14}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker14}
              onHide={sp14}
              title="Prof. Jennifer Tamayo"
              keyboard={true}>
              <h5>
                Prof. Jennifer Tamayo is a Senior Science Research Specialist
                affiliated with the Department of Science and Technology (DOST)
                at the Forest Products Research and Development Institute in the
                Philippines. She is a member of many renowned professional
                organizations such as the Integrated Chemists of the
                Philippines, Kapisanang Kimikang Pilipinas, Natural Products
                Society of the Philippines, Technical Association of the Pulp
                and Paper in the Philippines, and Forest and Natural Resources
                Research of the Philippines. She is also an associate member of
                the National Research Council of the Philippines as well as an
                affiliate member of the American Chemical Society. She has more
                than 25 years of experience devoted to research on the
                conservation of natural forest resources.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Satinder Kaur Brar.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. SATINDER KAUR BRAR</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Lassonde School of Engineering, York University,
                  <br />
                  CANADA
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Satinder Kaur Brar is a distinguished environmental
                engineer and the James and Joanne Love Chair in Environmental
                Engineering at York University. Prof. Brar leads the
                Bioprocessing and NanoEnzyme Formulation Facility (BANEFF) at
                York University. Her research focuses on the critical
                intersection....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp15}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker15}
              onHide={sp15}
              title="Prof. Satinder Kaur Brar"
              keyboard={true}>
              <h5>
                Prof. Satinder Kaur Brar is a distinguished environmental
                engineer and the James and Joanne Love Chair in Environmental
                Engineering at York University. Prof. Brar leads the
                Bioprocessing and NanoEnzyme Formulation Facility (BANEFF) at
                York University. Her research focuses on the critical
                intersection of environmental engineering and its impact on the
                global community's overall well-being. She specializes in two
                converging fields: the value-addition of wastes and the removal
                of emerging contaminants. Throughout her career, Prof. Brar has
                received numerous prestigious national and international awards,
                notable among them the Best Paper Award in 2021 and the Eddy
                Principles/Processes Wastewater Medal in 2019, both from the
                Water Environment Federation. Additionally, she was also
                conferred with the Grand Prize from the American Academy of
                Environmental Engineers and Scientists (AAEES) in 2017. She was
                inducted into the European Academy of Sciences in 2022.
                Furthermore, Prof. Brar has been a member of the College of New
                Scholars, Scientists, and Artists of the Royal Society of Canada
                since 2014, showcasing her exemplary contributions to the
                scientific community. Prof. Brar's prolific research output
                includes more than 390 articles published, as well as 12 edited
                books, further establishing her as a leading figure in her
                field.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Ts. Sakthiaswaran Kaliappan.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Ir. TS. SAKTHIASWARAN KALIAPPAN</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Federal Government of Malaysia,
                  <br />
                  MALAYSIA
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Ir. Ts. Sakthiaswaran Kaliappan is currently serving as an
                Assistant Director (Mechanical) at the Federal Government of
                Malaysia. With a background in Mechanical Engineering, he
                possesses a wealth of experience in various domains like Air
                Conditioning, Building Services, Energy Technology,
                Environmental....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp16}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker16}
              onHide={sp16}
              title="Ir. Ts. Sakthiaswaran Kaliappan"
              keyboard={true}>
              <h5>
                Ir. Ts. Sakthiaswaran Kaliappan is currently serving as an
                Assistant Director (Mechanical) at the Federal Government of
                Malaysia. With a background in Mechanical Engineering, he
                possesses a wealth of experience in various domains like Air
                Conditioning, Building Services, Energy Technology,
                Environmental Engineering, Waste Water, Water Resources
                Engineering, and Ergonomic System Design. He has MIEM and P.Eng
                memberships. Throughout his career, Sakthiaswaran has honed his
                skills and knowledge in the mechanical field through practical
                hands-on work. His dedication and expertise make him a valuable
                asset in contributing to his nation's development. He is driven
                by the belief that continuous exploration and learning in the
                engineering field will further enhance his contributions to the
                country's progress in the future.
              </h5>
            </MyModal>
          </div>

          <div className="speaker-container">
            <div className="speaker-basic-details">
              <div className="speaker-img-container">
                <img
                  src="images/speakers/Hiromitsu Takaba.png"
                  alt="cprof-outer"
                />
              </div>

              <div className="speaker-details">
                <h1>Prof. HIROMITSU TAKABA</h1>
                {/* <h2>Founder & Chancellor</h2> */}
                <h3>
                  Kogakuin University,
                  <br />
                  JAPAN
                </h3>
              </div>
            </div>

            <div className="speaker-description">
              <p>
                Prof. Hiromitsu Takaba is an esteemed academician and researcher
                affiliated with the Department of Environmental Chemistry and
                Chemical Engineering at Kogakuin University in Japan. With a
                distinguished career, he has made significant contributions to
                multi-scale modeling techniques and their practical applications
                in various....
              </p>

              <button
                type="button"
                class="btn"
                data-toggle="modal"
                onClick={sp17}
                data-target="#myModal1">
                Know More
              </button>
            </div>

            <MyModal
              show={speaker17}
              onHide={sp17}
              title="Prof. Hiromitsu Takaba"
              keyboard={true}>
              <h5>
                Prof. Hiromitsu Takaba is an esteemed academician and researcher
                affiliated with the Department of Environmental Chemistry and
                Chemical Engineering at Kogakuin University in Japan. With a
                distinguished career, he has made significant contributions to
                multi-scale modeling techniques and their practical applications
                in various systems, including fuel cells, water purification,
                lithium-ion batteries, and membrane processes. His research
                interests help in developing advanced modeling techniques that
                integrate experiments and simulations to understand complex
                systems comprehensively. Notably, Prof. Hiromitsu Takaba's
                contributions have been recognized through prestigious awards
                such as the Outstanding Poster Paper Award and The Merk Award
                for Outstanding Scientific Contribution to Display Technology.
                With over 280 publications to his credit, Prof. Takaba has an
                extensive research portfolio, indicating his dedication to
                scholarly pursuits and knowledge dissemination.
              </h5>
            </MyModal>
          </div>
        </div>
      </div>
    </div>
  );
}
