import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
        <footer className="py-3">
            <Row className="mx-auto text-center justify-content-center align-items-center" style={{maxWidth: "1000px"}}>
                <Col xs={12} md={3} ><a className="text-muted" href="#home">Home</a></Col>
                <Col xs={12} md={3} ><a className="text-muted" href="#projects">Projects</a></Col>
                <Col xs={12} md={3} ><a className="text-muted" href="#about">About</a></Col>
                <Col xs={12} md={3} ><a className="text-muted" href="#contact">Contact</a></Col>
            </Row>
        </footer>
        </>
    )
}