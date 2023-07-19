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


                    </ul>
                </Container>


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
