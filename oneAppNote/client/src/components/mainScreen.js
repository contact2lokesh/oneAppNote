import React from 'react'
import { Container, Row } from 'react-bootstrap';
import "./mainScreen.css"

const MainScreen = ({title, children}) => {
  return (
    <div className='mainConatainer'>
        <Container>
            <Row>
                <div className='page'>{
                    title && (<>
                    <h1 className='title'>{title}</h1>
                    <hr/>

                    </>)} {children}</div>
            </Row>
        </Container>
    </div>
  )
}

export default MainScreen;
