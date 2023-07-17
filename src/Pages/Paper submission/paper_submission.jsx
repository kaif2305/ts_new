import { React, useState } from "react";
import Colab_clg from "../Header/colab_clg";
import TablePaperSub from "./table";
import SubmissionForm from "./submission_form";
import Key_dates from "./key_dates";

import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

import "../../Static/css/paper_submission.css";

export default function Paper_Submission() {
  const [show, setShow] = useState(false);
  const [receiptData, setReceiptData] = useState({
    fullName: "",
    email: "",
    paperId: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReceiptData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    setReceiptData((prevState) => ({
      ...prevState,
      file: event.target.files[0],
    }));
  };

  const saveReceipt = () => {
    try {
      axios.post("http://localhost:8081/payment-receipt/upload", receiptData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
    } finally {
      handleClose();
    }
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div className="paper-sub-page-layout">
      <Container>
        <div className="page-title">
          <h1>Paper Payment</h1>
          <h3>Submit your research here.</h3>
        </div>
      </Container>

      <Colab_clg />

      <div className="align-table">
        <h1>REGISTRATION FEE</h1>
        <Container>
          <ul>
            <li>Registration fee is inclusive of 18% GST</li>
            <li>
              Check World Bank high/low income country classification here:
              <a href="#">
                {" "}
                https://99designs.com/profiles/semasstudio/designs/1510123
              </a>
            </li>
          </ul>
        </Container>
        <TablePaperSub />
      </div>

      <div className="align-submission">
        <h1>PAYMENT</h1>
        <Container>
          <ul>
            <li>
              Paper Template link:
              <a href="#"> Paper Template</a>
            </li>
            <li>
              Paper should be submitted only in the prescribed template format
            </li>
            <li>Only PDF files are accepted</li>
            <li>
              Maximum file size is{" "}
              <span style={{ color: "#FA3D3D" }}> 2 MB </span>
            </li>
            <li>
              <span style={{ color: "#FA3D3D" }}>
                Please upload your transaction receipt here for verification{" "}
              </span>
            </li>
            <li>
              {" "}
              <Button variant="primary" onClick={handleShow}>
                Upload Transaction Script
              </Button>
            </li>
          </ul>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Transaction Script Upload </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  name="fullName"
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email address"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleInputChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Paper Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter paper ID"
                  name="paperId"
                  onChange={handleInputChange}
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
                  required
                  name="uploadTransactionScript"
                  onChange={handleFileChange}
                  accept=".pdf"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveReceipt}>
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
      </div>
    </div>
  );
}
