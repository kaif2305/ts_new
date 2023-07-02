import React from 'react'
import '../Static/css/international_advisory.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Colab_clg from './Header/colab_clg'

export default function InternatinoalAdvisory() {
    return (
        <div>

            <Container>
                <div className="page-title">
                    <h1>Internatinoal Advisory Committee</h1>
                    <h3>Our Profesors around the Globe.</h3>
                </div>
            </Container>

            <Colab_clg />

            <div className="inter-outer">
                <Container fluid>

                    <div className='inter-inner'>

                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Akihiko Terada.jpeg" />
                                <div>
                                    <h4> Prof. Akihiko Terada</h4>
                                    <h3>Japan</h3>
                                    <h5>Tokyo University of Agriculture and Technology</h5>

                                </div>
                            </div>
                        </div>

                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Anastasia Zabaniotou.jpeg" />
                                <div>
                                    <h4>Prof. Anastasia Zabaniotou</h4>
                                    <h3>GREECE</h3>
                                    <h5>Aristotle University of Thessaloniki</h5>

                                </div>
                            </div>
                        </div>


                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Anuradha Jabasingh S..jpeg" />
                                <div>
                                    <h4>Prof. Anuradha Jabasingh S.</h4>
                                    <h3>ETHIOPIA</h3>
                                    <h5>Addis Ababa Institute of Technology</h5>

                                </div>
                            </div>
                        </div>

                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Arunagiri A.jpeg" />
                                <div>
                                    <h4>Prof. Arunagiri A.</h4>
                                    <h3>INDIA</h3>
                                    <h5>National Institute of Technology Tiruchirappalli</h5>

                                </div>
                            </div>
                        </div>

                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Atsushi Suzuki.jpeg" />
                                <div>
                                    <h4>Prof. Atsushi Suzuki</h4>
                                    <h3>JAPAN</h3>
                                    <h5>Yokohama National University</h5>

                                </div>
                            </div>
                        </div>

                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Beteley Tekola Meshesha.jpeg" />
                                <div>
                                    <h4>Prof. Beteley Tekola Meshesha</h4>
                                    <h3>ETHIOPIA</h3>
                                    <h5>Addis Ababa Institute of Technology</h5>

                                </div>
                            </div>
                        </div>

                        <div className="outer-card">
                            <div className="inter-card">
                                <img src="images/prof/Bhaskaran M N.jpeg" />
                                <div>
                                    <h4>Mr. Bhaskaran M N</h4>
                                    <h3>INDIA</h3>
                                    <h5>The Sanmar Group</h5>

                                </div>
                            </div>
                        </div>

                    </div>




                </Container>
            </div>
        </div>
    )
}
