import React from 'react'
import { Section } from '..'
import { Form, Button } from 'react-bootstrap'
import { VscAdd } from 'react-icons/vsc'

const Body = ({sections}) => {

    return (
        <Form className='d-flex'>
            {sections}
            <Button onClick={() => console.log("Add task pressed!")} style={{
                height: '50px',
                width: '50px',
                backgroundColor: 'grey',
                border: 'solid grey',
                margin: '10px'
            }}>
                <VscAdd />
            </Button>
        </Form>
    )
}

export default Body