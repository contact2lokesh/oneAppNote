import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./landingPage.css";
const landingPage = () => {
  return (
    <div className='main'>
       <Container>
       <Row>
            <div className="introText">
                <div>
                    <h1 className='title'>Welcome to the  OneAppNote.</h1>
                    <p className='subtitle'>Safe place for all your Notes.</p>
                </div>
                <div className='buttonContainer'>
                   <a href="/login">
                       <Button size="lg" className='landingButton' variant="outline-primary">Login</Button>
                   </a>
                   <a href="/register">
                       <Button size="lg" className='landingButton' variant="outline-primary">Signup</Button>
                   </a>
                </div>
            </div>
        </Row>
       </Container>
    </div>
  )
}

export  default landingPage;
