import React from 'react';
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import './Notification.css';

const Notification = () => {
    return (
        <>
            <Card style={{
                margin: '20px 20px 210px 210px'
            }}>
                <Card.Body>
                    <Form>
                        <section className="content-area">
                            <div className="table-area">
                                <table className="responsive-table table">
                                    <thead>
                                    <tr>
                                        <th>Notification settings</th>
                                        <th>OFF/ON</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>notification 1</td>
                                        <td><Form.Check
                                            style={{paddingTop: "5px"}}
                                            type="switch"
                                            id="custom-switch"
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td>notification 2</td>
                                        <td><Form.Check
                                            style={{paddingTop: "5px"}}
                                            type="switch"
                                            id="custom-switch"
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td>notification 3</td>
                                        <td><Form.Check
                                            style={{paddingTop: "5px"}}
                                            type="switch"
                                            id="custom-switch"
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td>notification 4</td>
                                        <td><Form.Check
                                            style={{paddingTop: "5px"}}
                                            type="switch"
                                            id="custom-switch"
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td>notification 5</td>
                                        <td><Form.Check
                                            style={{paddingTop: "5px"}}
                                            type="switch"
                                            id="custom-switch"
                                        /></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </Form>
                    {/*<Container style={{
                        border: "2px solid black",
                        margin: "5px"
                    }}>
                        <Row xs={2}>
                            <Col sm>shno biti</Col>
                            <Col sm>ah ola la</Col>
                        </Row>
                        <Row xs={2}>
                            <Col>shno biti</Col>
                            <Col>ah ola la</Col>
                        </Row>
                        <Row xs={2}>
                            <Col>shno biti</Col>
                            <Col>ah ola la</Col>
                        </Row>
                        <Row xs={2}>
                            <Col>shno biti</Col>
                        <Col>ah ola la</Col>
                        </Row>
                    </Container>*/}
                </Card.Body>
            </Card>
        </>
    );
};

export default Notification;
