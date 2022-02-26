import './App.css';
import { Form, Button } from 'react-bootstrap';
import { LoginPanel, Task, Navibar, Sidebar, Body, Section, taskoptions, Taskoptions } from './Components'

function App() {

    const tasks = [<Task tags={'test tag'} name={'test name'} />, <Task tags={'test tag'} name={'test name'} />, <Task tags={'test tag'} name={'test name'} />]

    const sections = [
        <Section id={'first'} name={'Insanely long name wow, lets make it even longer ;) alright good shit'} tasks={tasks} />,
        <Section id={'second'} name={'second sec'} tasks={<Task tags={'test tag'} name={'test name'} />} />,
        <Section id={'third'} name={'third sec'} tasks={<Task tags={'rsdfsd'} name={'tsfqsdfq'} />} />
    ]

    return (
        <div className="App">
            <Navibar />
            <Body sections={sections}/>
        </div>
    );
}

export default App;