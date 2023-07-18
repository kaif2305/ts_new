import React from 'react'
import Colab_clg from '../Header/colab_clg'
import TablePaperSub from './table'
import SubmissionForm from './submission_form'
import Key_dates from './key_dates'

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import '../../Static/css/paper_submission.css'

export default function Paper_Submission() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="paper-sub-page-layout">
            <Container>
                <div className="page-title">
                    <h1>Registration Portal</h1>
                    <h3></h3>
                </div>
            </Container>

            <Colab_clg />

            <div className="align-table">
                <h1>REGISTRATION FEE</h1>
                <Container>
                    <ul>
                        <li>Registration fee is inclusive of 18% GST</li>
                        <li>Check World Bank high/low income country classification here:
                            <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups" target="_blank"> https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups</a></li>
                    </ul>
                </Container>
                <TablePaperSub />
            </div>


            <div className="align-submission">
                <h1>PAYMENT</h1>
                <Container>
                    <ul>
                        <li>Paper Template link:
                            <a href="#"> Paper Template</a></li>
                        <li>Paper should be submitted only in the prescribed template format</li>
                        <li>Only PDF files are accepted</li>
                        <li>Maximum file size is <span style={{ color: '#FA3D3D' }}> 2 MB </span></li>
                        <li><span style={{ color: '#FA3D3D' }}>Please upload your transaction receipt here for verification </span>

                        </li>
                        <li> <Button variant="primary" onClick={handleShow}>
                            Upload Transaction Script
                        </Button></li>
                    </ul>
                </Container>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Transaction Script Upload </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter full name"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email address"
                                    placeholder="Enter email"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Paper Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter paer id"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput4"
                            >
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control
                                    type="file"
                                    id="file"
                                    className="custom-file-input"
                                    required name="uploadTransactionScript"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Container fluid>
                    <div className="submission-flex">
                        <div className="sub-left-container">
                            <Key_dates />
                        </div>
                        <div className="sub-right-container">
                            <SubmissionForm />
                        </div>

                    </div>
                </Container>
            </div >




        </div >



    )
}
