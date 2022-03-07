import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { BsPlusCircle, BsThreeDotsVertical } from "react-icons/bs";
import Task from "../Task/Task";
import {useState} from 'react'

let taskid = 3;
let secid = 1000;

const Section = ({ name }) => {

    const [tasks, setTasks] = useState([<Task tags={'test tag'} name={'test name'} />,
    <Task tags={'test tag'} name={'test name'} />,
    <Task tags={'test tag'} name={'test name'} />
    ])

    let addTask = () => {
        setTasks(tasks.concat(<Task key={`${taskid++}`} style={{width:'300px'}}/>));
        console.log(`added task with id=${taskid++}`);
    }

    return (
        <Card style={{
            padding: "12px",
            width: '300px',
            margin: '20px',
            minWidth: '18rem',
            maxHeight: '29em',
            borderTop: "3px solid lightgreen",
            backgroundColor: '#f7f8fc',
            flex: "0 0 auto"
        }}>
            <Form className='d-flex'>
                <Card.Title contentEditable="true" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    {name}
                </Card.Title>
                <div style={{cursor:'pointer', margin:'auto'}} onClick={() => console.log('clicked') /*need to route it to kanban settings or create its own modal like tasks  */} ><BsThreeDotsVertical/></div>
            </Form>
            <Card.Body style={{
                overflowY: "auto"
            }}>
                {tasks}
            </Card.Body>
            <Card.Footer style={{
                backgroundColor: "#f7f8fc",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTop: "hidden"
            }}>
                <Button variant={"secondary"} style={{ backgroundColor: "transparent", border: "transparent" }} onClick={addTask}>
                    <span style={{ color: "rgba(0,0,0,0.3)", margin: "3px" }}>Add task</span>
                    <BsPlusCircle style={{ color: "rgba(0,0,0,0.3)" }} size={20} />
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default Section;
