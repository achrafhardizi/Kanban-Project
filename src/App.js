import './App.css';
import {LoginPanel, Navibar, Sections, Sidebar} from './Components'
import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App ">
            <Navibar/>
            {/*<Sidebar />*/}
            <Container fluid style={{width: '100%'}}>
                <Row>
                    {/*<Col xs={2}><Sidebar/></Col>*/}
                    <Col>
                        <Container fluid>
                            <Row className='mt-3'>
                                <Col sm={3}><Sections/></Col>
                                <Col sm={3}><Sections/></Col>
                                <Col sm={3}><Sections/></Col>
                                <Col sm={3}><Sections/></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;