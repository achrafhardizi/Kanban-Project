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
                <div className={styles["modal__title"]}>Edit Task</div>
                <div className={styles["task__textInfo"]}>
                    <div className={styles["task__name"]}>
                        <label htmlFor="task__name">Task Name</label>
                        <input type="text" placeholder="Task Name" required={true}/>
                    </div>
                    <div className={styles["task__description"]}>
                        <label htmlFor="task__description">Task Description</label>
                        <textarea cols="30" rows="5"/>
                    </div>
                </div>
                <div className={styles["task__members"]}>
                    <label htmlFor="task__members">Members</label>
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color:"hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <div className={styles["task__tags"]}>
                    <label htmlFor="task__members">Tags:</label>
                    <div className={styles["tags__group"]} style={{gridTemplateRows: 3}}>
                        {/*<Tag tagName={"important"} tagColor={"#e0465e"}/>*/}
                        {/*<Tag tagName={"optional"} tagColor={"#fbaa49"}/>*/}
                        {/*<Tag tagName={"pending"}/>*/}
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#e0465e"}}>important</div>
                            <FaTimes/>
                        </div>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#fbaa49"}}>optional</div>
                            <FaTimes/>
                        </div>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#1fc778"}}>pending</div>
                            <FaTimes/>
                        </div>
                    </div>
                </div>
                <div className={styles["task__dates"]}>
                    <div className={styles["task__startDay"]}>
                        <label>Start Date :</label>
                        <input type="date" name="startDay" id="startDay" defaultValue={startDate}
                               onChange={startDayOnChangeHandler}
                        />
                    </div>
                    <div className={styles["task__finishDay"]}>
                        <label>Finish Date :</label>
                        <input type="date" name="finishDay" id="finishDay" min={startDate}
                               onChange={finishDayOnChangeHandler}/>
                    </div>
                </div>
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editTask, styles["btn-1"])}>Edit Task</button>
                    <button type="submit" className={classNames(styles.deleteTask, styles["btn-2"])}>delete Task
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditTaskModal;
