import styles from "./AddTagModal.module.css"
import {Modal, Tag} from "../../index";
import {SwatchesPicker} from "react-color";
import React, {useState} from "react";
import classNames from "classnames";
import {FaTimes} from "react-icons/fa";

const AddTagModal = (props) => {

    const [color, setColor] = useState('#fff');

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const addTagSubmitHandler = () => {
        /*the logic */
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={addTagSubmitHandler}>
                <div className={styles["modal__title"]}> Add Tag</div>
                <div className={styles["tag__name"]}>
                    <label htmlFor="tag__name">Tag Name</label>
                    <input type="text" placeholder="Tag Name" required={true}/>
                </div>
                <div className={styles["task__tags"]}>
                    <label htmlFor="task__members">Tags:</label>
                    <div className={styles["tags__group"]} style={{gridTemplateRows: 3}}>
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
                <SwatchesPicker className='mt-2' color={color} onChange={changeColor}/>
                <button type="submit" className={classNames(styles.addTag, styles["btn-1"])}>Add Tag</button>
            </form>
        </Modal>
    );
};

export default AddTagModal;
