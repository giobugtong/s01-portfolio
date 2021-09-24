import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Jumbo() {
    return (
        <Jumbotron>
            <h1>Welcome to my portfolio!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur excepturi, laudantium voluptatum debitis ratione sapiente nulla corrupti cum adipisci neque corporis eius dolore ullam mollitia, quas laboriosam, nobis iste minima.</p>
            <Button variant="primary">Learn more</Button>
        </Jumbotron>
    )
}