import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Row } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-ulfath-ara-ulfatharaislam.vercel.app/chefs`)
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

