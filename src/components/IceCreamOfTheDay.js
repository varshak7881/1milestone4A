import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const IceCreamOfTheDay = () => {
  const [iceCream, setIceCream] = useState({
    name: '',
    image: ''
  });

  useEffect(() => {
    const iceCreams = [
      {
        name: 'Vanilla',
        image: 'https://images.unsplash.com/photo-1729462043494-dda667c69fc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFuaWxsYSUyMGljZWNyZWFtfGVufDB8fDB8fHww'
      },
      {
        name: 'Chocolate',
        image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwaWNlY3JlYW18ZW58MHx8MHx8fDA%3D'
      },
      {
        name: 'Strawberry',
        image: 'https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Ryd2FiZXJyeSUyMGljZWNyZWFtfGVufDB8fDB8fHww'
      },
      {
        name: 'Mango',
        image: 'https://images.unsplash.com/photo-1571251185093-b1b7472d617a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1hbmdvJTIwaWNlY3JlYW18ZW58MHx8MHx8fDA%3D'
      }
    ];

    const randomIndex = Math.floor(Math.random() * iceCreams.length);
    setIceCream(iceCreams[randomIndex]);
  }, []);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card
        style={{
          width: '22rem',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          borderRadius: '15px',
          overflow: 'hidden',
          backgroundColor: '#fff5e6'
        }}
      >
        <Card.Img
          variant="top"
          src={iceCream.image}
          alt={iceCream.name}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Card.Body className="text-center">
          <Card.Title style={{ fontSize: '1.5rem', color: '#ff6600' }}>
            🍨 Ice Cream of the Day
          </Card.Title>
          <Card.Text style={{ fontSize: '1.2rem', fontWeight: '500' }}>
            {iceCream.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default IceCreamOfTheDay;
