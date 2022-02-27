import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import { CgEnter } from "react-icons/cg";
import { IoExitOutline } from "react-icons/io5";
import './sessionact.css'

const Sessionact = ({ sessions }) => {
    return (
        <Row className='sessions-sec' xs="auto" style={{ width: "100%" }}>
            {sessions.map(ses => {
                return (
                    <Col style={{ float: "center" }}>
                        <Card style={{ margin: "2px", minWidth: "292px" }}>
                            <Card.Body>
                                <Card.Title>{ses.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{ses.role}</Card.Subtitle>
                                <Card.Text>
                                    {ses.description}
                                </Card.Text>
                                <div className="buttons" style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "16rem"
                                }}>
                                    <Button variant="success"><CgEnter /></Button>
                                    <Button variant="danger"><IoExitOutline /></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>  
    );
};

export default Sessionact;
