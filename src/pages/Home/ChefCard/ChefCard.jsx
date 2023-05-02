import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

const ChefCard = ({ chef }) => {
    return (
        <Row  className="mb-4">
            <Col>
                <Card className='h-100'>
                    <Card.Img style={{ height: '250px'}} variant="top" src={chef.picture} />
                    <Card.Body>
                        <Card.Title>{chef.name}</Card.Title>
                        <Card.Text>
                            Years of Experience: {chef.yearsOfExperience}
                        </Card.Text>
                        <Card.Text>
                            Number of Recipes: {chef.numberOfRecipes}
                        </Card.Text>
                        <Card.Text>
                            Likes: {chef.rating}
                        </Card.Text>
                        <Button variant="primary">View Recipes</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default ChefCard;
