import styles from "./AddTagModal.module.css"
import {Modal} from "../../index";
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
                <div className={styles["modal__title"]}>Ajouter étiquette</div>
                <div className={styles["tag__name"]}>
                    <label htmlFor="tag__name">Nom de l'étiquette</label>
                    <input type="text" placeholder="Tag Name" required={true}/>
                </div>
                <div className={styles["task__tags"]}>
                    <label htmlFor="task__members">Étiquettes :</label>
                    <div className={styles["tags__group"]} style={{gridTemplateRows: 3}}>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#f44336"}}>important</div>
                            <FaTimes/>
                        </div>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#ffeb3b"}}>optionnel</div>
                            <FaTimes/>
                        </div>
                        <div className={styles["tagItem"]}>
                            <div style={{backgroundColor: "#81c784"}}>en attendant</div>
                            <FaTimes/>
                        </div>
                    </div>
                </div>
                <SwatchesPicker className='mt-2' color={color} onChange={changeColor}/>
                <button type="submit" className={classNames(styles.addTag, styles["btn-1"])}>Ajouter étiquette</button>
            </form>
        </Modal>
    );
};

export default AddTagModal;
