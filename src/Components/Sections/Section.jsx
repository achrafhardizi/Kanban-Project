import styles from "./Section.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"
import {useState} from "react";
import {AddTaskModal, EditSectionModal} from "../index";


const Section = (props,{owned}) => {

    const [section, setSection] = useState(props.section);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [showEditSectionModal, setShowEditSectionModal] = useState(false);
    const [color, setColor] = useState(props.section.sectionColor);

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }


    const addTaskClickHandler = () => {
        setShowAddTaskModal(!showAddTaskModal);
    }

    const editSectionClickHandler = () => {
        setShowEditSectionModal(!showEditSectionModal);
    }


    const classes = styles.card + " " + props.className;

    return (
        <div className={classes} style={{backgroundColor:color}} >
            <div className={styles["card__title"]}>
                <span>
                    {section.nameSection}
                </span>
                <FontAwesomeIcon icon={faEllipsisV} style={{color: "#fdfeff",cursor:"pointer"}} onClick={editSectionClickHandler}/>
                <EditSectionModal show={showEditSectionModal}
                                  showModalHandler={editSectionClickHandler}
                                  section={props.section}
                                  session={props.session}
                                  color={color}
                                  changeColor={changeColor}/>
            </div>
            <div className={styles["card__content"]}>
                {props.children}
            </div>
            <div className={styles["card__footer"]}>
                <span onClick={addTaskClickHandler}>Ajouter une tâche</span>
                <FontAwesomeIcon onClick={addTaskClickHandler} icon={faCirclePlus} style={{cursor:"pointer"}}/>
                <AddTaskModal section={props.section} show={showAddTaskModal} showModalHandler={addTaskClickHandler}/>
            </div>
        </div>
    );
};

export default Section;
