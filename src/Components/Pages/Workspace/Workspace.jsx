import React from 'react';
import {Navibar, Section} from "../../index";
import Task from "../../Tasks/Task";
import styles from './workspace.module.css';

const Workspace = () => {

    const secs = [<Task/>,
        <Task/>,
        <Task/>,
        <Task/>
    ]

    return (
        <>
            <Navibar/>
            <div className={styles.layout}>
                <Section tasks={secs}/>
                <Section tasks={<Task/>}/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
            </div>
        </>

    );
};

export default Workspace;
