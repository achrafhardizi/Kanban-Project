import React, {useState} from 'react';
import {Appearance, Navibar, Section, Sessions, Sidebar} from "../index";

let secid = 1000;

const Home = ({setColor,color}) => {

    const [sections, setSections] = useState([
        <Section
            key={secid}
            name={
                "Insanely long name wow, lets make it even longer ;) alright good shit"
            }
        />,
        <Section key={secid++} name={"second sec"} />,
        <Section key={secid++} name={"third sec"} />,
        <Section key={secid++} name={"fourth sec"} />,
    ]);

    const addSec = () => {
        setSections(
            sections.concat(<Section key={secid++} name="enter task name here" />)
        );
    };

    return (
        <>
            <Navibar bg={color}/>
            <Sidebar/>
            <div style={{margin:'20px 50px 0 210px'}}>
                <Appearance bg={(bg) => {
                    setColor(bg);
                }}/>
            </div>
        </>
    );
};

export default Home;
