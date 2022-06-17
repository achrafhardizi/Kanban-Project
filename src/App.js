import {
    LoginPanel,
    Home,
    Workspace,
    Sessions,
    Appearance,
    Notification,
    SignUp,
    ForgotPass,
    ResetPassword, Profile
} from './Components'
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';


const App = () => {

    const [color, setColor] = useState('');

    return (
        <section className="App" style={{backgroundColor: color}}>
            <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<LoginPanel/>}/>
                        <Route exact path="signUp" element={<SignUp/>}/>
                        <Route exact path="forgotPassword" element={<ForgotPass/>}/>
                        <Route exact path="resetPassword/:userId" element={<ResetPassword/>}/>
                        <Route path='sessions' element={<Home setColor={setColor} color={color}/>}>
                            <Route index element={<Sessions/>}/>
                            <Route path='workspace:sessionId' element={<Workspace/>}/>
                            <Route path='settings/appearance' element={<Appearance bg={(bg) => setColor(bg)}/>}/>
                            <Route path='settings/notifications' element={<Notification/>}/>
                        </Route>
                        <Route path="profile" element={<Profile/>}/>
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