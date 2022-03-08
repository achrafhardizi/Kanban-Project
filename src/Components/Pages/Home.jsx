import React from 'react';
import {Navibar, Sessions, Sidebar} from "../index";

const Home = () => {
    return (
        <>
            <Navibar/>
            <Sidebar/>
            <div style={{marginLeft:"165px",marginTop:"20px"}}>
                <Sessions/>
            </div>
        </>
    );
};

export default Home;
