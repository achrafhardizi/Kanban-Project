import React from 'react';
import {Card} from "react-bootstrap";
import {BsThreeDotsVertical} from "react-icons/bs";
import Task from "../Tasks/Task";

const Section = () => {
    return (
        <Card style={{
            width: '18rem',
            display: 'flex',
            flexWrap: "wrap",
            borderTop:"3px solid lightgreen",
            backgroundColor:'#f7f8fc'
        }}>
            <Card.Body>
                <Card.Title style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    Backlog
                    <BsThreeDotsVertical/>
                </Card.Title>
                <Task></Task>
            </Card.Body>

        </Card>
    );
};

export default Section;
