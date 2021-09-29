import React from "react";
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import logo from "./../../Assets/Logo Treasure Hunt.svg";
import "./navbar.css";



function NavBar() {
    return(
        <Navbar bg="light" expand="lg">
         <Container >
            <Navbar.Brand> <img src={logo} alt={logo}/> </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            <style type="text/css">
            {`
            .btn:hover {
            background-color:#EEDBC9;
            color: black;
            }
        `   }
            </style>
                <Nav.Link href="/home"><Button variant="light" size="lg">Home</Button></Nav.Link>
                <Nav.Link href="/about"><Button variant="light" size="lg">About</Button></Nav.Link>
                <Nav.Link href="/faq"><Button variant="light" size="lg">FAQ</Button></Nav.Link>
                <Nav.Link href="/regulament"><Button variant="light" size="lg">Regulament</Button></Nav.Link>
                <Nav.Link href="/sponsori"><Button variant="light" size="lg">Sponsori</Button></Nav.Link>
                <Nav.Link href="/contact"><Button variant="light" size="lg">Contact</Button></Nav.Link>
                <Nav.Link href="/login"><Button variant="light" size="lg">Login</Button></Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar ;