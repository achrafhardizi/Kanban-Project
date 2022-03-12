import './App.css';
import {Navibar, LoginPanel, Home, Workspace, Sessions, Appearance, Notification, Photo} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import Task from "./Components/Tasks/Task";
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    const [color, setColor] = useState('');


    return (
        <section className="App" style={{backgroundColor: color}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<LoginPanel/>}/>
                    <Route exact path='home' element={<Home setColor={setColor} color={color}/>}>
                        <Route exact path='sessions' element={<Sessions/>}/>
                        <Route  path='appearance' element={<Appearance/>}/>
                        <Route  path='notifications' element={<Notification/>}/>
                        <Route  path='Background' element={<Photo/>}/>
                    </Route>
                    <Route exact path='section' element={<Workspace/>}/>
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