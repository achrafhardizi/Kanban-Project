import {useState} from 'react';
import styles from "./Task.module.css"
import taskEdit from "../../Assets/taskEdit.png"
import {EditTaskColorModal, EditTaskModal, Tag} from "../index";
import classNames from "classnames";

const Task = (props) => {

    const [task, setTask] = useState(props.task)

    const [deadline, setDeadline] = useState()
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
                    {task.taches_tags.map(tag => (
                        <Tag key={tag.idTag} tagName={tag.nameTag} tagColor={tag.tagColor}/>
                    ))}
                </div>
                <div className={styles["task__name"]}>
                    <span>{task.nameTask}</span>
                    <img src={taskEdit}
                         alt="task edit Icon"
                         className={styles["edit__icon"]}
                    />
                </div>
            </div>
            <EditTaskModal show={showEditTaskModal} sessionId={props.sessionId} section={props.section} task={props.task} tags={props.tags}/>
            <EditTaskColorModal show={showEditTaskColorModal} section={props.section} task={props.task} color={color} changeColor={changeColor}/>
        </>
    );
};

export default Task;
