import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const Addsession = (props) => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const session = {nom, description};
        setNom(''); setDescription('');
        props.setSession(session);
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
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" onClick={props.onHide}>
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
