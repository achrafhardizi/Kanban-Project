import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const LoginPanel = () => {

    const [validated, setValidated] = useState(false);
    let navigate = useNavigate();


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() !== false) {
            setValidated(true);
            navigate('/home')
        }
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <Container style={{
            width: "25em",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>

            <Form validated={true} onSubmit={handleSubmit}>
                <Card style={{
                    position: "relative",
                    height: "25em"
                }}>
                    <center>
                        <Card.Header>LogIn</Card.Header>
                    </center>
                    <Card.Body>
                        <Form.Group controlId="validation">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" spellCheck
                                          required/>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validation02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                          spellCheck
                                          required/>
                            <Form.Text id="passwordBlock" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and
                                must not contain spaces, special characters, or emoji.
                            </Form.Text>
                        </Form.Group>
                        <center style={{
                            position: "absolute",
                            bottom: "2.5em",
                            left: "1.75em"
                        }}>
                            <Button
                                type="submit"
                                variant={"secondary"}
                                style={{backgroundColor: "#5aac44", width: "20em"}}
                            >
                                Log in
                            </Button>
                        </center>
                    </Card.Body>
                </Card>
            </Form>
        </Container>
    )
        ;
};

export default LoginPanel;
