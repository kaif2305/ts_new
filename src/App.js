import Nav from "./Pages/Header/nav";
import Footer from "./Pages/footer";
// import Colab_clg from './Pages/Header/colab_clg'
import Partners from "./Pages/partners";

import Committee from "./Pages/committee";

import Themes from "./Pages/themes";

import About from "./Pages/about";

import Speakers from "./Pages/speaker";

import Sponsors from "./Pages/sponsor"

import Home from "./Pages/Home/home";

import IntAdv from "./Pages/internatinoal_advisory";

import PaperSubmission from "./Pages/Paper submission/paper_submission";
import React from "react";
import View from "./Pages/admin/view";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about us" element={<About />} />
          <Route path="/registration" element={<PaperSubmission />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/conference theme" element={<Themes />} />
          <Route path="/international advisory" element={<IntAdv />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/admin/view" element={<View />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
