import React from 'react';
import {Button, Card} from "react-bootstrap";
import {BsPlusCircle, BsThreeDotsVertical} from "react-icons/bs";
import Task from "../Tasks/Task";

const Section = ({title="Block log", tasks}) => {
    return (
        <Card style={{
            padding:"12px",
            minWidth: '18rem',
            maxHeight: '29em',
            borderTop:"3px solid lightgreen",
            backgroundColor:'#f7f8fc',
            flex:"0 0 auto"
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
                {tasks}
            </Card.Body>
            <Card.Footer style={{
                backgroundColor:"#f7f8fc",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderTop:"hidden"
            }}>
                <Button variant={"secondary"} style={{backgroundColor:"transparent",border:"transparent"}}>
                    <span style={{color:"rgba(0,0,0,0.3)",margin:"3px"}}>Add task</span>
                    <BsPlusCircle style={{color:"rgba(0,0,0,0.3)"}} size={20}/>
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default Section;
