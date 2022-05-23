import {Modal} from "../../index";
import styles from "./EditSectionModal.module.css"
import {SwatchesPicker} from "react-color";
import React, {useState} from "react";
import classNames from "classnames";

const EditSectionModal = (props) => {

    const editSectionSubmitHandler = () => {
        /*the logic */
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={editSectionSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la section</div>
                <div className={styles["section__name"]}>
                    <label htmlFor="section__name">Nom de la section</label>
                    <input type="text" placeholder="Nom de la section" required={true}/>
                </div>
                <SwatchesPicker className='mt-2' color={props.color} onChange={props.changeColor} />
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editSection,styles["btn-1"])}>Modifier la section</button>
                    <button type="submit" className={classNames(styles.deleteSection, styles["btn-2"])}>Supprimer la section</button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSectionModal;
