import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Recipies = () => {
    

    return (
        <Row className="mb-4">
            {/* <Col>
                <Card className='h-100'>
                    <Card.Img style={{ height: '250px' }} variant="top" src={picture} />
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
                        <Card.Text>Recipes:</Card.Text>
                        <ul>
                            {recipes.map((recipe, index) => (˜
                                <li key={index}>{recipe.name}</li>
                            ))}
                        </ul>
                    </Card.Body>
                </Card>
            </Col> */}
        </Row>
    );
};

export default Recipies;
