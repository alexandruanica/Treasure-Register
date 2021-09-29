import React from "react";
import {Row, Col, Container, Button, Image} from "react-bootstrap";
import home from "./../../Export/home.svg";
// import ig from "./../../Assets/instagram.svg";
// import linkedin from "./../../Assets/linkedin.svg";
// import yt from "./../../Assets/youtube.svg";
// import fb from "./../../Assets/facebook.svg";

import './home.css';

function Home () {
    return(
        <Container >
            <Row className="justify-content-md-center p-5">
                <Col md={4} className="order-last order-md-first offset-md-1">
                    <div className="p-5 left-component">
                    <h1>Treasure Hunt</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                        duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                         et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                          Stet clita kasd gubergren, no sea takimata sanctus est Lorem</p>
                    <Button className="primary">Read More</Button>
                    </div>
                </Col>
                <Col md={6} className="text-center image-container p-5">
                    <Image className="main-image w-50" src={home} alt={home}></Image>
                    {/* <Row className="justify-content-md-center">
                        <Col sm={3}><Image src={yt} alt={yt}></Image></Col>
                        <Col sm={3}><Image src={linkedin} alt={linkedin}></Image></Col>
                        <Col sm={3}><Image src={ig} alt={ig}></Image></Col>
                        <Col sm={3}><Image src={fb} alt={fb}></Image></Col>
                    </Row> */}
                </Col>
            </Row>
        </Container>
        
    );
}

export default Home;