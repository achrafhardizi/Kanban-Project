import React from 'react';
import {Card} from "react-bootstrap";
import {BsPlusCircle, BsThreeDotsVertical} from "react-icons/bs";
import Task from "../Tasks/Task";

const Section = ({title="Block log"}) => {
    return (
        <Card style={{
            padding:"12px",
            maxWidth: '18rem',
            maxHeight: '36em',
            borderTop:"3px solid lightgreen",
            backgroundColor:'#f7f8fc',
            flex:"0 0 auto",
            minWidth: "110px"
        }}>
            <Card.Title style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                {title}
                <BsThreeDotsVertical/>
            </Card.Title>
            <Card.Body style={{
                overflowY:"auto"
            }}>
                <Task />
                <Task />
                <Task />
                <Task />
            </Card.Body>
            <Card.Footer style={{
                backgroundColor:"#f7f8fc",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderTop:"hidden"
            }}>
                <span style={{color:"rgba(0,0,0,0.3)",margin:"3px"}}>Add task</span>
                <BsPlusCircle style={{color:"rgba(0,0,0,0.3)"}} size={20}/>
            </Card.Footer>
        </Card>
    );
};

export default Section;
