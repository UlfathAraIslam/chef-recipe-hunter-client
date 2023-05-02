import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Row } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/chefs`)
            .then((response) => response.json())
            .then((data) => setChefs(data));
    }, []);

    return (
        <Row>
            {chefs.map(chef => (
                <Col lg={4} sm={12}>
                    <ChefCard chef={chef} />
                </Col>
            ))}
        </Row>
    );
};

export default Chefs;

