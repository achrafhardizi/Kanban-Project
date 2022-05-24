import {useState} from 'react';
import styles from "./Task.module.css"
import taskEdit from "../../Assets/taskEdit.png"
import {EditTaskColorModal, EditTaskModal, Tag} from "../index";

const Task = (props) => {

    const [task,setTask] = useState(props.task)

    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [showEditTaskColorModal, setShowEditTaskColorModal] = useState(false);

    const [color, setColor] = useState('#616161');

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }


    const editTaskClickHandler = () => {
        setShowEditTaskModal(prevState => !prevState);
    }

    const editTaskColorClickHandler = () => {
        setShowEditTaskColorModal(prevState => !prevState);
    }

    return (
        <>
            <div className={styles.card} onClick={editTaskClickHandler}
                onContextMenu={editTaskColorClickHandler}
                style={{backgroundColor:task.taskColor}}
            >
                <div className={styles["task__tags"]}>
                    {/*<Tag tagName={"important"} tagColor={"#e0465e"}/>*/}
                    {/*<Tag tagName={"optional"} tagColor={"#fbaa49"}/>*/}
                    {/*<Tag tagName={"pending"}/>*/}
                    {task.tags.map(tag => (
                        <Tag key={tag.tagId} tagName={tag.tagName} tagColor={tag.tagColor}/>
                    ))}
                </div>
                <div className={styles["task__name"]}>
                    <span>{task.taskName}</span>
                    <img src={taskEdit}
                         alt="task edit Icon"
                         className={styles["edit__icon"]}
                    />
                </div>
            </div>
            <EditTaskModal show={showEditTaskModal}/>
            <EditTaskColorModal show={showEditTaskColorModal}/>
        </>
    );
};

export default Task;
