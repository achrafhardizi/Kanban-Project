import {useState} from 'react';
import styles from "./Task.module.css"
import taskEdit from "../../Assets/taskEdit.png"
import {EditTaskColorModal, EditTaskModal, Tag} from "../index";
import classNames from "classnames";

const Task = (props) => {

    const [task, setTask] = useState(props.task)

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
            <div className={classNames(styles.card)} onClick={editTaskClickHandler}
                 onContextMenu={editTaskColorClickHandler}
                 style={{backgroundColor: task.colorTask}}
            >
                <div className={styles["task__tags"]}>
                    {/*{task.tags.map(tag => (*/}
                    {/*    <Tag key={tag.tagId} tagName={tag.tagName} tagColor={tag.tagColor}/>*/}
                    {/*))}*/}
                    tags
                </div>
                <div className={styles["task__name"]}>
                    <span>{task.nameTask}</span>
                    <img src={taskEdit}
                         alt="task edit Icon"
                         className={styles["edit__icon"]}
                    />
                </div>
            </div>
            <EditTaskModal show={showEditTaskModal} section={props.section} task={props.task}/>
            <EditTaskColorModal show={showEditTaskColorModal} color={color} setColor={setColor}/>
        </>
    );
};

export default Task;
