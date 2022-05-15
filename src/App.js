import './App.css';
import { LoginPanel, Home, Workspace, Sessions, Appearance, Notification, Photo} from './Components'
import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    const [color, setColor] = useState('');


    return (
        <section className="App" style={{backgroundColor: color}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<LoginPanel/>}/>
                    <Route path='home' element={<Home setColor={setColor} color={color}/>}>
                        <Route index element={<div>Home</div>} />
                        <Route path='sessions' element={<Sessions/>}/>
                        <Route path='settings/appearance' element={<Appearance bg={(bg) => setColor(bg)}/>}/>
                        <Route path='settings/notifications' element={<Notification/>}/>
                        <Route path='settings/Background' element={<Photo/>}/>
                    </Route>
                    <Route exact path='workspace' element={<Workspace/>}/>
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