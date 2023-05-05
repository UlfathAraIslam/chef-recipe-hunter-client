import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipies = () => {
    const { id } = useParams();

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-ulfath-ara-ulfatharaislam.vercel.app/chefs/${id}`)

            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, [id]);
    

    return (
        <Row className="mb-4">
            {recipes.map(recipe => (
                <Col key={recipe.id}>
                    <Card className='h-100'>
                        <Card.Img style={{ height: '250px' }} variant="top" src={recipe.picture} />
                        <Card.Body>
                            <Card.Title>{recipe.name}</Card.Title>
                            <Card.Text>
                                Years of Experience: {recipe.yearsOfExperience}
                            </Card.Text>
                            <Card.Text>
                                Number of Recipes: {recipe.numberOfRecipes}
                            </Card.Text>
                            <Card.Text>
                                Likes: {recipe.rating}
                            </Card.Text>
                            <Card.Text>Recipes:</Card.Text>
                            <ul>
                                {recipe.recipes.map((recipe, index) => (
                                    <li key={index}>{recipe.name}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Recipies;
