import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

import "../../Static/css/colab_clg.css";

export default function Colab_clg() {

  // code to stick the colab bar to the navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div
      id="navbar-header"
    //   ref={navbarRef}
      className={`clg-icon-container ${isSticky ? "sticky" : ""}`}
    >
      <Container fluid>
        <Row>
          <Col>
            <img src="images/sdg6 logo.png" alt="" />
          </Col>
          <Col>
            <img src="images/vit logo.png" alt="" />
          </Col>
          <Col>
            <img src="images/ynu logo.png" alt="" />
          </Col>
          <Col>
            <img src="images/gdansk logo.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
