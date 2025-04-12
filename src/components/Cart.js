import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Cart = ({ cartItems, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroup.Item key={index}>
            {item.name} - ₹{item.price}
            <Button variant="danger" onClick={() => onRemove(item)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3>Total: ₹{total}</h3>
      <Button variant="success">Checkout</Button>
    </div>
  );
};

export default Cart;
