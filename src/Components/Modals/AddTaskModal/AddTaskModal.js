import styles from './AddTaskModal.module.css';
import {Modal, Tag} from "../../index";
import classNames from "classnames";
import React, {useState} from "react";
import {BsFillPatchPlusFill} from "react-icons/bs";
import moment from "moment";
import {SliderPicker} from "react-color";
import axios from "axios";


const AddTaskModal = (props) => {

    const [color, setColor] = useState("#607d8b");
    const [taskName, setTaskName] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
    const [finishDate, setFinishDate] = useState(moment().format('YYYY-MM-DD'));

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const startDayOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setStartDate(newDate);
    }

    const finishDayOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setFinishDate(newDate);
    }

    const addTaskSubmitHandler = (event) => {
        event.preventDefault();
        event.stopPropagation()
        if (taskName.trim().length === 0) return;
        if (taskDesc.trim().length === 0) {
            const task = {
                nameTask: taskName,
                colorTask: color,
                startDate: startDate,
                finishDate: finishDate,
                section: props.section
            }
            axios.post(`http://localhost:5000/tasks/add`, task)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            window.location.reload()
            return;
        }
        const task = {
            nameTask: taskName,
            descriptionTask: taskDesc,
            colorTask: color,
            startDate: startDate,
            finishDate: finishDate,
            section: props.section
        }
        axios.post(`http://localhost:5000/tasks/add`, task)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        // window.location.reload()
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={addTaskSubmitHandler}>
                <div className={styles["modal__title"]}>Ajouter une tâche</div>
                <div className={styles["task__name"]}>
                    <label htmlFor="task__name">Nom de la tâche</label>
                    <input type="text" value={taskName} placeholder="Nom de la tâche"
                           onChange={(e) => setTaskName(e.target.value)}
                           required={true}/>
                </div>
                <div className={styles["task__description"]}>
                    <label htmlFor="task__description">Description de la tâche</label>
                    <textarea cols="30" rows="5"
                              onChange={(e) => setTaskDesc(e.target.value)}
                              value={taskDesc}/>
                </div>
                <div className={styles["task__dates"]}>
                    <div className={styles["task__startDay"]}>
                        <label>Date de début :</label>
                        <input type="date" name="startDay" id="startDay" defaultValue={startDate}
                               onChange={startDayOnChangeHandler}
                        />
                    </div>
                    <div className={styles["task__finishDay"]}>
                        <label>Date de fin :</label>
                        <input type="date" name="finishDay" id="finishDay" min={startDate}
                               onChange={finishDayOnChangeHandler}/>
                    </div>
                </div>
                <SliderPicker styles={{width: "100%", marginTop: "1em"}} className='mt-2' color={color}
                              onChange={changeColor}/>
                <button type="submit" className={classNames(styles.addTask, styles["btn-1"])}>Ajouter une tâche</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
