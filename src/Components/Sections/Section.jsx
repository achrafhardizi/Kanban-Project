import React from 'react'
import './section.css'
import { Card, Button, Form } from 'react-bootstrap'

const Section = ({ id, name, tasks }) => {
    return (
        <Card className='section' id={id}>
            <Card.Header>{name}</Card.Header>
            {tasks}
            <Card.Footer>
                <Form className='d-flex justify-content-center'>
                    <Card.Link href="#" style={{color:'grey'}}>+ Add task</Card.Link>
                </Form>
            </Card.Footer>
        </Card>
    )
}

export default Section;