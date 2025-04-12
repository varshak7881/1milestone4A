
import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Container } from 'react-bootstrap';

const Menu = () => {
  const [filter, setFilter] = useState('All');

  const menuItems = [
    {
      name: 'Gadbad Ice Cream',
      description: 'A mixed ice cream delight',
      price: 150,
      category: 'Ice Cream',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6n6pSWh6kw2BIuFLxYc6lc83c4LmuH73kA&s'
    },
    {
      name: 'Chocolate Cake',
      description: 'A rich chocolate cake',
      price: 100,
      category: 'Dessert',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      name: 'Cold Coffee',
      description: 'Chilled coffee with ice cream',
      price: 90,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      name: 'French Fries',
      description: 'Crispy golden fries',
      price: 70,
      category: 'Snacks',
      image: 'https://plus.unsplash.com/premium_photo-1692833836692-5b5f1500a287?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
    }
  ];

  const filteredItems = menuItems.filter(item => filter === 'All' || item.category === filter);

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Menu</h2>

      <Form className="mb-4">
        <Form.Control
          as="select"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option>All</option>
          <option>Ice Cream</option>
          <option>Dessert</option>
          <option>Beverages</option>
          <option>Snacks</option>
        </Form.Control>
      </Form>

      <Row>
        {filteredItems.map((item, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>₹{item.price}</strong></Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;

