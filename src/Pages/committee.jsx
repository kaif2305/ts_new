import { useState } from 'react';
import React from 'react'
import '../Static/css/committee.css'
import Colab_clg from './Header/colab_clg'

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Modal } from 'react-bootstrap';

const MyModal = ({ show, onHide, title, children }) => {
    return (
        <Modal show={show} onHide={onHide}>
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



export default function Committee() {

    const [CpModal1, setCpModal1] = useState(false);
    const [CpModal2, setCpModal2] = useState(false);

    const [PModal1, setPModal1] = useState(false);
    const [PModal2, setPModal2] = useState(false);
    const [PModal3, setPModal3] = useState(false);


    const [ScModal1, setScModal1] = useState(false);
    const [ScModal2, setScModal2] = useState(false);
    const [ScModal3, setScModal3] = useState(false);
    const [ScModal4, setScModal4] = useState(false);

    const [OcModal1, setOcModal1] = useState(false);
    const [OcModal2, setOcModal2] = useState(false);
    const [OcModal3, setOcModal3] = useState(false);
    const [OcModal4, setOcModal4] = useState(false);
    const [OcModal5, setOcModal5] = useState(false);
    const [OcModal6, setOcModal6] = useState(false);
    const [OcModal7, setOcModal7] = useState(false);
    const [OcModal8, setOcModal8] = useState(false);


    // Chief Patrons

    const cp1 = () => {
        setCpModal1(!CpModal1);
    };

    const cp2 = () => {
        setCpModal2(!CpModal2);
    };

    // Patrons

    const p1 = () => {
        setPModal1(!PModal1);
    };

    const p2 = () => {
        setPModal2(!PModal2);
    };
    const p3 = () => {
        setPModal3(!PModal3);
    };

    // Sterring Committee

    const sc1 = () => {
        setScModal1(!ScModal1);
    };

    const sc2 = () => {
        setScModal2(!ScModal2);
    };

    const sc3 = () => {
        setScModal3(!ScModal3);
    };

    const sc4 = () => {
        setScModal4(!ScModal4);
    };

    // Organizing Committee

    const oc1 = () => {
        setOcModal1(!OcModal1);
    };

    const oc2 = () => {
        setOcModal2(!OcModal2);
    };

    const oc3 = () => {
        setOcModal3(!OcModal3);
    };

    const oc4 = () => {
        setOcModal4(!OcModal4);
    };

    const oc5 = () => {
        setOcModal5(!OcModal5);
    };

    const oc6 = () => {
        setOcModal6(!OcModal6);
    };

    const oc7 = () => {
        setOcModal7(!OcModal7);
    };

    const oc8 = () => {
        setOcModal8(!OcModal8);
    };



    return (
        <div>

            <Container>
                <div className="page-title">
                    <h1>Committee Members</h1>
                    <h3></h3>
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

                            <button type="button" class="btn" data-toggle="modal" onClick={cp1} data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={CpModal1}
                            onHide={cp1}
                            title="Dr. G. VISWANATHAN"
                            keyboard={true}
                        >
                            <h5><b>Dr.G.Viswanathan</b> - Chancellor<br />
                                Dr. G.V, the founder-chancellor of VIT University, was born on December 8, 1938 in a remote
                                village near Vellore in Tamil Nadu. Dr. GV’s life is a source of inspiration to the aspiring
                                youth.<br /> <br />

                                <b>Dr. G.V</b> − The Student<br />
                                Dr. GV completed Advanced Management Program at Harvard Business School in 2003, nearly four
                                decades after his University education, reaffirming his fervour in being an eternal student.
                                He excelled in academics right from his childhood. His early education was confined to his
                                small village where he studied in Tamil - his mother tongue. His pre-university education at
                                Voorhees College, Vellore initiated him to the world outside. From there he moved on to
                                obtain his Bachelors and Masters Degrees in Economics from the prestigious Loyola College,
                                Chennai. Following this, he graduated in Law from Madras Law College.
                                <br /> <br />
                                <b>Dr. G.V</b> − The Leader of the People<br />
                                A student leader in his twenties entering Indian parliament was something incredible,
                                especially in 1960s. But it was Dr. GV who championed people’s issues in the parliament and
                                they, in turn, reposed faith in the leader who fulfilled their expectations. They re-elected
                                him by a bigger margin in the next election for another five-year term. He travelled to
                                different parts of the world as a member of parliamentary delegations and appreciated issues
                                in a global perspective. Dr. GV wanted to play a bigger role in the provincial politics in
                                order to make a direct contribution in bettering the lives of the people in the region. He
                                was elected to Tamil Nadu Legislative Assembly for ten years. During this period, he served
                                as a Minister for two years.<br /> <br />

                                <b>Dr. G.V</b> − The Educator <br />
                                Dr. G. Viswanathan founded Vellore Engineering College in 1984 at Vellore. He envisioned
                                that this Institution would offer World-Class Education to students who would in turn create
                                an indelible impact on the society. The engineering college that started with an intake of
                                180 students in 1984 has evolved as a university with four campuses. Over 25,000 students
                                are enrolled in 51 undergraduate and 33 Postgraduate, 11 Integrated, 2 Research programmes
                                and 2 M.Tech Industrial Programmes with nearly 16,000 residing on the campus. It attracts
                                students and professors from different parts of the world. It houses more than 1000
                                international students on campus. For the past two years, VIT University has been ranked #1
                                private engineering institution in India. ISO Certification from Holland, International
                                accreditation from the United Kingdom and USA, and the highest accreditation grade from the
                                Government of India reflect the University’s penchant for excellence on all fronts.
                                <br /> <br />
                                <b>Dr. G.V</b> − The Institution <br />
                                Due to his passion for societal development and compassion for the underprivileged, Dr. GV
                                has launched several schemes for uplifting the women and unemployed youth in the region to
                                help them become self-reliant. He offers scholarships to students from disadvantaged
                                sections of the society to enable them to pursue higher education. He has established the
                                Universal Higher Education Trust to create opportunities for higher education to every
                                deserving student in the region. He has adopted several villages with the motto of improving
                                the quality of lives of the rural people. His vision of transforming Vellore into a greener
                                and cooler town by planting one million saplings has begun to yield fruit. Dr.GV’s
                                farsightedness extends beyond horizons.
                            </h5>
                        </MyModal>
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

                            <button type="button" class="btn" onClick={cp2} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={CpModal2}
                            onHide={cp2}
                            title="Dr. IZURU UMEHARA"
                            keyboard={true}
                        >
                            <h5 ><b>Prof. Umehara Izuru</b><br />
                                President, Yokohama National University
                                <br /> <br />
                                <b> Academic Background</b>
                                March 1992 Doctor of Engineering, University of Tsukuba
                                March 1989 Master of Science, University of Toyama
                                March 1987 Graduate from School of Science, University of Toyama
                                <br /><br />
                                <b>Education & Work Experience</b>
                                April 2021 President, Yokohama National University
                                April 2020 Executive Director for Research, Finance, Information and
                                Evaluation (Vice-President), Yokohama National University
                                April 2019 Executive Director for Research and Evaluation (Vice-President),
                                Yokohama National University
                                October 2009 Professor, Faculty of Engineering, Yokohama National University
                                July 2000 Associate Professor, College of Engineering, Yokohama National University
                                April 1994 Research Associate, College of Engineering, Yokohama National University
                                April 1992 Academic Affairs Staff, College of Engineering, Yokohama National University
                                <br /><br />
                                <b>Research Fields</b>
                                Solid State Physics, Single Crystal, Low Temperature, High Pressure, Specific Heat, Strongly Correlated
                                Electron System
                                <br /><br />
                                <b>Mission Statement</b>
                                UMEHARA Izuru was elected 16th president of Yokohama National University (YNU) in April 2021. At the
                                beginning of his presidential position, he made clear about the four strategies and roles that YNU should
                                take to become a world-class research oriented university: (1) Research Strategy (fostering practical
                                academic research which aims to become a world-class research university); (2) Educational Strategy
                                (transmission of high-standard education resulting from research enhancement); (3)
                                Industry-academia-government Collaboration and International-regional Cooperation Strategy (promoting
                                regional cooperation from Yokohama and Kanagawa to the world); and (4) University Management Strategy
                                (strengthening university governance and developing diversity).

                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={p1} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={PModal1}
                            onHide={p1}
                            title="Mr. SANKAR VISWANATHAN"
                            keyboard={true}
                        >
                            <h5><b>Mr. Sankar Viswanathan</b> Vice - President
                                <br /><br />
                                Mr. Sankar Viswanathan, Vice President was born on 13th April 1966. He completed his
                                Advanced Diploma in Engineering Technology, at Chisholm Institute, Melbourne, Australia.He
                                has held honoured positions as the Chairman, and Vice-Chairman of Vellore Engineering
                                College, Vellore before taking over charge as the Pro-Chancellor (Academic) at VIT. He has
                                also served as the Secretary of the North Arcot Educational & Charitable Trust of Vellore.
                                <br /> <br />
                                He has always been a very proactive person and has played a key role in all the activities
                                of the University. He has always evinced a keen involvement with the VIT family. He is an
                                active member of the Board of Management, VIT and displays a keen interest in the affairs of
                                the college and being a student friendly person is avidly interested in the academic
                                progress of the students and staff.
                                <br /><br />
                                He has travelled extensively and gained valuable experience from his tours to USA,
                                Australia, Singapore, Italy, China, Greece, Malaysia, Jordan, Oman, Lebanon, Syria and
                                Rwanda. He is an active member of the Australian engineers Association in Melbourne. His
                                hobbies include playing tennis, cricket, cooking and surfing the net.
                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={p2} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={PModal2}
                            onHide={p2}
                            title="Dr. SEKAR VISWANATHAN"
                            keyboard={true}
                        >
                            <h5 ><b>Dr. Sekar Viswanathan</b> Vice-President <br />
                                <br />
                                Dr. Sekar Viswanathan epitomises the vision, vibrant spirit and energy that has helped in
                                establishing VIT as a premiere institute in the country. Dr. Sekar has over 30 years of
                                experience in the industry and academics. He was a rank holder in Electronics and
                                Communication Engineering from University of Madras. He received his Master’s degree in
                                Computer Science from Rochester Institute of Technology, USA. He has a Ph.D., in the area of
                                faculty motivation from University of Madras.
                                <br /> <br />
                                During the 90s, he served as the Vice-Chairman of his alma mater, Vellore Engineering
                                College (which was later renamed as VIT). During this period, he had launched a number of
                                new programmes and initiatives which paved way for the university status of VIT. Later, Dr.
                                Sekar went to USA and worked with IBM, NetClerk and Walmart.com to gain international
                                industrial experience. Walmart.com conferred the “Best Engineering Manager” and “Best
                                Achiever” awards on him.
                                <br /> <br />
                                As VP at VIT, Dr. Sekar focuses on the university growth strategy, academic policies,
                                international relations and placements. He has brought in numerous improvements to benefit
                                the students including STARS (Support the Advancement of Rural Students) scheme, Fully
                                Flexible Credit System (FFCS), Semester Abroad Programme (SAP) and Curriculum for Applied
                                Learning (CAL). Dr. Sekar was bestowed with the prestigious Young EDGE National Award in
                                2012 in recognition of his innovative and useful contributions to the field of education. He
                                currently serves as a member of national-level Higher Education Committee of FICCI
                                (Federation of Indian Chambers of Commerce and Industry) and member of the Higher Education
                                committee of EPSI (Education Promotion Society of India), New Delhi.

                            </h5>
                        </MyModal>


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

                            <button type="button" class="btn" onClick={p3} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={PModal3}
                            onHide={p3}
                            title="Dr. G V SELVAM"
                            keyboard={true}
                        >
                            <h5><b>Mr. G V Selvam </b> Vice - President <br /><br />
                                Dr. G V Selvam has been associated with the institution since 1999, when he first assumed
                                office as Vice-Chairman of Vellore Engineering College. Since then, he has been working
                                relentlessly towards the progress of the institution. He spearheaded the elevation of
                                Vellore Engineering College to VIT University in 2001, and became its first Pro-Chancellor.
                                Mr. Selvam enjoys the distinction of being the youngest Pro-Chancellor of a University in
                                the world, which has been recognized by the Limca Book of Records, 2005. He holds a
                                postgraduate degree in Business Administration from University of Madras. Mr. Selvam became
                                the first Vice-President of VIT Chennai in 2010, where he sculptured the campus from the
                                scratch. The high rise structures, the lush green ambience and the ultra-modern
                                infrastructure that adorn VIT Chennai were created within a short span of time under his
                                able leadership. He has developed VIT Chennai campus in conformity with the standards of the
                                Green LEED certification. As the Vice President, he continues to contribute diligently to
                                its growth. His painstaking efforts in implementing several innovative measures have enabled
                                VIT to emerge as an institution of international eminence. A self-motivated and industrious
                                person, and a farsighted educationalist, Mr. G.V. Selvam possesses an innate ability to spot
                                and nurture talent–be it with the faculty, staff or students. He offers flexible and
                                pragmatic academic solutions not only for toppers but also for slow learners. Mr. Selvam was
                                instrumental in introducing new and need-based programmes of study such as Law,
                                Architecture, Hotel Management and Agriculture. He introduced the inter-university sports &
                                cultural extravaganza, “Riviera”, which has blossomed into an acclaimed international event.
                                He played a significant role in establishing the VIT Technology Business Incubator (VITTBI),
                                which has received national acclaim for its service to budding entrepreneurs. The Centre for
                                Sustainable Rural Development and Research Studies [CSRD&RS] is the brainchild of Mr.
                                Selvam. The centre is working towards providing urban facilities in rural areas to enhance
                                the living conditions in villages, which would develop the rural folk on par with the urban
                                people in terms of education and employability. A man with a deep passion for nature, Mr. G
                                V Selvam takes immense interest in green initiatives. The lush green, self-sustaining, VIT
                                campuses in Vellore and Chennai are examples of his efforts to adorn the spaces with natural
                                beauty. He is the brain behind the Green Vellore Project, which has added green cover to the
                                rocky and barren landscape of Vellore, and the Clean Palar Project, which is taking measures
                                to restore the Palar river bed to its original texture. He is passionate about transforming
                                Vellore into a clean, green and nature-rich city. Mr. Selvam is inspired and guided by Dr.
                                APJ Abdul Kalam’s principle: “A leader must have vision and passion, and not be afraid of
                                any problem. Instead, he should know how to defeat it. Most importantly, he must work with
                                integrity.”

                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={sc1} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={ScModal1}
                            onHide={sc1}
                            title="Dr. RAMBABU KODALI"
                            keyboard={true}
                        >
                            <h5>Dr. Rambabu Kodali is the current Vice Chancellor
                                of Vellore Institute of Technology,
                                Vellore. He obtained his BE, M.Tech and PhD degrees from IIT Kharagpur. He worked in
                                BIT-Pilani-Pilani campus, where he was nominated as "Shri S.K Birla Chair Professor". He has
                                made significant contributions and completed several research projects in the field of
                                flexible manufacturing systems. Dr. Rambabu has published over 200 papers and has supervised
                                over 13 PhDs in various international, national journals and conferences. He became the
                                Director of NIT Jamshedpur in 2012, and then became the first Mentor Director of IIIT Ranchi
                                in 2016. Later on, he went on to become the Pro-Vice chancellor at Kalinga Institute of
                                Industrial Technology and the Director of MITS Madanapalle.



                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={sc2} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={ScModal2}
                            onHide={sc2}
                            title="Dr. PARTHA SHARATHI MALLICK"
                            keyboard={true}
                        >
                            <h5>Dr. Partha Sharathi Mallick is the current Pro
                                Vice Chancellor of Vellore Institute of
                                Technology, Vellore, Tamilnadu India. He received the prestigious Jawaharlal Nehru
                                Fellowship for doctoral studies. Dr. Mallick published 4 books/book chapters, 132 research
                                papers and guided 13 PhD theses. An assessor of National Assessment and Accreditation
                                Council (NAAC), Govt. of India, he received the VIT Chancellor’s Research Award for 10
                                consecutive years and organized several conferences and summits around the world. He is a
                                Sr. Member of IEEE, Life Member-Indian Society for Technical Education, Indian LASER
                                Association, Indian Association for Cultivation of Science, Indian Physical Society and
                                Ambassador (VIT) of Association of Commonwealth Universities.




                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={sc3} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={ScModal3}
                            onHide={sc3}
                            title="Dr. JAYABARATHI T"
                            keyboard={true}
                        >
                            <h5>Dr. (Ms.) T. Jayabarathi has been serving the
                                Vellore Institute of Technology, Vellore
                                (formerly Vellore Engineering College) almost since the inception of the institution in the
                                year 1984. Prior to becoming the Registrar, she has served the institution in various
                                capacities, including as a Head of the Department and the Dean of School of Electrical
                                Engineering. She has a teaching and research experience of a little more than thirty-six
                                years. An active researcher with a Scopus H-index of twenty-one and more than two thousand
                                Scopus citations, she has a few highly cited publications to her credit. Her interests are
                                teaching, research and administration.


                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={sc4} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={ScModal4}
                            onHide={sc4}
                            title="Dr. MURUGANANDAM L"
                            keyboard={true}
                        >
                            <h5>Dr. L. Muruganandam is the Dean of
                                School of Chemical Engineering, Vellore Institute of Technology. He holds Ph.D. from IIT Madras for his
                                study on Hydrodynamic on Z-type radial flow reactor related to hydrodynamics of Liquid-solid circulating
                                fluidized bed. Designed and fabricated 2.5 m LSCFB column and also a SMX static mixer to prepare stable
                                emulsion solution. Developed shock tube setup that can generate shock wave with Mach-3 a tool to study in
                                Chemical Engineering application. He is proficient in ASPEN; ANSYS and COMSOL. He has 50+ journal paper in
                                reputed national and international journals to his credit on the topics on CFD, fluidization, membrane
                                development, pyrolysis and biodegradation studiesl. He has 9 GenBank Publication. He is currently working
                                on treatments of hydrocarbons in oil produced water using solar nano photo catalysts and by Inverse
                                Fluidization techniques.

                            </h5>
                        </MyModal>

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

                                <button type="button" class="btn" onClick={sc1} data-toggle="modal" data-target="#myModal1">
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

                                <button type="button" class="btn" onClick={sc2} data-toggle="modal" data-target="#myModal1">
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

                                <button type="button" class="btn" onClick={sc3} data-toggle="modal" data-target="#myModal1">
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

                                <button type="button" class="btn" onClick={sc4} data-toggle="modal" data-target="#myModal1">
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

                            <button type="button" class="btn" onClick={oc1} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>

                            <MyModal
                                show={OcModal1}
                                onHide={oc1}
                                title="Dr. MAHESH GANESAPILLAI"
                                keyboard={true}
                            >
                                <h5>Dr. Mahesh Ganesapillai is a Professor in the
                                    School of Chemical Engineering at VIT,
                                    Vellore. Additionally, he serves as a visiting professor at the Gdansk Institute of
                                    Technology, Poland, National Taipei Institute of Technology, Taiwan, Kaohsiung National
                                    Institute of Science and Technology, Taiwan, and Yokohama National University, Japan. His
                                    research interests focus on the closed-loop fertility cycle for sustainability in sanitation
                                    and agricultural production for the anthropogenic solution. In 2012, he received the Best
                                    Mineral Engineer Award for the development of an outstanding strategy and concept for
                                    sustainable agricultural productivity using low-grade rock phosphate tailing. He was also
                                    awarded the Best Platform Presenter by International Water Association (Poland) in 2017,
                                    Outstanding Young Chemical Engineer from the IIChE, and the prestigious Senior Research
                                    Fellowship award from the Defense R&D Organization, Government of India.


                                </h5>
                            </MyModal>
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

                            <button type="button" class="btn" onClick={oc2} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal2}
                            onHide={oc2}
                            title="Dr. ARUNA SINGH"
                            keyboard={true}
                        >
                            <h5>Dr. Aruna Singh is currently serving as a
                                Professor in the School of Chemical Engineering,
                                VIT Vellore, India. She has been visiting professor in Caledonian College of Engineering,
                                Muscat, Sultanate of Oman. She is one of the first researchers to receive a project under
                                the Women Scientist Scheme from DST, Govt. of India. She has done significant research in
                                various fields such as food processing, microwave pre-treatment, solar cabinet design and
                                drying, and ohmic heating design for food slurry treatment. She is currently working on a
                                sewage treatment project in collaboration with YNU, JAPAN. Additionally, she has also served
                                as Principal Investigator for a project under Women Scientist Scheme-A, Govt. of India and
                                co-Principal Investigator of a Newton-Bhabha Scheme Biotechnology project in collaboration
                                with University of Leeds, UK.


                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={oc3} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal3}
                            onHide={oc3}
                            title="Dr. KAZUHO NAKAMURA"
                            keyboard={true}
                        >
                            <h5>Dr. Nakamura Kazuho is currently serving as an
                                Associate Professor at the Department of
                                Material Science and Chemical Engineering at Yokohama National University, Japan. He has
                                done significant research in various fields such as Filtration, Unit Processes, Zeta
                                Potentials and produced a thesis on the study of Filtration and Backwashing Behaviors.
                                Additionally, he has also worked on Grant-In-Aid Scientific Research Projects. Prof Nakamura
                                was honored with the renowned DPI Award for his extensive contribution in the field of
                                research. He has also been associated with several international universities as Visiting
                                Professor such as in The University of California San Francisco.

                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={oc4} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal4}
                            onHide={oc4}
                            title="Dr. JAKUB DREWNOWSKI"
                            keyboard={true}
                        >
                            <h5>Dr. Jakub Drewnowski works as a Professor in the
                                Department of Civil & Environmental
                                Engineering at Gdańsk University of Technology, Poland. His research interests include
                                Wastewater Denitrification, Water and Wastewater Treatment, and Wastewater Analysis and
                                Purification Technologies with simulation tools. He has numerous publications in
                                peer-reviewed journals for the same. He has been the Principal Investigator for two projects
                                under the Ministry of Science and Higher Education targeted for development of young
                                scientific staff and one project co-financed by the European Union for the development of
                                interdisciplinary doctoral studies at GUT, Poland. He has been an integral member of
                                International Water Association’s establishments in Poland, having chaired the conference in
                                2017 and co-chaired in 2016.



                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={oc5} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal5}
                            onHide={oc5}
                            title="Dr. THIRUMALINI S."
                            keyboard={true}
                        >
                            <h5>Dr.Thirumalini Selvaraj, Heritage Research lab, completed her
                                Doctoral research in Heritage Lime mortars characterisation and Simulation and has 15 years of Research
                                experience with  61 publication in the field of heritage materials and structures. Her primary areas of
                                research include developing scientific methods for restoration of heritage structures, chemistry of
                                Traditional building materials used in Indian heritage structures and development of carbon capture
                                technology in buildings using organics additives, circular economy to promote their sustainability. She
                                has a masters in environmental management and works on water and culture and published few research
                                articles on ancient water storage and drainage systems. She was part of “The rain water project” for
                                restoration of a unique water storage structure called step wells in India. She has done repair and
                                restoration for more than  30  heritage  structures  in India  and  documented  around 20 plant  and
                                organic additives  used in the  ancient structure She serves as member in scientific expert committee of
                                Hindu Religious  and charitable endowments board , state  and central Archaeological departments ,
                                Government of India. She has three patents to her credit on organic additives such as Terminalia chebula,
                                Jaggery (unrefined sugar) and plant extracts from Aloe vera on lime mortars to replicate the traditional
                                buildings. She is currently  working on  new  old materials in civil engineering, carbonation potential
                                and carbon storage of  organic lime mortars  in bringing out the sound scientific proof for the use of
                                ancient eco- friendly admixtures in  modern construction.



                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={oc6} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal6}
                            onHide={oc6}
                            title="Dr. GOVARDHAN K."
                            keyboard={true}
                        >
                            <h5>Dr. K Govardhan is a versatile researcher across
                                various domains. He completed his B.E in Electrical and Electronics Engineering from the
                                University of Madras, then did his M.Tech at VIT specialising in Sensor Systems Technology.
                                His PhD was an amalgamation of Computational Fluid Dynamics, Nanotechnology & Sensors. He
                                had ingeniously developed a novel gas-sensing chamber for his PhD research work. He has
                                published more than 30 journals and high-quality conference publications. He is actively
                                involved with various research project collaborations with Cranfield University, UK,
                                University College London, City University, London, International Iberian Nanotechnology
                                Laboratory, Portugal, Sri Lanka Technological Campus, etc. He has worked on various research
                                projects. He has completed an international project with Cranfield University on Aerospace
                                materials to the tune of 50 Lakhs. With a strong background in Sensor System Development, he
                                has guided many of his B.Tech and M.Tech students in designing and developing projects based
                                on sensors, with integrated data acquisition, microcontroller-based smart control and
                                automation, and signal processing circuitry and power management circuitry for these
                                systems. He has expertise in various specialised MEMS and multiphysics tools such as COMSOL
                                Multiphysics, Coventorware, Intellisuite, Ansys, Ansoft, Elecnet, and Magnet. His research
                                interests include Sensors, Nanomaterials, Nanosensors, MEMS, NEMS, FEM, CFD, Smart
                                Automation, and Data Acquisition. He has organised several international conferences and
                                webinars. He was also the Convener of graVITas’20, an International Techno-Management
                                Carnival, the first-ever complete virtual technical fest organised by VIT with participants
                                and industries from over 27 countries taking part in it. He was earlier with the Centre for
                                Nanotechnology Research and currently is with the School of Electronics Engineering at VIT.



                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={oc7} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal7}
                            onHide={oc7}
                            title="Dr. MOHANA ROOPAN S."
                            keyboard={true}
                        >
                            <h5>Dr. Mohana Roopan is an award-winning top 2%
                                scientist with over 12 years of experience in
                                the field of organic chemistry and nanotechnology. He completed his master’s in Organic
                                chemistry and a Ph.D. degree in the subject of organic synthesis at VIT University, Vellore.
                                Currently, he works as an Associate professor at VIT University, India. His research focuses
                                on the application of green nanotechnologies and organic synthesis as well as over 200
                                publications concerning Heterocyclic Chemistry, Organic Synthesis, Photochemistry,
                                Catalysis, and nanomaterial. Dr. Roopan was honored with Novel Research Academy's Best
                                Senior Faculty Award for 2020- 2021, the Dr. APJ Abdul Kalam Distinguished Fellow Award
                                2018-2019 for Chemistry from the Bose Science Society and Novel Research Academy,
                                Pondicherry, and many more.


                            </h5>
                        </MyModal>

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

                            <button type="button" class="btn" onClick={oc8} data-toggle="modal" data-target="#myModal1">
                                Know More
                            </button>
                        </div>

                        <MyModal
                            show={OcModal8}
                            onHide={oc8}
                            title="Dr. ASLAM ABDULLAH M"
                            keyboard={true}
                        >
                            <h5>I, M Aslam Abdullah working as Associate
                                Professor at Vellore Institute of Technology, Vellore; Qualified Doctorate in Petrochemical
                                Technology from Anna University, Chennai, M. Tech. in Gas Engineering from University of
                                Petroleum and Energy Studies, B.Tech in Petrochemical Technology from Bharathidasan
                                University. Proven track record in completing DST-SERB project in the area of waste water
                                treatment. As a faculty, founded Society of Petroleum Engineers-VIT Student Chapter in 2017
                                along with a group of students. Global SPE awarded us as the Best Outstanding Student
                                Chapter Award in 2018 and Presidency Excellence Outstanding Student Chapter Award in 2019.
                                Nominated as IWA-YWP in 2019. Published more than 20 papers in National and International
                                Journals.


                            </h5>
                        </MyModal>

                    </div>


                </div>


            </div >
        </div>
    )
}
