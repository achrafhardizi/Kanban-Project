import React, {useState} from 'react';
import {Section, Sidebar} from "../../index";
import Task from "../../Tasks/Task";
import styles from './workspace.module.css';

let secid = 20;

const Workspace = () => {

    const [sections, setSections] = useState([
        <Section
            key={secid}
            name={
                "Insanely long name wow, lets make it even longer ;) alright good shit"
            }
        />,
        <Section key={secid++} name={"second sec"}/>,
        <Section key={secid++} name={"third sec"}/>,
        <Section key={secid++} name={"fourth sec"}/>,
    ]);

    const addSec = () => {
        setSections(
            sections.concat(<Section key={secid++} name="enter task name here"/>)
        );
    };

    const secs = [<Task/>,
        <Task/>,
        <Task/>,
        <Task/>
    ]

    return (
        <div
            className={styles.page}
        >
            <Sidebar/>
            <div className={styles.body}>

                {/*<div className={styles.layout}>*/}
                {/*    <Section tasks={secs}/>*/}
                {/*    <Section tasks={<Task/>}/>*/}
                {/*    <Section/>*/}
                {/*    <Section/>*/}
                {/*    <Section/>*/}
                {/*    <Section/>*/}
                {/*</div>*/}
            </div>
        </div>

    );
};

export default Workspace;
