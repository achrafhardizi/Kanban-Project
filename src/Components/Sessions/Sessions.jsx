import React from 'react';
import {Button, Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {CgEnter} from "react-icons/cg";
import {TiTickOutline, TiTimesOutline} from "react-icons/ti";
import {IoExitOutline} from "react-icons/io5";


const Sessions = () => {
    const sessions = [
        {
            name: "ses1",
            description: "hada sesion wa7daaa",
            role: "admin",
            members: [1, 2, 3]
        },
        {
            name: "ses1",
            description: "hada sesion wa7daaa",
            role: "admin",
            members: [1, 2, 3]
        },
        {
            name: "ses1",
            description: "hada sesion wa7daaa",
            role: "admin",
            members: [1, 2, 3]
        },
        {
            name: "ses1",
            description: "hada sesion wa7daaa",
            role: "admin",
            members: [1, 2, 3]
        },
        {
            name: "ses2",
            description: "hada sess 2",
            role: "user",
            members: [1, 2, 3]

        }
    ]
    const invsessions = [
        {
            name: "ses3",
            description: "wa dkhel!",
            members: [1, 2, 3]
        }
    ]

    return (
        <Card style={{padding: 0}}>
            <Card.Body >
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="sessions" title="Sessions courants">
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
                    </Tab>
                    <Tab eventKey="invitations" title="Invitation">
                        {invsessions.map(ses => {
                            return (
                                <Card>
                                    <Card.Header style={{display: "flex"}}>
                                        {ses.name}<div className="buttons" style={{
                                            float: "right",
                                            marginRight: "0",
                                            marginLeft:"auto",
                                            display:"block"
                                    }}>
                                        <Button variant="success" style={{marginRight: "3px"}}><TiTickOutline/></Button>
                                        <Button variant="danger"><TiTimesOutline/></Button>
                                    </div></Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            {"Vous étes invités par user flan flan pour joindre la session"}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )})
                        }
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>

    );
};

export default Sessions;
