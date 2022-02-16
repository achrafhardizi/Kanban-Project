import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'

const Cancelled = ({ tasks }) => {
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

export default Cancelled;
