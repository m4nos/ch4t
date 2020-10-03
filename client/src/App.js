import React from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

import "./App.scss";

function App() {
  return (
    <div>
      <Container>
        <Row className='bg-white py-5'>
          <Col>
            <h1>REgister</h1>
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='' />
              </Form.Group>
              <div className='text-center'>
                <Button variant='success' type='submit'>
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
