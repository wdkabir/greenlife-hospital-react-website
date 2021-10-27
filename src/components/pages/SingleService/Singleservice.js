import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Singleservice = () => {
    const [single, setSingle] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/wdkabir/greenlife-medical-care-images/main/services.JSON')
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    const { id } = useParams();
    const alldetails = single.filter(service => service.id == id);
    console.log(single);
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="card mb-3 single-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={alldetails[0]?.img} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-3 text-bolder text-muted">{alldetails[0]?.title}</h5>
                                <p className="card-text text-justify fs-6 text-bolder text-muted">{alldetails[0]?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/services">
                        <Button variant="info fs-5 text-bolder text-white">Another Services</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Singleservice;