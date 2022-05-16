import styles from "./Section.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {useRef, useState} from "react";
import {AddTaskModal} from "../index";


const Section = (props) => {
    const [sectionName, setSectionName] = useState(props.Name);
    const [showModal, setShowModal] = useState(false);

    const addTaskClickHandler = () => {
        setShowModal(!showModal);
    }

    // const addTaskHandler = () => {
    //     modal.current.showModal();
    // }
    const classes = styles.card + " " + props.className;

    return (
        <div className={classes}>
            <div className={styles["card__title"]}>
                <span>
                    {sectionName}
                </span>
                <FontAwesomeIcon icon={faEllipsisV} style={{color: "#fdfeff"}}/>
            </div>
            <div className={styles["card__content"]}>
                {props.children}
            </div>
            <div className={styles["card__footer"]}>
                <span onClick={addTaskClickHandler}>Add task</span>
                <FontAwesomeIcon onClick={addTaskClickHandler} icon={faCirclePlus} style={{cursor:"pointer"}}/>
                <AddTaskModal show={showModal} showModalHandler={addTaskClickHandler}/>
            </div>
        </div>
    );
};

export default Section;
