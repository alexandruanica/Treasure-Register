import React from "react";
import {Row, Col, Container, Button, Image, Form, Nav} from "react-bootstrap";

import login from "./../../Export/login.svg";

function Login() {
    return(
        <Container>
            <Row>
                <Col>
                    <Image src={login} alt={login}/>
                </Col>
                <Col>
                    <h3>Let's get hunting</h3> 
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Nav.Link href="/forgotpass">Forgot Password</Nav.Link>
                        <Button variant="primary" type="submit">Login</Button>
                        <Nav.Link href="/register">Don't have an account? Create one today</Nav.Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;