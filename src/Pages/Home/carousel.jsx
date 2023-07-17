import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';


import '../../Static/css/carousel.css'

export default function Carousel() {
    return (
        <div>


            <div className='crousel-middle-section'>
                <div className='crousel-left-container'>
                    <h3>International Conference on</h3>
                    <h1>Sustainable Technologies for <br /> Water and Wastewater Treatment</h1>

                    <button>
                        <h4>Know About Technoscape
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


                <div data-src="images/img1.png" />
                <div data-src="images/img2.jpg" />
                <div data-src="images/ynu.jpg" />
            </AwesomeSlider>
        </div >
    )
}
