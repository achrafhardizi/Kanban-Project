import styles from "./EditTaskModal.module.css"
import {Modal, Tag} from "../../index";
import React, {useState} from "react";
import classNames from "classnames";
import moment from "moment";
import {FaTimes} from "react-icons/fa"
import {BsFillPatchPlusFill} from "react-icons/bs"
import axios from "axios";


const EditTaskModal = (props) => {

    const [button, setButton] = useState(1);
    const [taskName, setTaskName] = useState(props.task.nameTask);
    const [taskDesc, setTaskDesc] = useState(props.task.descriptionTask);
    const [startDate, setStartDate] = useState(props.task.startDate);
    const [finishDate, setFinishDate] = useState(props.task.finishDate);

    const startDateOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setStartDate(newDate);
    }

    const finishDateOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setFinishDate(newDate);
    }


    const editTaskSubmitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(button === 2){
            axios.delete(`http://localhost:5000/tasks/delete/${props.task.idTask}`)
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
        if(button === 1){
            const task = {
                nameTask : taskName,
                descriptionTask: taskDesc ? taskDesc : "",
                colorTask: props.task.colorTask,
                startDate:startDate,
                finishDate:finishDate,
                section:props.section
            }
            console.log(task);
            axios.put(`http://localhost:5000/tasks/update/${props.task.idTask}`, task)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        window.location.reload();
    }

    return (
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editTaskSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la tâche</div>
                <div className={styles["task__textInfo"]}>
                    <div className={styles["task__name"]}>
                        <label htmlFor="task__name">Nom de la tâche</label>
                        <input type="text"
                               value={taskName}
                               onChange={(e) => setTaskName(e.target.value)}
                               required={true}/>
                    </div>
                    <div className={styles["task__description"]}>
                        <label htmlFor="task__description">Description de la tâche</label>
                        <textarea cols="30" rows="5" value={taskDesc ? taskDesc : ""}
                                  onChange={(e)=>setTaskDesc(e.target.value)}/>
                    </div>
                </div>
                <div className={styles["task__members"]}>
                    <label htmlFor="task__members">Membres</label>
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color:"hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <div className={styles["task__tags"]}>
                    <label htmlFor="task__members">Étiquettes :</label>
                    <div className={styles["tags__group"]} style={{gridTemplateRows: 3}}>
                        {/*<div className={styles["tagItem"]}>*/}
                        {/*    <div style={{backgroundColor: "#e0465e"}}>important</div>*/}
                        {/*    <FaTimes/>*/}
                        {/*</div>*/}
                        {/*<div className={styles["tagItem"]}>*/}
                        {/*    <div style={{backgroundColor: "#fbaa49"}}>optionnel</div>*/}
                        {/*    <FaTimes/>*/}
                        {/*</div>*/}
                        {/*<div className={styles["tagItem"]}>*/}
                        {/*    <div style={{backgroundColor: "#1fc778"}}>en attendant</div>*/}
                        {/*    <FaTimes/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className={styles["task__dates"]}>
                    <div className={styles["task__startDay"]}>
                        <label>Date de début :</label>
                        <input type="date" name="startDay" id="startDay" defaultValue={startDate}
                               onChange={startDateOnChangeHandler}
                        />
                    </div>
                    <div className={styles["task__finishDay"]}>
                        <label>Date de fin :</label>
                        <input type="date" name="finishDay" value={finishDate} id="finishDay" min={startDate}
                               onChange={finishDateOnChangeHandler}/>
                    </div>
                </div>
                <div className={styles["button__group"]}>
                    <button onClick={()=>setButton(1)} type="submit" className={classNames(styles.editTask, styles["btn-1"])}>Modifier la tâche</button>
                    <button onClick={()=>setButton(2)} type="submit" className={classNames(styles.deleteTask, styles["btn-2"])}>Supprimer la tâche
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditTaskModal;
