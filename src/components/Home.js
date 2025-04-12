import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fffbe6', padding: '30px 0' }}>
      <Container className="mt-4">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://media-cdn.tripadvisor.com/media/photo-s/0f/33/bd/ac/entrance.jpg"
              alt="Gadbad"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Welcome to Ideal Café</h3>
              <p>Experience deliciousness like never before!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://thedeliciouslife.com/wp-content/uploads/2012/09/tiramisu-ice-cream-cake.jpg"
              alt="Tiramisu"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Tiramisu Ice Cream</h3>
              <p>Our top-selling ice cream dish!</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://i.ytimg.com/vi/LvyGMCRNnw8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHbtHQ85kwyoNktRnRvrnixKfG1Q"
              alt="Gadbad"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Gadbad Ice Cream</h3>
              <p>Famous ice cream in Mangalore</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Featured Section */}
        <Row className="mt-5">
          <Col md={6}>
            <Card className="p-3 shadow-sm">
              <Card.Img
                src="https://i.ytimg.com/vi/LvyGMCRNnw8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHbtHQ85kwyoNktRnRvrnixKfG1Q"
              />
              <Card.Body>
                <Card.Title className="fw-bold">Gadbad Ice Cream</Card.Title>
                <Card.Text>Our top-selling ice cream dish!</Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-3 shadow-sm h-100 d-flex justify-content-center">
              <Card.Body>
                <Card.Text className="fs-5 text-center">
                  "The best ice cream I've ever had!" – <strong>John</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Offers Section */}
        <div className="mt-5 p-4 rounded" style={{ backgroundColor: '#fff0e6' }}>
          <h3 className="mb-4 fw-bold text-center">🍨 Exclusive Offers</h3>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1514849302-984523450cf4?w=600"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Buy 1 Get 1 Free</Card.Title>
                  <Card.Text>Order any sundae and get another one free. Limited time offer!</Card.Text>
                  <Button variant="success">Grab Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>20% Off on Orders Above ₹300</Card.Title>
                  <Card.Text>Enjoy savings on your favorites. Automatically applied at checkout.</Card.Text>
                  <Button variant="warning">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGN0xv8373YZmmUFEGrS5V1ADN4kVHwaODg&s"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Free Delivery on First Order</Card.Title>
                  <Card.Text>No delivery charges on your first Ideal Café order. Try now!</Card.Text>
                  <Button variant="info">Start Ordering</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
