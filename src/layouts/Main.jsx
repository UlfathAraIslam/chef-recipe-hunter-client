import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Chefs from '../pages/Home/Chefs/Chefs';
import Menu from '../pages/Home/Menu/Menu';
import Event from '../pages/Home/Event/Event';
import Navigationbar from '../pages/Shared/Navigationbar/Navigationbar';



const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            
            <Header></Header>
            
            <Container>
                <Row>
                    <Col><Chefs></Chefs></Col>
                </Row>
                <Row>
                    <Col><Menu></Menu></Col>
                </Row>
                <Row>
                    <Col><Event></Event></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;