import React from 'react';
import {Navibar, Sidebar} from "../index";


const Home = ({setColor,color}) => {



    return (
        <>
            <Navibar bg={color}/>
            <Sidebar/>
        </>
    );
};
// <div style={{margin:'20px 50px 0 210px'}}>
//     <Appearance bg={(bg) => {
//         setColor(bg);
//     }}/>
// </div>
export default Home;
