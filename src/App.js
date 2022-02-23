import './App.css';
import { Navibar, Section ,LoginPanel} from './Components'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <section className="App">
            <Navibar/>
            {/*<div className="layout">*/}
            {/*    <Section/>*/}
            {/*    <Section/>*/}
            {/*    <Section/>*/}
            {/*    <Section/>*/}
            {/*    <Section/>*/}
            {/*    <Section/>*/}
            {/*</div>*/}
            <LoginPanel />
        </section>
    );
}

export default App;