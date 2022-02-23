import React, {useState} from 'react';
import {Button, Form, InputGroup, Modal} from "react-bootstrap";

const Addsession = (props) => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState([{email: ''}]);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if(form.checkValidity()===false){
            e.preventDefault();
            e.stopPropagation();
        }
        /*props.setsession(session);*/
    }

    const addMail = () =>{
        setEmail([...email,{email: ""}])
    }

    const remMail = (i) =>{
        let newmails = [...email];
        newmails.splice(i, 1);
        setEmail(newmails)
    }



    return (
        <React.Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Créer une session
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nom de session</Form.Label>
                            <Form.Control type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Invitation:</Form.Label><br/>
                            <Form.Text>Ajouter les emails des invités</Form.Text><Button variant={"primary"} size={"sm"} onClick={addMail} style={{margin: "10px", }}>+</Button>
                            <Form.Control type="email" placeholder="Email" style={{marginBottom: "16px"}}/>
                            {email.length ? email.map(() => (
                                <React.Fragment>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            required
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="danger" id="button-addon2" onClick={remMail}>
                                            -
                                        </Button>
                                    </InputGroup>
                                </React.Fragment>
                            )): <p/>}
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit">
                        Créer
                    </Button>
                    <Button variant={"danger"} onClick={props.onHide}>Fermer</Button>
                </Modal.Footer>
                </Form>

            </Modal>
        </React.Fragment>
    );
};

export default Addsession;
