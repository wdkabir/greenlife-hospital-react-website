import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {img, title, description} = props.service
    return (
        <div>
            <Col>
            <Card>
                <Card.Img variant="top" className=" img-fluid rounded-4" src={img}/>
                <Card.Body>
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Text className="d-flex flex-column flex-md-row justify-content-between"><p className="text-muted">{description}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex flex-column flex-md-row card-footer justify-content-between">
                    <Button variant="outline-success"> See Details</Button>
                    <Button variant="outline-success"> Appointment</Button>
                </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Service;