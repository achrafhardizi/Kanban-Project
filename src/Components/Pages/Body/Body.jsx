import React from 'react'
import './body.css';
import { Form, Button } from 'react-bootstrap'
import { VscAdd } from 'react-icons/vsc'
import { Section, Navibar } from '../..'

const Body = ({ sections, addSec }) => {

    return (
        <Form className='d-flex' id="sections-controller" style={{ overflow: 'auto' }}>
            {sections}
            <Button className='me-4' id='add-btn' onClick={addSec}>
                <VscAdd />
            </Button>
        </Form>
    )
}

export default Body