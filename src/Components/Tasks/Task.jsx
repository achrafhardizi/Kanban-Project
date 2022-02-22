import React from 'react';
import {Badge, Card} from "react-bootstrap";
import {BsChatRight, BsPersonCircle, BsPlusCircle} from "react-icons/bs";
import {BiLinkAlt} from "react-icons/bi";

const Task = ({
                  context="Company website design",
                  chatNum=1,
                  linksNum=2
    }) => {
    return (
        <Card style={{
            marginBottom:"6px"
        }}>
            <Card.Body>
                <Badge style={{
                    marginBottom:"10px"
                }}>
                    Low priority
                </Badge>
                <div className='taskTitle mb-2'>
                    {context}
                </div>
                <div className='taskFooter d-flex justify-content-between'>
                    <div className="notifis">
                        <BsChatRight onClick={event => {console.log('clikced the plus')}}/> {chatNum} <BiLinkAlt/> {linksNum}
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
