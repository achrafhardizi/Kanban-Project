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
// <div style={{margin:'20px 50px 0 210px'}}>
//     <Appearance bg={(bg) => {
//         setColor(bg);
//     }}/>
// </div>
export default Home;
