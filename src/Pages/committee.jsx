import React from 'react'
import '../Static/css/committee.css'
import Colab_clg from './Header/colab_clg'

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Committee() {
    return (
        <div>

            <Container>
                <div className="page-title">
                    <h1>Committee Members</h1>
                    <h3>Our Hard Working Members</h3>
                </div>
            </Container>

            <Colab_clg />
            <div className="wrapper">

                <h1 >CHIEF PATRONS</h1>

                <div className="cprof-outer">
                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/G Vishwanathan.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. G. VISWANATHAN</h1>
                                <h2>Founder & Chancellor</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. G. Viswanathan founded Vellore Engineering College in 1984 at Vellore. He envisioned that
                                this Institution would offer World-Class Education to students who would in turn create an
                                indelible impact on the society. The engineering college that started with an intake of 180
                                students in 1984 has evolved as a university with four...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/YNU president.jpg" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. IZURU UMEHARA</h1>
                                <h2>President</h2>
                                <h3>Yokohama National University,<br />JAPAN</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Izuru Umehara is a renowned Professor of Applied Physics at Yokohama National University,
                                Japan, currently serving as the President of YNU. With over 130 research articles published in
                                international scientific journals and over 4,500 citations, he has made significant
                                contributions in the field of theoretical and...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    {/* <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/prof/Akihiko Terada.jpeg" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. G. VISWANATHAN</h1>
                                <h2>Founder & Chancellor</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. G. Viswanathan founded Vellore Engineering College in 1984 at Vellore. He envisioned that
                                this Institution would offer World-Class Education to students who would in turn create an
                                indelible impact on the society. The engineering college that started with an intake of 180
                                students in 1984 has evolved as a university with four...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div> */}


                </div>

                <h1>PATRONS</h1>

                <div className="cprof-outer">

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/Sankar Vishwanathan.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Mr. SANKAR VISWANATHAN</h1>
                                <h2>Vice President</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Mr. Sankar Viswanathan has held honorable positions as the Chairman, and Vice-Chairman of
                                Vellore Engineering College, Vellore before taking over charge as the Pro-Chancellor
                                (Academic) at VIT. He has also served as the Secretary of the North Arcot Educational &
                                Charitable Trust of Vellore. He has always been a very...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/Sekar Vishwanathan.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. SEKAR VISWANATHAN</h1>
                                <h2>Vice President</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Sekar Viswanathan epitomizes the vision, vibrant spirit and energy that has helped in
                                establishing VIT as a premiere institute in the country. Dr. Sekar worked with IBM, NetClerk
                                and Walmart, where he was conferred the “Best Engineering Manager” and “Best Achiever”
                                awards. As VP at VIT, Dr. Sekar focuses on...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/G V Selvam.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. G V SELVAM</h1>
                                <h2>Vice President</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. G V Selvam has been associated with the institution since 1999, when he first assumed
                                office as Vice-Chairman of Vellore Engineering College. He spearheaded the elevation of
                                Vellore Engineering College to VIT University in 2001, and became its first Pro-Chancellor,
                                becoming the youngest Pro-Chancellor of a University...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                </div>
                <h1>STEERING COMMITTEE</h1>

                <div className="cprof-outer">

                    <div className="cprof-container2">
                        <div className="cprof-basic-details">

                            <h1>Dr. RAMBABU KODALI</h1>

                            <div className="cprof-img-container">
                                <img src="images/Rambabu Kodali.png" alt="cprof-outer" />
                            </div>

                            <h2>Vice Chancellor</h2>
                            <h3>Vellore Institute of Technology,<br />INDIA</h3>
                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Rambabu Kodali is the current Vice Chancellor of Vellore Institute of Technology, Vellore. He
                                obtained his BE, M.Tech and PhD degrees from IIT Kharagpur. He worked in BIT-Pilani-Pilani
                                campus, where he was nominated as "Shri S.K Birla Chair Professor". He has...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container2">
                        <div className="cprof-basic-details">

                            <h1>Dr. PARTHA SHARATHI MALLICK</h1>

                            <div className="cprof-img-container">
                                <img src="images/Partha Sharathi Mallick.png" alt="cprof-outer" />
                            </div>

                            <h2>Pro-Vice Chancellor</h2>
                            <h3>Vellore Institute of Technology,<br />INDIA</h3>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Partha Sharathi Mallick is the current Pro Vice Chancellor of Vellore Institute of
                                Technology, Vellore, Tamilnadu India. He received the prestigious Jawaharlal Nehru Fellowship
                                for doctoral studies. Dr. Mallick published 4 books/book chapters, 132 research...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container2">
                        <div className="cprof-basic-details">

                            <h1>Dr. JAYABARATHI T</h1>

                            <div className="cprof-img-container">
                                <img src="images/jayabarathi-t.png" alt="cprof-outer" />
                            </div>

                            <h2>Register</h2>
                            <h3>Vellore Institute of Technology,<br />INDIA</h3>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. (Ms.) T. Jayabarathi has been serving the Vellore Institute of Technology, Vellore (formerly
                                Vellore Engineering College) almost since the inception of the institution in the year 1984.
                                Prior to becoming the Registrar, she has served the institution in various capacities...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container2">
                        <div className="cprof-basic-details">

                            <h1>Dr. MURUGANANDAM L</h1>

                            <div className="cprof-img-container">
                                <img src="images/Muruganandam  L.png" alt="cprof-outer" />
                            </div>

                            <h2>Dean SCHEME</h2>
                            <h3>Vellore Institute of Technology,<br />INDIA</h3>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. L. Muruganandam is the Dean of School of Chemical Engineering, Vellore
                                Institute of Technology. He holds Ph.D. from IIT Madras for his study on Hydrodynamic on Z-type radial flow
                                reactor related to hydrodynamics of Liquid-solid circulating fluidized bed. Designed...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>


                </div>

                <div className="steering2">
                    <div className="cprof-outer">

                        <div className="cprof-container1">
                            <div className="cprof-basic-details">

                                <div className="cprof-img-container">
                                    <img src="images/Rambabu Kodali.png" alt="cprof-outer" />
                                </div>

                                <div className="cprof-details">
                                    <h1>Dr. RAMBABU KODALI</h1>
                                    <h2>Vice Chancellor</h2>
                                    <h3>Vellore Institute of Technology,<br />INDIA</h3>
                                </div>

                            </div>

                            <div className="cprof-description">
                                <p>
                                    Dr. Rambabu Kodali is the current Vice Chancellor of Vellore Institute of Technology, Vellore. He
                                    obtained his BE, M.Tech and PhD degrees from IIT Kharagpur. He worked in BIT-Pilani-Pilani
                                    campus, where he was nominated as "Shri S.K Birla Chair Professor". He has made significant
                                    contributions and completed...
                                </p>

                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                    Know More
                                </button>
                            </div>

                        </div>

                        <div className="cprof-container1">
                            <div className="cprof-basic-details">

                                <div className="cprof-img-container">
                                    <img src="images/Partha Sharathi Mallick.png" alt="cprof-outer" />
                                </div>

                                <div className="cprof-details">
                                    <h1>Dr. PARTHA SHARATHI MALLICK</h1>
                                    <h2>Pro-Vice Chancellor</h2>
                                    <h3>Vellore Institute of Technology,<br />INDIA</h3>
                                </div>

                            </div>

                            <div className="cprof-description">
                                <p>
                                    Dr. Partha Sharathi Mallick is the current Pro Vice Chancellor of Vellore Institute of
                                    Technology, Vellore, Tamilnadu India. He received the prestigious Jawaharlal Nehru Fellowship
                                    for doctoral studies. Dr. Mallick published 4 books/book chapters, 132 research papers and
                                    guided 13 PhD theses. An assessor...
                                </p>

                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                    Know More
                                </button>
                            </div>

                        </div>

                        <div className="cprof-container1">
                            <div className="cprof-basic-details">

                                <div className="cprof-img-container">
                                    <img src="images/jayabarathi-t.png" alt="cprof-outer" />
                                </div>

                                <div className="cprof-details">
                                    <h1>Dr. JAYABARATHI T</h1>
                                    <h2>Register</h2>
                                    <h3>Vellore Institute of Technology,<br />INDIA</h3>
                                </div>

                            </div>

                            <div className="cprof-description">
                                <p>
                                    Dr. (Ms.) T. Jayabarathi has been serving the Vellore Institute of Technology, Vellore (formerly
                                    Vellore Engineering College) almost since the inception of the institution in the year 1984.
                                    Prior to becoming the Registrar, she has served the institution in various capacities, including
                                    as a Head of the Department...
                                </p>

                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                    Know More
                                </button>
                            </div>

                        </div>

                        <div className="cprof-container1">
                            <div className="cprof-basic-details">

                                <div className="cprof-img-container">
                                    <img src="images/Muruganandam  L.png" alt="cprof-outer" />
                                </div>

                                <div className="cprof-details">
                                    <h1>Dr. MURUGANANDAM L</h1>
                                    <h2>Dean SCHEME</h2>
                                    <h3>Vellore Institute of Technology,<br />INDIA</h3>
                                </div>

                            </div>

                            <div className="cprof-description">
                                <p>
                                    Dr. L. Muruganandam is the Dean of School of Chemical Engineering, Vellore
                                    Institute of Technology. He holds Ph.D. from IIT Madras for his study on Hydrodynamic on Z-type radial flow
                                    reactor related to hydrodynamics of Liquid-solid circulating fluidized bed. Designed and fabricated 2.5 m LSCFB...
                                </p>

                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                    Know More
                                </button>
                            </div>

                        </div>


                    </div>
                </div>

                <h1 >ORGANIZING COMMITTEE</h1>

                <div className="cprof-outer">
                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/mahesh sir.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. MAHESH GANESAPILLAI</h1>
                                <h2>Conference Chair</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Mahesh Ganesapillai is a Professor in the School of Chemical Engineering at VIT, Vellore.
                                Additionally, he serves as a visiting professor at the Gdansk Institute of Technology, Poland,
                                National Taipei Institute of Technology, Taiwan, Kaohsiung National Institute of Science and
                                Technology, Taiwan, and Yokohama National University, Japan...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/aruna maam.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. ARUNA SINGH</h1>
                                <h2>Conference Co-Chair</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Aruna Singh is currently serving as a Professor in the School of Chemical Engineering, VIT
                                Vellore, India. She has been visiting professor in Caledonian College of Engineering, Muscat,
                                Sultanate of Oman. She is one of the first researchers to receive a project under the Women
                                Scientist Scheme from DST, Govt. of India...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/ynu prof1.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. KAZUHO NAKAMURA</h1>
                                <h2>Conference Co-Chair</h2>
                                <h3>Yokohama National University,<br />JAPAN</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Nakamura Kazuho is currently serving as an Associate Professor at the Department of Material
                                Science and Chemical Engineering at Yokohama National University, Japan. He has done significant
                                research in various fields such as Filtration, Unit Processes, Zeta Potentials and produced a
                                thesis on the study of Filtration and Backwashing Behaviors...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>

                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/dansk prof1.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. JAKUB DREWNOWSKI</h1>
                                <h2>Conference Co-Chair</h2>
                                <h3>Gdańsk University of Technology,<br />POLAND</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Jakub Drewnowski works as a Professor in the Department of Civil & Environmental Engineering
                                at Gdańsk University of Technology, Poland. His research interests include Wastewater
                                Denitrification, Water and Wastewater Treatment, and Wastewater Analysis and Purification
                                Technologies with simulation tools....
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>
                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/thirumalini s.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. THIRUMALINI S.</h1>
                                <h2>International Relations Chair</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr.Thirumalini Selvaraj, Heritage Research lab, completed her Doctoral research in Heritage Lime mortars
                                characterisation and Simulation and has 15 years of Research experience with  61 publication in the field of
                                heritage materials and structures. Her primary areas of research include developing scientific methods
                                for...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>
                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/Govardhan Sir.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. GOVARDHAN K.</h1>
                                <h2>Programme Chair</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. K Govardhan is a versatile researcher across various domains. He completed his B.E in
                                Electrical and Electronics Engineering from the University of Madras, then did his M.Tech at VIT
                                specialising in Sensor Systems Technology. His PhD was an amalgamation of Computational Fluid
                                Dynamics, Nanotechnology & Sensors...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>
                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/mohan sir.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. MOHANA ROOPAN S.</h1>
                                <h2>Technical and Publications Chair</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                Dr. Mohana Roopan is an award-winning top 2% scientist with over 12 years of experience in the
                                field of organic chemistry and nanotechnology. He completed his master’s in Organic chemistry
                                and a Ph.D. degree in the subject of organic synthesis at VIT University, Vellore. Currently, he
                                works as an Associate professor at VIT University, India...
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>
                    <div className="cprof-container1">
                        <div className="cprof-basic-details">

                            <div className="cprof-img-container">
                                <img src="images/aslam sir.png" alt="cprof-outer" />
                            </div>

                            <div className="cprof-details">
                                <h1>Dr. ASLAM ABDULLAH M</h1>
                                <h2>Finance Chair</h2>
                                <h3>Vellore Institute of Technology,<br />INDIA</h3>
                            </div>

                        </div>

                        <div className="cprof-description">
                            <p>
                                I, M Aslam Abdullah working as Associate Professor at Vellore Institute of Technology, Vellore;
                                Qualified Doctorate in Petrochemical Technology from Anna University, Chennai, M. Tech. in Gas
                                Engineering from University of Petroleum and Energy Studies, B.Tech in Petrochemical Technology
                                from Bharathidasan University....
                            </p>

                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                    </div>


                </div>


            </div >
        </div>
    )
}
