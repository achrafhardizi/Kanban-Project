import {useState} from 'react';
import styles from "./Task.module.css"


const Task = () => {

    return (
        <div className={styles.card}>
            <div className={styles["task__tags"]}>

            </div>
            <div className={styles["task__name"]}>
                <span>Task name</span>
                <img src="" alt=""/>
            </div>
        </div>
    );
};

export default Task;
