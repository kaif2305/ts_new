import Nav from './Pages/Header/nav'
import Footer from './Pages/footer'
// import Colab_clg from './Pages/Header/colab_clg'
import Partners from './Pages/partners'

import Themes from './Pages/themes'

import IntAdv from './Pages/internatinoal_advisory'

import PaperSubmission from './Pages/Paper submission/paper_submission'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Partners />} />
          <Route path='/abstract submission' element={<PaperSubmission />} />
          <Route path='/conference theme' element={<Themes />} />
          <Route path='/international advisory' element={<IntAdv />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
