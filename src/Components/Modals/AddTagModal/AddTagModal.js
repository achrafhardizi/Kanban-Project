import styles from "./AddTagModal.module.css"
import {Modal, Tag} from "../../index";
import {SwatchesPicker} from "react-color";
import React, {useState} from "react";
import classNames from "classnames";

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
                <div className={styles["current__tags"]}>
                    <Tag tagName={"important"} tagColor={"#e0465e"} onClick={tagSelectedHandler}/>
                    <Tag tagName={"optional"} tagColor={"#fbaa49"} onClick={tagSelectedHandler}/>
                    <Tag tagName={"pending"} onClick={tagSelectedHandler}/>
                </div>
                <SwatchesPicker className='mt-2' color={color} onChange={changeColor}/>
                <button type="submit" className={classNames(styles.addTag, styles["btn-1"])}>Add Tag</button>
            </form>
        </Modal>
    );
};

export default AddTagModal;
