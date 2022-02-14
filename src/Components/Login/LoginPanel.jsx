import React from 'react';
import {Button, Card, Form} from "react-bootstrap";

const LoginPanel = () => {
    return (
        <Card style={{
            position:"relative",
            height:"25em"
        }}>
            <center>
                <Card.Header>LogIn</Card.Header>
            </center>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" aria-describedby="passwordBlock"/>
                        <Form.Text id="passwordBlock" muted aria-required="true">
                            Your password must be 8-20 characters long, contain letters and numbers, and
                            must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                </Form>
                <center style={{
                    position:"absolute",
                    bottom :"2.5em",
                    left:"1.75em"
                }}>
                    <Button variant={"secondary"} style={{ backgroundColor:"#5aac44",width:"20em"}}>
                        Log in
                    </Button>
                </center>
            </Card.Body>

        </Card>
    );
};

export default LoginPanel;
