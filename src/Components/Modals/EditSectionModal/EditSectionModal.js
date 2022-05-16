import {Modal} from "../../index";
import styles from "./EditSectionModal.module.css"
import {SwatchesPicker} from "react-color";
import React, {useState} from "react";
import classNames from "classnames";

const EditSectionModal = (props) => {

    const [color, setColor] = useState('#fff');

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const editSectionSubmitHandler = () => {
        /*the logic */
    }

    return (
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editSectionSubmitHandler}>
                <div className={styles["modal__title"]}>Edit Section</div>
                <div className={styles["section__name"]}>
                    <label htmlFor="section__name">Section Name</label>
                    <input type="text" placeholder="Task Name" required={true}/>
                </div>
                <SwatchesPicker className='mt-2' color={color} onChange={changeColor} />
                <button type="submit" className={classNames(styles.editSection,styles["btn-1"])}>Edit Section</button>
            </form>
        </Modal>
    );
};

export default EditSectionModal;
