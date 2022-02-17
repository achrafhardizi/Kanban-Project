import './App.css';
import {LoginPanel, Sessions, Navibar, Sidebar} from './Components'
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navibar />
            <Sidebar />
            <div className="content"><Sessions/></div>
        </div>
    );
}

export default App;