import styles from "./EditTaskModal.module.css"
import {Modal} from "../../index";
import DatePicker from "react-datepicker"
import React, {useState} from "react";
import classNames from "classnames";
import {SwatchesPicker} from "react-color";


const EditTaskModal = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());
    const [color, setColor] = useState('#fff');

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
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
                    </div>
                </div>
                <div className={styles["task__dates"]}>
                    <div className={styles["task__startDay"]}>
                        <label>Start Date :</label>
                        <DatePicker closeOnScroll={true} selected={startDate} onChange={(date) => setStartDate(date)}/>
                    </div>
                    <div className={styles["task__finishDay"]}>
                        <label>Finish Date :</label>
                        <DatePicker closeOnScroll={true} selected={finishDate} minDate={startDate}
                                    onChange={(date) => setFinishDate(date)}/>
                    </div>
                </div>
                <SwatchesPicker className='mt-2' styles={{height:"500px"}} color={color} onChange={changeColor}/>
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editTask, styles["btn-1"])}>Edit Task</button>
                    <button type="submit" className={classNames(styles.deleteTask, styles["btn-2"])}>delete Task</button>
                </div>
            </form>
        </Modal>
    );
};

export default EditTaskModal;
