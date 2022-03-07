import './App.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { LoginPanel, Task, Navibar, Sidebar, Body, Section, taskoptions, Taskoptions, Sessions, Home, Addsection } from './Components'
import { useState } from 'react'

let taskid = 3;
let secid = 1000;

function App() {

    const [tasks, setTasks] = useState([<Task tags={'test tag'} name={'test name'} />,
    <Task tags={'test tag'} name={'test name'} />,
    <Task tags={'test tag'} name={'test name'} />
    ])

    let addTask = () => {
        setTasks(tasks.concat(<Task key={`${taskid++}`}/>));
        console.log(`added task with id=${taskid++}`);
    }

    const [sections, setSections] = useState([
        <Section key={secid} name={'Insanely long name wow, lets make it even longer ;) alright good shit'} addTask={addTask} tasks={tasks} />,
        <Section key={secid++} name={'second sec'} tasks={<Task tags={'test tag'} name={'test name'} />} addTask={addTask} />,
        <Section key={secid++} name={'third sec'} tasks={<Task tags={'rsdfsd'} name={'tsfqsdfq'} addTask={addTask} />} />,
        <Section key={secid++} addTask={addTask} name={'fourth sec'} tasks={<Task tags={'rsdfsd'} name={'tsfqsdfq'} />} />
    ])

    const addSec = () => {
        setSections(sections.concat(<Section key={taskid++} name='enter task name here' addTask={addTask} />))
    }

    return (
        <div className="App">
            <Navibar />
            <Taskoptions />
            <Body addSec={addSec} sections={sections} />
        </div>
    );
}

export default App;