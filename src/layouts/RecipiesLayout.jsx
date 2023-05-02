import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';

const RecipiesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <h2>Recipies page</h2>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipiesLayout;