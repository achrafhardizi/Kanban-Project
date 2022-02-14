import './App.css';
import {LoginPanel, Navibar, Sidebar} from './Components'
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navibar />
            <Sidebar />
        </div>
    );
}

export default App;