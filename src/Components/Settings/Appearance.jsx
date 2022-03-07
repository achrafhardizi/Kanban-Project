import React, {useState} from 'react';
import './Appearance.css';
import {Button, Card, Col, Form, Row} from "react-bootstrap";

const Appearance = (props) => {
    const [color, setColor] = useState('');
    const colors = ["#AC4C7A#0079BF", "#DDAF6F", "#89609E", "#C57B6E", "#AA8DB9", "#CD5A91", "#4BBF6B", "#4AC3D9", "#838C91"]

    return (
        <>
            <Card style={{
                padding: "30px",
                height: "86.5vh",
                overflow: "auto"
            }}>
                <Card>
                <Card.Header>Background Color</Card.Header>
                   <Form>
                    <Card.Body>
                        <Row xs={"auto"}>
                            {colors.map((cols, i) =>(
                                <Col>
                                    <Card className={"ccard"} style={{backgroundColor: cols, padding: "60px", border: "3px solid lightgrey"}} onClick={() => {setColor(colors[i]);}}/>
                                </Col>
                            ))}
                            <Col style={{
                                margin: "45px"
                            }}>
                            <Form.Control
                                type="color"
                                id="exampleColorInput"
                                title="Choose your color"
                                onChange={(e) => {setColor(e.target.value);}}
                            />
                            </Col>

                        </Row>
                        <Button variant={"success"}  onClick={() => props.bg(color)}>Save</Button>
                    </Card.Body>
                   </Form>
                </Card>
            </Card>
        </>
    );
};

export default Appearance;
