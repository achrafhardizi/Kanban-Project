import React from 'react';
import './section.css';
import { Card, Form, Row, Col } from "react-bootstrap";
import { BsPlusCircle, BsThreeDotsVertical } from "react-icons/bs";
import Task from "../Task/Task";

const Section = ({ id, name, tasks }) => {
    return (
        <Card className={`section-card${id}`} >
            <Card.Header id='section-title' >
                <Row>
                    <Col lg={10}>{name}</Col>
                    <Col><Card.Link href="#" style={{ color: 'grey', marginLeft: '0 0 auto' }}><BsThreeDotsVertical /></Card.Link></Col>
                </Row>
            </Card.Header>
            <Card.Body>
                {tasks}
            </Card.Body>
            <Card.Footer className='section-footer'>
                <Form className='d-flex justify-content-center'>
                    <Card.Link href="#" style={{ color: 'grey' }}><BsPlusCircle style={{ color: "rgba(0,0,0,0.3)" }} size={20} /> Add task</Card.Link>
                </Form>
            </Card.Footer>
        </Card>
    );
};

export default Section;
