import React from 'react';
import styles from "../EditTaskModal/EditTaskModal.module.css";
import {BsFillPatchPlusFill} from "react-icons/bs";
import classNames from "classnames";
import {Modal} from "../../index";
import {SwatchesPicker} from "react-color";

const EditSessionModal = (props) =>{

    const editSessionSubmitHandler = () => {
        //logic
    }

    return (
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editSessionSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la session</div>
                <div className={styles["task__textInfo"]}>
                    <div className={styles["task__name"]}>
                        <label htmlFor="task__name">Nom de la tâche</label>
                        <input type="text" placeholder="Nom de la tâche" required={true}/>
                    </div>
                    <div className={styles["task__description"]}>
                        <label htmlFor="task__description">Description de la session</label>
                        <textarea cols="30" rows="5"/>
                    </div>
                </div>
                <div className={styles["task__members"]}>
                    <label htmlFor="task__members">Membres</label>
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color: "hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <SwatchesPicker className='mt-2' color={props.color} onChange={props.changeColor}/>
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editTask, styles["btn-1"])}>Modifier la session
                    </button>
                    <button type="submit" className={classNames(styles.deleteTask, styles["btn-2"])}>Supprimer la session
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSessionModal;
