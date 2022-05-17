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
                <div className={styles["modal__title"]}>Edit Section</div>
                <div className={styles["section__name"]}>
                    <label htmlFor="section__name">Section Name</label>
                    <input type="text" placeholder="Task Name" required={true}/>
                </div>
                <SwatchesPicker className='mt-2' color={props.color} onChange={props.changeColor} />
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editSection,styles["btn-1"])}>Edit Section</button>
                    <button type="submit" className={classNames(styles.deleteSection, styles["btn-2"])}>delete Section</button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSectionModal;
