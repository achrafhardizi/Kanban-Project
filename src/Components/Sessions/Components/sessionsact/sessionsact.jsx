import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {CgEnter} from "react-icons/cg";
import {IoExitOutline} from "react-icons/io5";

const Sessionact = ({sessions}) => {
    return (
        <React.Fragment>
            <Row xs={4} style={{width: "99.999%"}} gutter={40}>
                {sessions.map(ses => {
                    return (
                        <Col>
                            <Card style={{width: '18rem', margin: "5px"}}>
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
                                        <Button variant="success"><CgEnter/></Button>
                                        <Button variant="danger"><IoExitOutline/></Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

export default Sessionact;
