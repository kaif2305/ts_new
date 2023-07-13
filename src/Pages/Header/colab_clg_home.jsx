import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

import '../../Static/css/colab_clg_home.css'

export default function Colab_clg() {

    return (
        <div className="clg-home-icon-container">
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
    )
}
