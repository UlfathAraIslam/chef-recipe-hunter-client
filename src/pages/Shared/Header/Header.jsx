import React from 'react'
import { Container } from 'react-bootstrap';
import './Header.css'

const Header = () => {

return (

        <Container fluid className='banner'>

            <div className='banner-text'>
                <h1>Welcome to Japanese cousine</h1>
                <p>Discover new flavors and tastes</p>
            </div>
        </Container>
    )
};

export default Header;

