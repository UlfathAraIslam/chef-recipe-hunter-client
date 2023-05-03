import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const {name, picture, yearsOfExperience, numberOfRecipes, rating} = chef;
    return (
        <Row  className="mb-4">
            <Col>
                <Card className='h-100'>
                    <Card.Img  fluid style={{ height: '250px'}} variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Years of Experience: {yearsOfExperience}
                        </Card.Text>
                        <Card.Text>
                            Number of Recipes: {numberOfRecipes}
                        </Card.Text>
                        <Card.Text>
                            Likes: {rating}
                        </Card.Text>
                        <Link to='/recipies'><Button variant="primary">View Recipes</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default ChefCard;
