import './App.css';
import {LoginPanel, Navibar} from './Components'
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navibar />
        </div>
    );
}

export default App;

/*<Container style={{
                width: "25em",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <LoginPanel/>
            </Container> */
