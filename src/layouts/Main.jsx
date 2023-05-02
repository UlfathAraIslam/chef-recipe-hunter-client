import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Chefs from '../pages/Home/Chefs/Chefs';
import Menu from '../pages/Home/Menu/Menu';
import Event from '../pages/Home/Event/Event';

const backgroundImage = {
    backgroundImage: "url('https://media.istockphoto.com/id/909200698/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%BA%80%E9%96%8B%E3%81%AE%E3%83%94%E3%83%B3%E3%82%AF%E3%81%AE%E6%9C%A8%E3%81%AE%E8%8A%B1.jpg?s=612x612&w=0&k=20&c=imEkCf1qzwB2glrpwIt8NNaE7PWsetydmNA5u-etewM=')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
};

const Main = () => {
    return (
        <div style={backgroundImage}>
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