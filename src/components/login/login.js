import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import loginicon from "../../images/5.png";
import uiimg from "../../images/1.png";
import "./login.css";

const Login = () => {
  return (
    <>
      <Container className="mt-3">
        <Row>

          <Col lg={4} md={6} sm={12} className="text-center p-3">
            <img className="icon-img" src={loginicon} alt="icon" />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary btn-block" type="submit">
                Submit
              </Button>

              <div className="link mt-1">
                <a href="#" style={{color:'sea blue'}}>Forgot password</a>
              </div>

            </Form>
          </Col>

          <Col lg={8} md={6} sm={12} className="text-center mb-5 p-3">
            <img className="w-100 " src={uiimg} alt="icon" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
