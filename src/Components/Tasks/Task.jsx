import React from 'react';
import {Badge, Card} from "react-bootstrap";
import {BsChatRight} from "react-icons/bs";

const Task = () => {
    return (
        <Card>
            <Card.Title style={{
                paddingLeft:"10px",
                paddingTop:"10px"
            }}>
                <Badge>Low priority</Badge>
            </Card.Title>
            <Card.Body>
                <span>
                    Company website redesign <br/>
                </span>
                 <BsChatRight /> 1 
            </Card.Body>

        </Card>
    );
};

export default Task;
