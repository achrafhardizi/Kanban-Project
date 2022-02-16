import React from 'react'
import './new.css'
import { Card, Button, Form } from 'react-bootstrap'

const Newsec = ({ tasks }) => {
    return (
        <Card>
            <Card.Header>New tasks</Card.Header>
            {tasks}
            <Card.Footer>
                <Form className='d-flex justify-content-center'>
                    <Card.Link href="#" style={{color:'grey'}}>+ Add task</Card.Link>
                </Form>
            </Card.Footer>
        </Card>
    )
}

export default Newsec;