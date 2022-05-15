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
                    <Route path='home' element={<div style={{backgroundColor: color, padding: "100%"}}><Home setColor={setColor} color={color}/></div>}>
                        <Route path='sessions' element={<Sessions/>}/>
                        <Route path='settings/appearance' element={<Appearance bg={(bg)=>setColor(bg)}/>}/>
                        <Route path='settings/notifications' element={<Notification/>}/>
                        <Route path='settings/Background' element={<Photo/>}/>
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
