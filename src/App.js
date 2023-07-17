import Nav from "./Pages/Header/nav";
import Footer from "./Pages/footer";
// import Colab_clg from './Pages/Header/colab_clg'
import Partners from "./Pages/partners";

import Committee from "./Pages/committee";

import Themes from "./Pages/themes";

import About from "./Pages/about";

import Home from "./Pages/Home/home";

import IntAdv from "./Pages/internatinoal_advisory";

import PaperSubmission from "./Pages/Paper submission/paper_submission";
import React from "react";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about us" element={<About />} />
<<<<<<< HEAD
          <Route path="/payment" element={<PaperSubmission />} />
=======
          <Route path="/abstract submission" element={<PaperSubmission />} />
>>>>>>> 78363964a433aed830c86685b11a96bf03c116f7
          <Route path="/conference theme" element={<Themes />} />
          <Route path="/international advisory" element={<IntAdv />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/committee" element={<Committee />} />
        </Routes>
<<<<<<< HEAD
        <Footer />
=======
        <Footer/>
>>>>>>> 78363964a433aed830c86685b11a96bf03c116f7
      </div>
    </Router>
  );
}

export default App;
