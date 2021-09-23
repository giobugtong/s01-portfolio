import React from 'react'
import "./App.css"

import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbotron from './components/Jumbo'
import Footer from './components/Footer'

import { Container, Row, Col } from 'react-bootstrap'

export default function App() {
    return (
        <>
            <Navbar/>
            <Jumbotron/>
            <Container>
                <Row className="justify-content-center align-items center">
                    <Col md={4}><Card/></Col>
                    <Col md={4}><Card/></Col>
                    <Col md={4}><Card/></Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}