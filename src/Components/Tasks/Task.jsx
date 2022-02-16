import React from 'react';
import {Badge, Card} from "react-bootstrap";
import {BsChatRight, BsPersonCircle, BsPlusCircle} from "react-icons/bs";
import {BiLinkAlt} from "react-icons/bi";

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
                <div className='taskTitle mb-2'>
                    Company website redesign
                </div>
                <div className='taskFooter d-flex justify-content-between'>
                    <div className="notifis">
                        <BsChatRight /> 1 <BiLinkAlt/> 2
                    </div>
                    <div className="avatars">
                        <BsPlusCircle size={20}/> <BsPersonCircle size={20}/>
                    </div>
                </div>
            </Card.Body>

        </Card>
    );
};

export default Task;
