import React, {useState} from 'react';
import {Badge, Card, Dropdown, Form} from "react-bootstrap";
import {BsChatRight, BsPersonCircle, BsPlusCircle} from "react-icons/bs";
import {BiDotsHorizontalRounded, BiLinkAlt} from "react-icons/bi";
import {Taskoptions} from "../index";

const Task = ({ tags, name, color = "rgba(255, 255, 255, 1)" }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card
                className="m-3"
                style={{ backgroundColor: color }}
            >
                <Card.Body>
                    <Badge bg="primary">Important!</Badge>
                    <Form className="d-flex justify-content-center mt-3">
                        Testing task{" "}
                        {/*Name of the task, can be used as a description too (following the examples sent on whatsapp)*/}
                    </Form>
                    <Form className="d-flex justify-content-end mt-3">
                        <Dropdown drop={"end"}>
                            <Dropdown.Toggle id="dropdown-basic" onClick={handleShow}>
                                <BiDotsHorizontalRounded />
                            </Dropdown.Toggle>
                        </Dropdown>
                    </Form>
                </Card.Body>
            </Card>
            {show && (
                <Taskoptions handleClose={handleClose} handleShow={handleShow} />
            )}
        </>
    );
};

export default Task;
