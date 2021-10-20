import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <>
    <div className="container">
        <h1 className="text-center mt-5">Our Medical Services</h1>
    </div>
        <div className="py-5">
            <Container>
                <Row xs={1} md={3} className="g-4">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service> )
                        }
                </Row>
            </Container>
        </div>
        
    </>
    );
};

export default Services;