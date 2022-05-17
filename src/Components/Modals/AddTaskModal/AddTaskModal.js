import styles from './AddTaskModal.module.css';
import {Modal, Tag} from "../../index";
import classNames from "classnames";


const AddTaskModal = (props) => {


    const addTaskSubmitHandler = () => {
        /*the logic */
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={addTaskSubmitHandler}>
                <div className={styles["modal__title"]}> Add Task</div>
                <div className={styles["task__name"]}>
                    <label htmlFor="task__name">Task Name</label>
                    <input type="text" placeholder="Task Name" required={true}/>
                </div>
                <div className={styles["task__tags"]}>
                    <span>Tags</span>
                    <div className={styles["tags__group"]}>
                        <Tag tagName={"important"} tagColor={"#e0465e"}/>
                        <Tag tagName={"optional"} tagColor={"#fbaa49"}/>
                        <Tag tagName={"pending"}/>
                    </div>
                </div>
                <button type="submit" className={classNames(styles.addTask,styles["btn-1"])}>Add Task</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
