import React, {useState} from 'react';
import './Appearance.css';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {SliderPicker, TwitterPicker} from "react-color";

const Appearance = (props) => {
    const [color, setColor] = useState('');
    const [colorsutilise, setColorsutilise] = useState([]);
    const [colors, setColors] = useState(["#0079BF", "#DDAF6F", "#89609E", "#C57B6E", "#AA8DB9", "#CD5A91", "#4BBF6B", "#4AC3D9", "#838C91"]);

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
                        <h4>Couleurs costumize</h4>
                        <SliderPicker color={color} onChange={e => setColor(e.hex)}/>
                        <span style={{margin: "5px"}}/>
                        <TwitterPicker color={color} onChange={e => setColor(e.hex)}/>
                        <hr size="5px"/>
                        <h4>Couleurs recents</h4>
                        <Row xs={"auto"}>
                        {colorsutilise.map((cu, i) => (
                                <Col>
                                    <Card className={"ccard"} style={{backgroundColor: cu, padding: "60px", border: "3px solid lightgrey"}} onClick={() => {setColor(colors[i]);}}/>
                                </Col>
                            ))}
                        </Row>
                        <hr size="5px"/>
                        <h4>Couleurs Kanban</h4>
                        <Row xs={"auto"}>
                            {colors.map((cols, i) =>(
                                <Col>
                                    <Card className={"ccard"} style={{backgroundColor: cols, padding: "60px", border: "3px solid lightgrey"}} onClick={() => {setColor(colors[i]);}}/>
                                </Col>
                            ))}

                        </Row>
                        <Button variant={"success"}  onClick={() => {props.bg(color);setColorsutilise([...colorsutilise, color])}}>Save</Button>
                    </Card.Body>
                   </Form>
                </Card>
            </Card>
        </>
    );
};

export default Appearance;
