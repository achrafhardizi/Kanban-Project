import styles from "./EditTaskModal.module.css"
import {Modal, Tag} from "../../index";
import React, {useState} from "react";
import classNames from "classnames";
import moment from "moment";
import {FaTimes} from "react-icons/fa"
import {BsFillPatchPlusFill} from "react-icons/bs"


const EditTaskModal = (props) => {

    const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
    const [finishDate, setFinishDate] = useState(moment().format('YYYY-MM-DD'));

    const startDayOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setStartDate(newDate);
    }

    const finishDayOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setFinishDate(newDate);
    }

    const editTaskSubmitHandler = () => {
        /*logic*/
    }

    return (
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editTaskSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la tâche</div>
                <div className={styles["task__textInfo"]}>
                    <div className={styles["task__name"]}>
                        <label htmlFor="task__name">Nom de la tâche</label>
                        <input type="text" placeholder="Nom de la tâche" required={true}/>
                    </div>
                    <div className={styles["task__description"]}>
                        <label htmlFor="task__description">Description de la tâche</label>
                        <textarea cols="30" rows="5"/>
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
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#e0465e"}}>important</div>
                            <FaTimes/>
                        </div>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#fbaa49"}}>optionnel</div>
                            <FaTimes/>
                        </div>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#1fc778"}}>en attendant</div>
                            <FaTimes/>
                        </div>
                    </div>
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
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editTask, styles["btn-1"])}>Modifier la tâche</button>
                    <button type="submit" className={classNames(styles.deleteTask, styles["btn-2"])}>Supprimer la tâche
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditTaskModal;
