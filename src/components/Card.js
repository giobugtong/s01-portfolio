import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Jumbotron() { 
    return (
        <Card className="my-3 my-md-0 shadow-sm">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="dark">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}