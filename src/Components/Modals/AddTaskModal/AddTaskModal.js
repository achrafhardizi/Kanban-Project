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
                <div className={styles["modal__title"]}>Ajouter une tâche</div>
                <div className={styles["task__name"]}>
                    <label htmlFor="task__name">Nom de la tâche</label>
                    <input type="text" placeholder="Nom de la tâche" required={true}/>
                </div>
                <div className={styles["task__tags"]}>
                    <span>Étiquettes :</span>
                    <div className={styles["tags__group"]}>
                        <Tag tagName={"important"} tagColor={"#e0465e"}/>
                        <Tag tagName={"optionnel"} tagColor={"#fbaa49"}/>
                        <Tag tagName={"en attendant"}/>
                    </div>
                </div>
                <button type="submit" className={classNames(styles.addTask,styles["btn-1"])}>Ajouter une tâche</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
