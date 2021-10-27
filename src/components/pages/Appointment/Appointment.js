import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-md-2"></div>
                    <div className="col-md-8 my-5">
                    <Form className="contact">
                    <Form.Text className="text-center">
                            <h1 className="py-3">Make An Appointment</h1>
                        </Form.Text>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Address" />
                        </Form.Group>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridServices">
                                <Form.Select defaultValue="Choose..." placeholder="Services">
                                    <option>Services</option>
                                    <option>Child Care Assistance</option>
                                    <option>Dental Services</option>
                                    <option>Flu / Vaccine Shot</option>
                                    <option>Health Checks</option>
                                    <option>Mental Health</option>
                                    <option>Pharmacy</option>
                                    <option>Physical Therapy</option>
                                    <option>Reproductive Health</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formNumber">
                            <Form.Control type="number" placeholder="Number" />
                            </Form.Group>
                        </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                 <Form.Control as="textarea" rows={3} placeholder="Massage"/>
                            </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                    <div className="col-md-2">
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;