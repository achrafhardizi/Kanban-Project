import './App.css';
import { LoginPanel, Task, Navibar, Sidebar, New, Ongoing, Finished, Cancelled } from './Components'
import { Container, Col, Row } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Container fluid style={{width:'100%'}}>
                <Navibar />

                <Row >
                    <Col xs={2}><Sidebar /></Col>
                    <Col><Container fluid>
                        <Row className='mt-3'>
                            <Col sm={3}><New tasks={<Task />} /></Col>
                            <Col sm={3}><Ongoing /></Col>
                            <Col sm={3}><Finished /></Col>
                            <Col sm={3}><Cancelled /></Col>
                        </Row>
                    </Container></Col>
                </Row>
            </Container>

        </div>
    );
}

export default App;