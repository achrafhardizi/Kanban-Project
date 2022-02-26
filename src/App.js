import './App.css';
import { Form, Button } from 'react-bootstrap';
import { LoginPanel, Task, Navibar, Sidebar, Body, Section, taskoptions, Taskoptions } from './Components'

function App() {

    const sections = [
        <Section name={'first sec'} tasks={<Task tags={'test tag'} name={'test name'} />} />,
        <Section name={'second sec'} tasks={<Task tags={'test tag'} name={'test name'} />} />
    ]

    return (
        <div className="App">
            <Navibar />
            <Body sections={sections}/>
        </div>
    );
}

export default App;