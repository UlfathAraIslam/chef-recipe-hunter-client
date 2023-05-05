import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../pages/Shared/Footer/Footer';
import Recipies from '../pages/Recipies/Recipies/Recipies';
import Navigationbar from '../pages/Shared/Navigationbar/Navigationbar';

const RecipiesLayout = ()  => {
    return (
        <div>
            <Navigationbar></Navigationbar>

            <Container>
                
                    <Recipies></Recipies>
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default RecipiesLayout;