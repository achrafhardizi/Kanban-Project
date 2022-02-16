import './App.css';
import {LoginPanel, Navibar, Sections, Sidebar} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App ">
            <Navibar />
            <Sidebar />
            <section style={{
                marginTop:"12px",
                marginLeft:"180px"
            }}>
                <Sections  />
            </section>
        </div>
    );
}

export default App;