import React from 'react';
import './task.css';
import PropTypes from 'prop-types';
import { Taskoptions } from '..'
import { Dropdown, Button, Card, Form } from 'react-bootstrap';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const Task = ({ tags, name }) => {

    return (
        <Card className='m-3'>
            <Card.Body>
                Important! {/*we add borders for this cuz it's meant to be a tag + colors and stuff*/}
                <Form className='d-flex justify-content-center mt-3'>
                    Testing task {/*Name of the task, can be used as a description too (following the examples sent on whatsapp)*/}
                </Form>
                <Form className='d-flex justify-content-end mt-3'>
                    <Dropdown drop={'end'}>
                        <Dropdown.Toggle id="dropdown-basic"><BiDotsHorizontalRounded /></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Taskoptions />
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Card.Body>
        </Card>
    )
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    desc: PropTypes.string,
    start: PropTypes.string.isRequired,
    finish: PropTypes.string.isRequired
}

export default Task
