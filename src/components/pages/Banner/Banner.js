import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Container, Row } from 'react-bootstrap';
// import banner from '../../../images/banner/banner-image.jpg';
import './Banner.css';

const Banner = () => {
    const appointmentIcon = <FontAwesomeIcon icon={faUserAlt} />
    return (
        <div>
            <section className="banner">
            <Container>
            <Row>
                <Col className="mt-5">
                    <p>SAVE TIME. FEEL BETTER.</p>
                    <h3>Skip The Waiting Room! Register Online Before You Arrive.</h3>
                    <Button variant="success" size="lg">{appointmentIcon} Book an Appointment</Button>
                </Col>
            </Row>
            </Container>
            </section>
            {/* <Image src={banner} fluid /> */}
        </div>
    );
};

export default Banner;