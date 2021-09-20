import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
        <footer className="py-3">
            <Row className="mx-auto text-center justify-content-center align-items-center" style={{maxWidth: "1000px"}}>
                <Col className="" xs={12} md={4} ><a href="#home">Home</a></Col>
                <Col className="" xs={12} md={4} ><a href="#link">Link</a></Col>
                <Col className="" xs={12} md={4} ><a href="#about">About</a></Col>
            </Row>
        </footer>
        </>
    )
}