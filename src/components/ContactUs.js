import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Contact Us</h2>
      <Row>
        {/* Contact Form */}
        <Col md={7}>
          <Card className="p-4 shadow-sm">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Type your message here" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Contact Info */}
        <Col md={5}>
          <Card className="p-4 shadow-sm mt-4 mt-md-0">
            <h5 className="mb-3 text-secondary">Get in Touch</h5>
            <p><strong>Address:</strong> Ideal Café, MG Road, Mangalore</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> support@idealcafe.com</p>

            <h6 className="mt-4 text-secondary">Follow us</h6>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
