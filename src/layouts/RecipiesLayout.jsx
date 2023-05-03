import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import Recipies from '../pages/Recipies/Recipies/Recipies';

const RecipiesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Recipies></Recipies>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipiesLayout;