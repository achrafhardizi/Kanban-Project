import React from 'react';
import styles from "./AddSessionModal.module.css";
import {SwatchesPicker} from "react-color";
import classNames from "classnames";
import {Modal} from "../../index";
import {useState} from "react";
import {BsFillPatchPlusFill} from "react-icons/bs";

const AddSessionModal = (props) => {

    const [color, setColor] = useState('#fff');

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const addSessionSubmitHandler = () => {

    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={addSessionSubmitHandler}>
                <div className={styles["modal__title"]}>Ajouter une session</div>
                <div className={styles["session__textInfo"]}>
                    <div className={styles["session__name"]}>
                        <label htmlFor="session__name">Nom de la session</label>
                        <input type="text" placeholder="Nom de la session" required={true}/>
                    </div>
                    <div className={styles["session__description"]}>
                        <label htmlFor="task__description">Description de la session</label>
                        <textarea cols="30" rows="5" placeholder="Description de la session"/>
                    </div>
                </div>
                <div className={styles["task__members"]}>
                    <label htmlFor="task__members">Membres</label>
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color:"hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <SwatchesPicker className='mt-2' color={color} onChange={changeColor}/>
                <button type="submit" className={classNames(styles.editSession, styles["btn-1"])}>Ajouter session</button>
            </form>
        </Modal>
    );
};

export default AddSessionModal;
