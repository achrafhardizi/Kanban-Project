import styles from "./Section.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {useState} from "react";
import {AddTaskModal, EditSectionModal} from "../index";


const Section = (props) => {
    const [sectionName, setSectionName] = useState(props.Name);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [showEditSectionModal, setShowEditSectionModal] = useState(false);


    const addTaskClickHandler = () => {
        setShowAddTaskModal(!showAddTaskModal);
    }

    const editSectionClickHandler = () => {
        setShowEditSectionModal(!showEditSectionModal);
    }

    const classes = styles.card + " " + props.className;

    return (
        <div className={classes}>
            <div className={styles["card__title"]}>
                <span>
                    {sectionName}
                </span>
                <FontAwesomeIcon icon={faEllipsisV} style={{color: "#fdfeff",cursor:"pointer"}} onClick={editSectionClickHandler}/>
                <EditSectionModal show={showEditSectionModal} showModalHandler={editSectionClickHandler} />
            </div>
            <div className={styles["card__content"]}>
                {props.children}
            </div>
            <div className={styles["card__footer"]}>
                <span onClick={addTaskClickHandler}>Add task</span>
                <FontAwesomeIcon onClick={addTaskClickHandler} icon={faCirclePlus} style={{cursor:"pointer"}}/>
                <AddTaskModal show={showAddTaskModal} showModalHandler={addTaskClickHandler}/>
            </div>
        </div>
    );
};

export default Section;
