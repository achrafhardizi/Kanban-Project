import './App.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { LoginPanel, Task, Navibar, Sidebar, Body, Section, taskoptions, Taskoptions, Sessions, Home, Addsection } from './Components'
import { useState } from 'react'

let secid = 1000;

function App() {

    

    const [sections, setSections] = useState([
        <Section key={secid} name={'Insanely long name wow, lets make it even longer ;) alright good shit'} />,
        <Section key={secid++} name={'second sec'}   />,
        <Section key={secid++} name={'third sec'}  />,
        <Section key={secid++}  name={'fourth sec'}  />
    ])

    const addSec = () => {
        setSections(sections.concat(<Section key={secid++} name='enter task name here'  />))
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