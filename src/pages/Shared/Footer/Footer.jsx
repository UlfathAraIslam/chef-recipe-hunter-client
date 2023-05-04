import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light p-3">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            Japanese food is a unique and diverse culinary tradition that has been refined over centuries. From delicate sushi rolls to hearty ramen bowls, Japanese cuisine offers something for everyone. 
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <address>
                            1234 Main Street<br />
                            Tokyo, Japan<br />
                            Phone: (123) 456-7890<br />
                            Email: info@japanesecuisine.com
                        </address>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <p className="text-center">&copy; 2023 Japanese Cuisine</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;