import './App.css';
import {LoginPanel, Sessions, Navibar, Sidebar, Settings, Notification} from './Components';

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