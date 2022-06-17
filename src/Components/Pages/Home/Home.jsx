import React from 'react';
import {Sidebar} from "../../index";
import {Outlet} from 'react-router-dom'
import styles from "./Home.module.css"
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend"


const Home = () => {



    return (
        <DndProvider backend={HTML5Backend}>
            <div
                className={styles.page}
            >
                <Sidebar/>
                <Outlet/>
            </div>
        </DndProvider>
    );
};

export default Home;
