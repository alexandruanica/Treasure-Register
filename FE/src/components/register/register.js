import React from "react";
import {Row, Col, Container, Button, Image, Form} from "react-bootstrap";
import logo from "./../../Export/register.svg";

function Register(){
    return (
        <Container>
            <Row>
                <Col>
                <h2>Let's get hunting</h2>
                <Form>
                    <Form.Control type="text" placeholder="First Name"></Form.Control>      
                    <Form.Control type="text" placeholder="Last Name"></Form.Control>  
                    <Form.Control type="text" placeholder="Email"></Form.Control>  
                    <Form.Control type="password" placeholder="Password"></Form.Control>  
                    <Form.Control type="password" placeholder="Confirm Password"></Form.Control>  
                    <Form.Control type="text" placeholder="Phone"></Form.Control>  
                    <Form.Control type="text" placeholder="Optiune Rol"></Form.Control>  
                    <Button>Register</Button>
                </Form>
                </Col>
                <Col>
                <Image  src={logo} alt={logo}/>
                </Col>
            </Row>
        </Container>
    );
}
export default Register;