import React from 'react';
import styles from "./EditSessionModal.module.css";
import {BsFillPatchPlusFill} from "react-icons/bs";
import classNames from "classnames";
import {Modal} from "../../index";
import {SliderPicker} from "react-color";
import {useState} from "react";

const EditSessionModal = (props) =>{

    const [color, setColor] = useState(props.session.color);

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const editSessionSubmitHandler = () => {
        //logic
    }

    return (
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editSessionSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la session</div>
                <div className={styles["session__textInfo"]}>
                    <div className={styles["session__name"]}>
                        <label htmlFor="session__name">Nom de la session</label>
                        <input type="text" value={props.session.sessionName} placeholder="Nom de la tâche" required={true}/>
                    </div>
                    <div className={styles["session__description"]}>
                        <label htmlFor="session__description">Description de la session</label>
                        <textarea cols="30" rows="5"/>
                    </div>
                </div>
                <div className={styles["session__owner"]}>
                    <label htmlFor="session__members">Owner :</label>
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color: "hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <div className={styles["session__members"]}>
                    <label htmlFor="session__members">Membres :</label>
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color: "hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <div className={styles["session__color"]}>
                    <label >Couleur de session</label>
                    <SliderPicker styles={{width: "100%",marginTop:"1em"}} className='mt-2' color={color} onChange={changeColor}/>
                </div>
                <div className={styles["button__group"]}>
                    <button type="submit" className={classNames(styles.editSession, styles["btn-1"])}>Modifier la session
                    </button>
                    <button type="submit" className={classNames(styles.deleteSession, styles["btn-2"])}>Supprimer la session
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSessionModal;
