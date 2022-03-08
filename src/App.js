import './App.css';
import {Navibar, LoginPanel, Home, Workspace} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import Task from "./Components/Tasks/Task";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <section className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<LoginPanel/>}/>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/section' element={<Workspace/>}/>
                    <Route path="*" element={
                        <h1>
                            {/*todo:this component just for testing*/}
                            404 Page Not Found
                        </h1>
                    }/>
                </Routes>
            </BrowserRouter>
        </section>
    );
}

export default App;