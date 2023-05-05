import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { Col, Row } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    // console.log(chefs);

    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-ulfath-ara-ulfatharaislam.vercel.app/chefs`)
            .then((response) => response.json())
            .then((data) => setChefs(data));
    }, []);

    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {chefs.map((chef) => (
                <Col key={chef.id}>
                    <ChefCard chef={chef} />
                </Col>
            ))}
        </Row>

    );
};

export default Chefs;

