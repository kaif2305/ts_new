import "../../Static/css/toggle_menu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import myImage from '../static/img/bg.jpeg';

export default function Toggle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    footerElement.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <body className={`${isMenuOpen ? "open" : ""}`}>
      <button className="burger" onClick={toggleMenu}></button>
      <div className="background"></div>
      <div id="menu_id">
        <nav>
          <a style={{ animationDelay: "0.2s" }} onClick={scrollToTop}>

            <Link to="/">Home</Link>
          </a>
          <a style={{ animationDelay: "0.3s" }} onClick={scrollToTop}>

            <Link to="/about us">About</Link>
          </a>
          <a style={{ animationDelay: "0.4s" }} onClick={scrollToTop}>

            <Link to="/conference theme">Conference Themes </Link>
          </a>

          <a style={{ animationDelay: "0.8s" }} onClick={scrollToTop}>

            <Link to="/payment">Payment </Link>
          </a>

          <a style={{ animationDelay: "0.5s" }} onClick={scrollToTop}>

            <Link to="/committee">Committee </Link>
          </a>
          <a style={{ animationDelay: "0.6s" }} onClick={scrollToTop}>

            <Link to="/international advisory">International Advisory Committee
            </Link>
          </a>
          <a style={{ animationDelay: "0.7s" }} onClick={scrollToTop}>

            <Link to="/partners">Partners </Link>
          </a>

          <a style={{ animationDelay: "0.9s" }} onClick={scrollToFooter}>

            Contact Us
          </a>
        </nav>
      </div>
    </body>
  );
}
