import { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Abstract from '../../Static/documents/Abstract Template.docx'

import Brochure from '../../Static/documents/brochure.pdf'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';


import '../../Static/css/carousel.css'

export default function Carousel() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div>


            <div className='crousel-middle-section'>
                <div className='crousel-left-container'>
                    <h3>International Conference on</h3>
                    <h1>Sustainable Technologies for <br /> Water and Wastewater Treatment</h1>

                    <button onClick={handleShow}>
                        <h4>Important Downloads
                            &nbsp;
                            <img src='images/arrow.svg' />
                        </h4>
                    </button>
                </div>

                <div className='crousel-right-container p-2 ms-auto'>
                    <h5>
                        <img src='images/location.svg' />
                        &nbsp;
                        Vellore Institute of Technology, <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Vellore, India</h5>
                    <h5>
                        <img src='images/calander.svg' />
                        &nbsp;
                        14th - 16th December
                    </h5>
                </div>

            </div>

            <Offcanvas show={show} onHide={handleClose} scroll="true" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="offcanva-container">
                        <h3>Download Links</h3>
                        <h5>Brochure</h5>
                        <a href={Brochure} target='_blank'><button >Download</button></a>

                        <h5>Abstract Format</h5>
                        <a href={Abstract} target='_blank'><button >Download</button></a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>


            <div className='cloab-carousel'>
                <img src='images/VIT White.svg' />
                <h6>In association with</h6>
                <div className='ynu-gdansk'>
                    {/* <Stack direction="horizontal"> */}
                    <img src='images/YNU WHITE.png' />
                    <img src='images/GDANSK WHITE.png' />
                    {/* </Stack> */}
                </div>
            </div>






            <div className='overlay'>
            </div>
            <AwesomeSlider animation="cubeAnimation">


                <div data-src="images/ocean.jpg" />
                <div data-src="images/img2.jpg" />
                <div data-src="images/Group 143.png" />
            </AwesomeSlider>
        </div >
    )
}
