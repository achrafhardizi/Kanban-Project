import React from 'react';
import {Sidebar} from "../../index";
import {Outlet} from 'react-router-dom'
import styles from "./Home.module.css"



const Home = () => {



    return (
        <>
            <div
                className={styles.page}
            >
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    );
};

export default Home;
