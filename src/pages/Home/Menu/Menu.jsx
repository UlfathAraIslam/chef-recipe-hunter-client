import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const JapaneseMenu = () => {
  const menuItems = [
    {
      name: 'Sushi Roll',
      image: 'https://images.pexels.com/photos/1199971/pexels-photo-1199971.jpeg',
    },
    {
      name: 'Ramen Noodles',
      image: 'https://images.pexels.com/photos/3297363/pexels-photo-3297363.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tempura',
      image: 'https://media.istockphoto.com/id/629614394/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%94%98%E9%85%B8%E3%81%A3%E3%81%B1%E3%81%84%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AE%E5%A4%A9%E3%81%B7%E3%82%89%E3%81%A7%E3%81%8A%E3%81%84%E3%81%97%E3%81%84%E3%82%A8%E3%83%93.jpg?b=1&s=612x612&w=0&k=20&c=N9HyDe5mfdwD7Mw98sQSPIOZ9wCJDP79dvgMvMoSLb8=',
    },
    {
      name: 'Sashimi',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Miso Soup',
      image: 'https://images.pexels.com/photos/772518/pexels-photo-772518.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Matcha Ice Cream',
      image: 'https://images.pexels.com/photos/14761471/pexels-photo-14761471.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="japanese-menu">
      <Container>
        <h2>Japanese Menu</h2>
        <Row>
          <Col>
            <Marquee
              speed={60}
              gradient={false}
              pauseOnHover={true}
              className="marquee"
            >
              {menuItems.map((item, index) => (
                <Card key={index} style={{ width: '10rem', margin: '0 10px' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </Marquee>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JapaneseMenu;
