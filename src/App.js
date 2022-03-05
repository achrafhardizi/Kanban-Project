import './App.css';
import {Navibar, Section, LoginPanel, Sidebar, Home} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import Task from "./Components/Tasks/Task";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    const secs = [<Task/>,
        <Task/>,
        <Task/>,
        <Task/>
    ]

    return (
        <section className="App">
            {window.location.href === "http://localhost:3000/" ? null : <Navibar/>}
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<LoginPanel/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/section' element={
                        <div className="layout">
                            <Section tasks={secs}/>
                            <Section tasks={<Task/>}/>
                            <Section/>
                            <Section/>
                            <Section/>
                            <Section/>
                        </div>}/>
                </Routes>

            </BrowserRouter>
        </section>
    );
}

export default App;