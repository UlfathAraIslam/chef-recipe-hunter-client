import React from 'react';

import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Banner = ({ chef }) => {
    console.log({chef})
    return (
        <Card className="mb-4">
            <Row className="align-items-center">
                <Col sm={4}>
                    <Image src={chef.picture} fluid />
                </Col>
                <Col sm={8}>
                    <Card.Body>
                        <Card.Title>{chef.name}</Card.Title>
                        <Card.Text>{chef.bio}</Card.Text>
                        <Card.Text>Years of Experience: {chef.yearsOfExperience}</Card.Text>
                        <Card.Text>Number of Recipes: {chef.numberOfRecipes}</Card.Text>
                        <Card.Text>Likes: {chef.rating}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default Banner;