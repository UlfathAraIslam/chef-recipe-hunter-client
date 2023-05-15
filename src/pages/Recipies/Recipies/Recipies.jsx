import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from './Banner';
import { Table } from 'react-bootstrap';


const Recipies = () => {

    const { chef } = useLoaderData();
    console.log(chef);

    const [showTable, setShowTable] = useState(true)
    const [favorites, setFavorites] = useState([])

    const rating = 5;

    const handleFavoriteClick = (recipe) => {
        // Check if the recipe is already a favorite
        if (favorites.some(f => f.name === recipe.name)) {
            setFavorites(favorites.filter(f => f.name !== recipe.name))
        } else {
            setFavorites([...favorites, recipe])
        }
    }

    return (
        <Container>
            <Navigationbar />
            <Banner chef={chef} />

            {showTable && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Ingredients</th>
                            <th>Cooking method</th>
                            <th>Rating</th>
                            <th>Favorite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chef?.recipes?.map((recipe, index) => (
                            <tr key={index}>
                                <td>{recipe.name}</td>
                                <td>
                                    <ul>
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{recipe.cookingMethod}</td>
                                <td>{rating}</td>
                                <td>
                                    <Button variant={favorites.some(f => f.name === recipe.name) ? "success" : "outline-success"} onClick={() => handleFavoriteClick(recipe)}>
                                        {favorites.some(f => f.name === recipe.name) ? "Remove from favorites" : "Add to favorites"}
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Footer />
        </Container>
    );
};

export default Recipies;

