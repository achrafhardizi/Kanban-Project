import './App.css';
import {LoginPanel, Navibar, Sections, Sidebar} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App ">
            <Navibar/>
            <Sidebar />
        </div>
    );
}

export default App;