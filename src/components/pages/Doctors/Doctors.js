import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <>
    <div className="container">
        <h1 className="text-center mt-5">Our Doctors</h1>
    </div>
        <div className="py-5">
            <Container>
                <Row xs={1} md={3} className="g-4">
                        {
                            doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor> )
                        }
                </Row>
            </Container>
        </div>
        
    </>
    );
};

export default Doctors;