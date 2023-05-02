import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Event = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center">Upcoming Events</h2>
            <div className="row mt-5">
                <div className="col-md-4">
                    <Card className='h-100'>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title>Japanese Cooking Workshop</Card.Title>
                            <Card.Text>
                                Join us for a hands-on Japanese cooking workshop where you will learn to make sushi, ramen and other Japanese dishes.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='h-100'>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/684965/pexels-photo-684965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Japanese Food Festival</Card.Title>
                            <Card.Text>
                                Don't miss our annual Japanese food festival featuring a variety of Japanese dishes, drinks and live music.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className='h-100'>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3304057/pexels-photo-3304057.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <Card.Body>
                            <Card.Title>Sake Tasting Event</Card.Title>
                            <Card.Text>
                                Join us for an evening of sake tasting where you will have the opportunity to taste a variety of premium Japanese sake.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Event;
