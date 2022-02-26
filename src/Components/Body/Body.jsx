import React from 'react'
import './body.css';
import { Form, Button } from 'react-bootstrap'
import { VscAdd } from 'react-icons/vsc'

const Body = ({sections}) => {

    return (
        <Form className='d-flex'>
            {sections}
            <Button id='add-btn' onClick={() => console.log("Add task pressed!")}>
                <VscAdd />
            </Button>
        </Form>
    )
}

export default Body