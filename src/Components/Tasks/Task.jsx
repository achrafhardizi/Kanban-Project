import {useState} from 'react';
import styles from "./Task.module.css"
import taskEdit from "../../Assets/taskEdit.png"
import {EditTaskModal, Tag} from "../index";

const Task = () => {

    const [showEditTaskModal, setShowEditTaskModal] = useState(false);

    const editTaskClickHandler = () => {
        console.log("showModal " + showEditTaskModal);
        setShowEditTaskModal(prevState => !prevState);
    }

    return (
        <>
            <div className={styles.card} onClick={editTaskClickHandler}>
                <div className={styles["task__tags"]}>
                    <Tag tagName={"important"} tagColor={"#e0465e"}/>
                    <Tag tagName={"optional"} tagColor={"#fbaa49"}/>
                    <Tag tagName={"pending"}/>
                </div>
                <div className={styles["task__name"]}>
                    <span>Task name</span>
                    <img src={taskEdit}
                         alt="task edit Icon"
                         className={styles["edit__icon"]}
                    />
                </div>
            </div>
            <EditTaskModal show={showEditTaskModal}/>
        </>
    );
};

export default Task;
