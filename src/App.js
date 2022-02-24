import './App.css';
import {Form, Button} from 'react-bootstrap';
import { LoginPanel, Task, Navibar, Sidebar, Section, taskoptions, Taskoptions, Usersettings } from './Components'

function App() {
    return (
        <div className="App">
            <Navibar />
            <Sidebar />
        </div>
    );
}

export default App;

/*<Form className='d-flex'>
                <Section name='To do' tasks={<Task />} />
                <Section name='Finished' tasks={<Task />} />
                <Section name='Ongoing' tasks={<Task />} />
                <Button onClick={() => console.log("Add task pressed!")} style={{
                        height:'100px',
                        width: '100px',
                        backgroundColor: 'grey',
                        border: 'solid grey',
                        margin: '10px',
                        
                    }}>
                    Add Section
                </Button>
            </Form> */