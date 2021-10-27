import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import GreelifeLogo from '../../../images/greenlife-hospital-logo.png';
import GreenlifeHospital from '../../../images/greenlife-hospital.png';
import './About.css';

const About = () => {
    return (
        <div>
            <Container>
                <Row className="about my-5 px-5">
                    <h1 className="my-3">About Us</h1> 
                    <hr/>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <Image src={GreelifeLogo} fluid width="200" />
                        </div>
                        <div className="mb-3">
                        <Image src={GreenlifeHospital} fluid />
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div>
                        <h1 className="my-1">Ours Story</h1>
                        <p className="text-justify py-3">In 2005, about 50 distinguished physicians of the country started a Hospital to give specialized care in the private sector. They named it Green Life Hospital and it turned out to be a great success. So in 2009, they decided to make a medical college which will be a non-government, non-profit, self-financing project and will serve the humanity. This College came into existence in 2009. The college commences its activities with the enrollment of 51 students in the 1st batch in 2010. Since inception, the college has undergone tremendous development and became a splendid centre for learning and development. At present we are enrolling 110 students each year. Among them, numbers of seats are reserved for overseas students. Right at this moment  76 foreign students are studying , among them 50 students are male and 16 are female.</p>
                        </div>
                        
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;