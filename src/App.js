import './App.css';
import {Navibar, Section, LoginPanel, Sidebar} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import Task from "./Components/Tasks/Task";
import React from "react";

function App() {

    const secs = [<Task />,
        <Task />,
        <Task />,
        <Task />]

    return (
        <section className="App">
            <Navibar/>
            <div className="layout">
                <Section tasks={secs}/>
                <Section tasks={<Task/>}/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
            </div>
            {/*<Sidebar />*/}
        </section>
    );
}

export default App;